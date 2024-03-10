// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sanity'],
    sanity: { projectId: 'vbib0jp0' },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    vite: {
        server: {
            hmr: {
                overlay: false,
            },
        },
    },
});
