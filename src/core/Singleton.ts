import SingletonInterface from "@core/interfaces/SingletonInterface";

class Singleton implements SingletonInterface {
  private static instance: SingletonInterface | null = null;

  static getInstance = () => {
    if (!this.hasInstance()) {
      this.instance = this.createInstance();
    }

    return this.instance as SingletonInterface;
  };

  private static createInstance: () => SingletonInterface = () => {
    return new Singleton();
  };

  private static hasInstance: () => boolean = () => {
    return Boolean(this.instance);
  };
}

export default Singleton;
