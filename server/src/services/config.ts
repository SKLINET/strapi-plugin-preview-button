"use strict";

import { PLUGIN_ID } from "../../../admin/src/pluginId";

export default ({ strapi }) => {
    console.log(PLUGIN_ID);
    return {
        getConfig(key = 'contentTypes') {
            return strapi.plugin(PLUGIN_ID).config(key) ?? {};
        },
    };
};
