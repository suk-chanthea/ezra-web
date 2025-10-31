export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export type HttpOptions<TBody = unknown> = {
  method?: HttpMethod;
  body?: TBody;
  authToken?: string | null;
  headers?: Record<string, string>;
};

export async function http<TResponse = unknown, TBody = unknown>(
  path: string,
  options: HttpOptions<TBody> = {}
): Promise<TResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";
  const { method = "GET", body, authToken, headers = {} } = options;

  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });

  const contentType = res.headers.get("content-type") || "";
  let data: any = null;
  if (contentType.includes("application/json")) {
    data = await res.json();
  } else {
    data = (await res.text()) as any;
  }

  if (!res.ok) {
    const errorMessage = (data && (data.error || data.errors)) || res.statusText || "Request failed";
    throw new Error(typeof errorMessage === "string" ? errorMessage : JSON.stringify(errorMessage));
  }

  return data as TResponse;
}


