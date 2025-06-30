export function setLocalStorage(key: string, value: unknown): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export function getLocalStorage<T = unknown>(key: string): T | null {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  }
  return null;
}
