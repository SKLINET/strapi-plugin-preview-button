const bootstrap = ({ strapi: strapi2 }) => {
};
const destroy = ({ strapi: strapi2 }) => {
};
const register = ({ strapi: strapi2 }) => {
};
const config$3 = {
  default: {},
  validator() {
  }
};
const contentTypes = {};
const name = "@sklinet/strapi-plugin-preview-button";
const description = "Add a preview button and live view button to the content manager edit view to connect with your frontend app.";
const version = "1.0.0";
const keywords = [];
const author = {
  name: "SKLINET s.r.o.",
  url: "https://github.com/SKLINET"
};
const type = "commonjs";
const exports = {
  "./package.json": "./package.json",
  "./strapi-admin": {
    types: "./dist/admin/src/index.d.ts",
    source: "./admin/src/index.ts",
    "import": "./dist/admin/index.mjs",
    require: "./dist/admin/index.js",
    "default": "./dist/admin/index.js"
  },
  "./strapi-server": {
    types: "./dist/server/src/index.d.ts",
    source: "./server/src/index.ts",
    "import": "./dist/server/index.mjs",
    require: "./dist/server/index.js",
    "default": "./dist/server/index.js"
  }
};
const files = [
  "dist"
];
const scripts = {
  build: "strapi-plugin build",
  watch: "strapi-plugin watch",
  "watch:link": "strapi-plugin watch:link",
  verify: "strapi-plugin verify",
  "test:ts:front": "run -T tsc -p admin/tsconfig.json",
  "test:ts:back": "run -T tsc -p server/tsconfig.json"
};
const dependencies = {
  "@strapi/design-system": "^2.0.0-rc.12",
  "@strapi/icons": "^2.0.0-rc.12",
  lodash: "^4.17.21",
  "react-intl": "^6.8.4"
};
const devDependencies = {
  "@strapi/sdk-plugin": "^5.2.7",
  "@strapi/strapi": "^5.2.0",
  "@strapi/typescript-utils": "^5.2.0",
  "@types/react": "^18.3.12",
  "@types/react-dom": "^18.3.1",
  prettier: "^3.3.3",
  react: "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.27.0",
  "styled-components": "^6.1.13",
  typescript: "^5.6.3"
};
const peerDependencies = {
  "@strapi/sdk-plugin": "^5.2.7",
  "@strapi/strapi": "^5.2.0",
  react: "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.27.0",
  "styled-components": "^6.1.13"
};
const strapi$1 = {
  kind: "plugin",
  name: "preview-button",
  displayName: "Preview button",
  description: "Add a preview button and live view button to the content manager edit view to connect with your frontend app."
};
const license = "MIT";
const pluginPkg = {
  name,
  description,
  version,
  keywords,
  author,
  type,
  exports,
  files,
  scripts,
  dependencies,
  devDependencies,
  peerDependencies,
  strapi: strapi$1,
  license
};
const PLUGIN_ID = pluginPkg.name.replace(/^(@sklinet\/strapi-)plugin-/i, "");
const config$2 = {
  getConfig: async (ctx) => {
    const { configKey } = ctx.params;
    const config2 = await strapi.plugin(PLUGIN_ID).service("config").getConfig(configKey);
    ctx.send(config2);
  }
};
const controllers = {
  config: config$2
};
const middlewares = {};
const policies = {};
const config$1 = {
  type: "admin",
  routes: [
    {
      method: "GET",
      path: "/config/:configKey",
      handler: "config.getConfig",
      config: { policies: [] }
    }
  ]
};
const routes = {
  config: config$1
};
const config = ({ strapi: strapi2 }) => {
  return {
    getConfig(key = "contentTypes") {
      return strapi2.plugin(PLUGIN_ID).config(key) ?? {};
    }
  };
};
const services = {
  config
};
const index = {
  register,
  bootstrap,
  destroy,
  config: config$3,
  controllers,
  routes,
  services,
  contentTypes,
  policies,
  middlewares
};
export {
  index as default
};
