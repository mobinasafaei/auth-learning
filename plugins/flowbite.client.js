import { initFlowbite } from "flowbite";
export default defineNuxtPlugin((nuxtApp) => {
    return nuxtApp.provide('initFlowbite', initFlowbite())
})