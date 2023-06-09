import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import { astroImageTools } from "astro-imagetools";
import vercel from "@astrojs/vercel/serverless";
// https://astro.build/config
export default defineConfig({
  integrations: [react(),astroImageTools],
  output: "server",
  adapter: vercel()
});