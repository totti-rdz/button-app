import { localStore } from "../services/LocalStore";

class Url {
  public async save(url: string) {
    await localStore.save("url", url);
  }

  public async read() {
    return await localStore.read("url");
  }

  public async reset() {
    localStore.reset("url");
  }
}

export const targetUrl = new Url();
