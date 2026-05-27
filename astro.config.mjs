import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  integrations: [icon(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
