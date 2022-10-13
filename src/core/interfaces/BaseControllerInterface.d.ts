interface BaseControllerInterface {
  path: string;

  loadPath: (path: string) => void;
}

export default BaseControllerInterface;
