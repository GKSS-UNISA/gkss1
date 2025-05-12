import liveServer from "live-server";

liveServer.start({
  port: 3001,
  host: "0.0.0.0",
  ignore: ".env,.env.local,README.md,package.json",
  file: "index.html",
  logLevel: 0,
});
