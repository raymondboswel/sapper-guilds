import { writable } from "svelte/store";

const storedToken = (localStorage as any).getItem("token");
export const tokenStore = writable(storedToken);
tokenStore.subscribe((value) => {
  (localStorage as any).setItem("token", value);
});
