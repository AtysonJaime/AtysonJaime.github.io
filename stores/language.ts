import { defineStore } from "pinia";

export const useLanguageStore = defineStore("language", {
  state: () => ({
    locale: "pt-br" as string,
  }),
  actions: {
    setLocale(locale: string) {
      this.locale = locale;
      localStorage.setItem("language", locale);
    },
  },
});
