export interface IContentType {
    uid: string;
    draft: {
        url: string;
        query: {
            type: string;
            slug: string;
            pageId: string;
            locale: string;
        };
    };
    published: {
        url: string;
        query: {
            type: string;
            slug: string;
            pageId: string;
            locale: string;
        };
    };
}
export interface ISettings {
    contentTypes: IContentType[];
}
export declare const useSettings: () => ISettings | null;
