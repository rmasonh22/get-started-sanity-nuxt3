import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: ["@nuxtjs/sanity"],
  sanity: {
    projectId: "3hmcprbp",
		apiVersion: '2022-03-25'
  },
  css: ["@/assets/css/styles.css"]
});
