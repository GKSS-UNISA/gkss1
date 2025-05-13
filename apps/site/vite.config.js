/** @type {import('vite').UserConfig} */
export default {
  root: "src/",
  appType: "mpa",
  build: {
    outDir: "../dist",
  },
  server: {
    host: true,
    port: 3001,
  },
};
