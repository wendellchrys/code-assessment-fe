export const loadFromStorage = <T>(key: string, defaultValue: T): T => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : defaultValue;
  };
  
  export const saveToStorage = (key: string, data: unknown): void => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  