import { app } from "@/config";
const LOCALSTORAGE_KEY_PREFIX = `FECA:${app.APP_ENV}`;

interface Storage {
  get(item: string): string | null;
  set(item: string, value: string): void;
  purge(item: string): void;
}

const isBrowser = typeof window !== "undefined";

export const storage: Storage = {
  get(item: string): string | null {
    if (!isBrowser) return null; // Check if running in a browser
    try {
      return window.localStorage.getItem(`${LOCALSTORAGE_KEY_PREFIX}:${item}`);
    } catch (e) {
      console.error(e);
      return null;
    }
  },
  set(item: string, value: string): void {
    if (!isBrowser) return; // Check if running in a browser
    try {
      window.localStorage.setItem(`${LOCALSTORAGE_KEY_PREFIX}:${item}`, value);
    } catch (e) {
      console.error(e);
    }
  },
  purge(item: string): void {
    if (!isBrowser) return; // Check if running in a browser
    try {
      window.localStorage.removeItem(`${LOCALSTORAGE_KEY_PREFIX}:${item}`);
    } catch (e) {
      console.error(e);
    }
  },
};
