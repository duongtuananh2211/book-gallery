import BaseServiceInterface from "@core/interfaces/BaseServiceInterface";

class BaseService implements BaseServiceInterface {
  list: <T>() => Promise<T[]> = () =>
    new Promise((res) =>
      setTimeout(() => res(["anhdt", "anhdt2", "anhdt3"] as any), 2000)
    );
}

export default BaseService;
