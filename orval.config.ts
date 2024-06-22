import { defineConfig } from "orval";

module.exports = defineConfig({
  base: {
    input: "./openapi.json",
    output: {
      baseUrl: "https://project-s.simple2b.net",
      target: "./api/api.ts",
      client: "react-query",
      mode: "tags-split",
      schemas: "api/model",
      mock: true,
    },
  },
});
