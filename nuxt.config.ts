// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-icon",
    [
      "@nuxtjs/google-fonts",
      {
        googleFonts: {
          families: {
            Padauk: true,
            Poppins: true,
          },
        },
      },
    ],

    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
  ],
  devServerHandlers: [],
});
