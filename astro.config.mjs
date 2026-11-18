import { defineConfig } from "astro/config";
import stylex from "@stylexjs/unplugin";
import { loadEnv } from "vite";

// The CV page holds my phone number. Build it only with PUBLIC_SHOW_CV=true.
const { PUBLIC_SHOW_CV } = loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "");
const cvPage = {
  name: "cv-page",
  hooks: {
    "astro:config:setup": ({ injectRoute }) => {
      if (PUBLIC_SHOW_CV === "true") injectRoute({ pattern: "/cv", entrypoint: "./src/pages/_cv.astro" });
    },
  },
};

export default defineConfig({
  site: "https://snaetwarre.github.io",
  base: "/portfolio",
  integrations: [cvPage],
  build: {
    format: "file",
  },
  vite: {
    // StyleX injects its global rules into one CSS asset. Share that asset
    // across all routes, including pages with additional KaTeX styles.
    build: { cssCodeSplit: false },
    plugins: [stylex.vite()],
  },
});
