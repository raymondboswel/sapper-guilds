import { stores } from "@sapper/app";

export class HttpClient {
  baseUrl: string = "http://localhost:4100/api";
  headers: any = {
    "Content-Type": "application/json",
  };
  constructor() {
    // const unsubscribe = session.subscribe((sesh) => {
    //   token = sesh.token;
    // });
  }

  get(resourceUrl: string, extraHeaders?: any) {
    const headers = this.buildHeaders(extraHeaders);
    return fetch(`${this.baseUrl}/${resourceUrl}`, { headers, method: "GET" });
  }

  post(resourceUrl: string, body: any, extraHeaders?: any) {
    const headers = this.buildHeaders(extraHeaders);
    return fetch(`${this.baseUrl}/${resourceUrl}`, {
      headers,
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  put(resourceUrl: string, body: any, extraHeaders?: any) {
    const headers = this.buildHeaders(extraHeaders);
    return fetch(`${this.baseUrl}/${resourceUrl}`, {
      headers,
      method: "PUT",
      body: JSON.stringify(body),
    });
  }

  delete(resourceUrl: string, extraHeaders?: any) {
    const headers = this.buildHeaders(extraHeaders);
    return fetch(`${this.baseUrl}/${resourceUrl}`, {
      headers,
      method: "DELETE",
    });
  }

  buildHeaders(extraHeaders: any) {
    if (!extraHeaders) {
      extraHeaders = {};
    }
    console.log("this.headers", this.headers);
    const headers = new Headers();
    const headerKeys = Object.keys({ ...this.headers, ...extraHeaders });
    console.log("Header keys", headerKeys);
    Object.keys({ ...this.headers, ...extraHeaders }).forEach((k) => {
      console.log("Adding headers", k);
      headers.append(k, this.headers[k]);
    });
    console.log(headers);
    return headers;
  }
}

export const httpClient = new HttpClient();
