import JSONObject from "../interfaces/JSON";

type HttpMethod = "GET" | "POST" | "PUT" | "DELTE";

type RequestBody = "string" | JSONObject;

class ApiService {
  public async sendRequestTo(url: string) {
    await this.request("POST", url);
  }

  private async request(method: HttpMethod, url: string, requestBody?: RequestBody) {
    let body: string | undefined;

    if (requestBody) {
      if (typeof requestBody === "string") {
        body = requestBody;
      } else {
        body = JSON.stringify(requestBody);
      }
    }

    let requestInit: any = undefined;

    if (method === "GET") {
      requestInit = {
        method,
      };
    } else {
      requestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body,
      };
    }

    try {
      const response = await fetch(url, requestInit);

      if (response.ok) {
        return response.json();
      }

      const responseContentType = response.headers.get("content-type");
      if (responseContentType?.startsWith("application/json")) {
        const errorData = await response.json();
        const errorMessage = errorData.message;
        console.error("Error Message: " + errorMessage);
        if (response.status === 401) {
          document.location.href = "/api/auth/logout";
        } else {
          console.error("errorData.code:", errorData.code);
          console.error("response.status:", response.status);
          console.error("errorMessage:", errorMessage);
          // throw new ApiError(errorData.code, response.status, errorMessage);
        }
      } else {
        throw new Error(await response.text());
      }
    } catch (error) {
      console.error("ERROR HERE", error);
    }
  }
}

export default new ApiService();
