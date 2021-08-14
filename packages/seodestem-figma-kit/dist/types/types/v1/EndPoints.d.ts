import { ExtractResponses, FigmaKitRequestParameters } from './Common';
export declare type Operation<Url extends keyof Paths, Method extends keyof Paths[Url]> = {
    parameters: FigmaKitRequestParameters<Paths[Url][Method]>;
    responses: ExtractResponses<Paths[Url][Method]>;
};
export declare type Paths = {
    '/v1/files/{key}': {
        get: {
            parameters: {
                path: {
                    key: string;
                    version?: string;
                    ids?: string;
                    depth?: number;
                    geometry?: string;
                    plugin_data?: string;
                    branch_data?: string;
                };
            };
            responses: {
                200: {
                    content: {
                        name: String;
                        role: String;
                        lastModified: String;
                        thumbnailUrl: String;
                        version: String;
                        document: NodeType;
                        components: Map<String, ComponentNode>;
                        schemaVersion: 0;
                        styles: Map<String, StyleType>;
                        mainFileKey: String;
                        branches: [
                            {
                                key: String;
                                name: String;
                                thumbnail_url: String;
                                last_modified: String;
                            }
                        ];
                    };
                };
                404: {
                    content: {
                        message?: string;
                        url?: string;
                        status?: string;
                    };
                };
            };
        };
    };
    '/v1/files/{key}/{title}': {
        get: {
            parameters: {
                path: {
                    key: string;
                    title: string;
                };
            };
            responses: {
                200: {};
            };
        };
    };
};
export declare type EndPoints = {
    'GET /v1/files/{key}': Operation<'/v1/files/{key}', 'get'>;
    'GET /v1/files/{key}/{title}': Operation<'/v1/files/{key}/{title}', 'get'>;
};
