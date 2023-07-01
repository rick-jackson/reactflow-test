type Node = {
  id: string;
  position: { x: number; y: number };
  value?: number;
  data?: {
    id?: string;
  };
};

export default Node;
