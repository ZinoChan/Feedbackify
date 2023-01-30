// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-icon",
    [
      "@nuxtjs/google-fonts",
      {
        googleFonts: {
          families: {
            Jost: true,
          },
        },
      },
    ],

    "@nuxtjs/tailwindcss",
  ],
  devServerHandlers: [],
});
