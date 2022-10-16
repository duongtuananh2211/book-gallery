const instances: { [k: string]: any } = {};

const Singleton = <T extends Object>(cl: any) => {
  const className = cl.name;

  if (!instances[className]) {
    console.log("init class");
    instances[className] = new cl();
  }

  return instances[className] as T;
};

export default Singleton;
