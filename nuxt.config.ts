import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    title: process.env.npm_package_name || 'Crowdfundly',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        hid: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { property: 'author', hid: 'author', content: 'crowdfundly.com' },
      { property: 'copyright', hid: 'copyright', content: 'crowdfundly.com' },
      { property: 'og:type', hid: 'og:type', content: 'website' },
      { property: 'og:title', hid: 'og:title', content: 'Crowdfundly' },
      {
        property: 'og:icon',
        hid: 'og:icon',
        content:
          'https://crowdfundly.com/wp-content/uploads/2022/06/favicon.ico',
      },
      {
        property: 'og:description',
        hid: 'og:description',
        content: 'Build Your Crowdfunding Platform',
      },
      {
        property: 'description',
        hid: 'description',
        content:
          process.env.npm_package_description ||
          'Build Your Crowdfunding Platform',
      },
      { property: 'url', hid: 'url', content: 'https://crowdfundly.com' },
      { property: 'og:url', hid: 'og:url', content: 'https://crowdfundly.com' },
      {
        rel: 'canonical',
        hid: 'canonical',
        content: 'https://crowdfundly.com',
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
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
})
