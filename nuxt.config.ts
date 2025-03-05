// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '~/assets/css/custom.css', // Custom CSS file
  ],
  build: {
    postcss: {
      plugins: {
        autoprefixer: {},
      },
    },
  },
}
