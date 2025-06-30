export interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export async function fetcher<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {}),
    },
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "server error");
  }

  return response.json() as Promise<T>;
}
