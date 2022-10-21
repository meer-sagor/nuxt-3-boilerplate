// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  app: {
    head: {
      title: 'nuxt-3-boilerplate',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          hid: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          property: 'apple-mobile-web-app-capable',
          hid: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
        {
          property: 'apple-touch-fullscreen',
          hid: 'apple-touch-fullscreen',
          content: 'yes',
        },
      ],
      link: [],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
    '@vueuse/nuxt',
  ],
}
