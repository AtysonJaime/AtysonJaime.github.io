import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", {
  state: () => ({
    itens: [] as MenuItem[],
  }),

  actions: {
    setItens(t: any) {
      this.itens = [
        {
          name: t("menu.start.name"),
          href: t("menu.start.href"),
          title: t("menu.start.title"),
          icon: "fas fa-home",
        },
        {
          name: t("menu.about.name"),
          href: t("menu.about.href"),
          title: t("menu.about.title"),
          icon: "far fa-user",
        },
        {
          name: t("menu.experience.name"),
          href: t("menu.experience.href"),
          title: t("menu.experience.title"),
          icon: "fas fa-briefcase",
        },
        {
          name: t("menu.education.name"),
          href: t("menu.education.href"),
          title: t("menu.education.title"),
          icon: "fas fa-graduation-cap",
        },
        {
          name: t("menu.skills.name"),
          href: t("menu.skills.href"),
          title: t("menu.skills.title"),
          icon: "mdi mdi-bullseye-arrow",
        },
        {
          name: t("menu.projects.name"),
          href: t("menu.projects.href"),
          title: t("menu.projects.title"),
          icon: "far fa-image",
        },
      ];
    },
  },
});
