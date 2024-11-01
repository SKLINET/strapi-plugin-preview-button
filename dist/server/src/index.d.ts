declare const _default: {
    register: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    bootstrap: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    destroy: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    config: {
        default: {};
        validator(): void;
    };
    controllers: {
        config: {
            getConfig: (ctx: any) => Promise<void>;
        };
    };
    routes: {
        config: {
            type: string;
            routes: {
                method: string;
                path: string;
                handler: string;
                config: {
                    policies: any[];
                };
            }[];
        };
    };
    services: {
        config: ({ strapi }: {
            strapi: any;
        }) => {
            getConfig(key?: string): any;
        };
    };
    contentTypes: {};
    policies: {};
    middlewares: {};
};
export default _default;
