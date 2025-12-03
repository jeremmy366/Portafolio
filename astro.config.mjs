// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://jeremmy.dev',
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
