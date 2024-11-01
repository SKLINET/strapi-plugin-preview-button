"use strict";

import { PLUGIN_ID } from "../../../admin/src/pluginId";

export default {
    getConfig: async (ctx) => {
        const { configKey } = ctx.params;
        const config = await strapi.plugin(PLUGIN_ID).service('config').getConfig(configKey);
        ctx.send(config);
    },
};
