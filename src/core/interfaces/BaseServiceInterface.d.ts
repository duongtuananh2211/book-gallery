interface BaseServiceInterface {
  list: <T>() => Promise<T[]>;
}

export default BaseServiceInterface;
