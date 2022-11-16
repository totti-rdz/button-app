import { localStore } from "../services/LocalStore";

class Status {
  public async save(status: boolean) {
    console.log("hellooooo");
    await localStore.save("status", status.toString());
  }

  public async read() {
    console.log("wooooorld");
    // return await localStore.read("status");
    const value = await localStore.read("status");
    console.log("value", value);
    return value;
  }

  public async reset() {
    localStore.reset("status");
  }
}

export const status = new Status();
