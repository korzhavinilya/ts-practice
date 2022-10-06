import Container from '../container';

type HandlerContextType = {
  instance: any;
  container: Container;
};

export type HandlerType = (context: HandlerContextType) => any;
