// api.ts
interface Item {
    id: number;
    name: string;
  }
  
  const mockApi = (page: number, pageSize: number): Promise<Item[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = Array.from({ length: pageSize }, (_, index) => ({
          id: index + 1 + (page - 1) * pageSize,
          name: `Item ${index + 1 + (page - 1) * pageSize}`,
        }));
        resolve(data);
      }, 500);
    });
  };
  
  export default mockApi;
  