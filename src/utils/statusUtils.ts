import { localStore } from "../services/LocalStore";

class Status {
  public async save(status: boolean) {
    await localStore.save("status", status.toString());
  }

  public async read() {
    // return await localStore.read("status");
    const value = await localStore.read("status");
    return value;
  }

  public async reset() {
    localStore.reset("status");
  }
}

export const status = new Status();
