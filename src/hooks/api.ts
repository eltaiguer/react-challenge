export async function searchItem(searchTerm: string) {
  return new Promise<any>((resolve, reject) => {
    // adding a small delay to make the app feel more realistic
    setTimeout(async () => {
      try {
        const response = await fetch('/data/users.json');
        const data: any[] = await response.json();
        const query = searchTerm.toLowerCase();
        resolve(data.filter(({ name }: { name: string }) => name.toLowerCase().includes(query)));
      } catch (error) {
        reject(error);
      }
    }, 1500);
  });
}

export async function fetchItem(itemId: number) {
  return new Promise<any>((resolve, reject) => {
    // adding a small delay to make the app feel more realistic
    setTimeout(async () => {
      try {
        const response = await fetch('/data/users.json');
        const data: any = await response.json();
        resolve(data.find(({ id }: { id: number }) => itemId === id));
      } catch (error) {
        reject(error);
      }
    }, 1500);
  });
}
