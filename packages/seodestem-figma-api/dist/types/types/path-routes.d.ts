import * as ModelType from './models';
declare type components = {
    'success-no-content': {
        'application/json': {
            error?: boolean;
            status?: number;
        };
    };
    'basic-error': {
        'application/json': {
            status?: number;
            err?: string;
            error?: boolean;
            message?: string;
        };
    };
};
export declare type Paths = {
    '/v1/files/:key': {
        get: {
            parameters: {
                path: {
                    key: string;
                };
                query: {
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
                        'application/json': {
                            name: string;
                            role: string;
                            lastModified: string;
                            thumbnailUrl: string;
                            version: string;
                            document: DocumentNode;
                            components: Map<string, ComponentNode>;
                            schemaVersion: 0;
                            styles: Map<string, StyleType>;
                            mainFileKey: string;
                            branches: [
                                {
                                    key: string;
                                    name: string;
                                    thumbnail_url: string;
                                    last_modified: string;
                                }
                            ];
                        };
                    };
                };
                404: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/files/:key/nodes': {
        get: {
            parameters: {
                path: {
                    key: string;
                };
                query: {
                    ids: string;
                    version?: string;
                    depth?: number;
                    geometry?: string;
                    plugin_data?: string;
                };
            };
            responses: {
                200: {
                    content: {
                        'application/json': {
                            name: string;
                            role: string;
                            lastModified: string;
                            thumbnailUrl: string;
                            version: string;
                            nodes: {
                                [id: string]: {
                                    document: DocumentNode;
                                    components: Map<string, ComponentNode>;
                                    schemaVersion: 0;
                                    styles: Map<string, StyleType>;
                                };
                            };
                        };
                    };
                };
                400: {
                    content: components['basic-error'];
                };
                404: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/images/:key': {
        get: {
            parameters: {
                path: {
                    key: string;
                };
                query: {
                    ids: string;
                    scale?: number;
                    format?: string;
                    svg_include_id?: boolean;
                    svg_simplify_stroke?: boolean;
                    use_absolute_bounds?: boolean;
                    version?: string;
                };
            };
            responses: {
                200: {
                    content: {
                        'application/json': {
                            images: Map<string, string>;
                        };
                    };
                };
                400: {
                    content: components['basic-error'];
                };
                404: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/files/:key/images': {
        get: {
            parameters: {
                path: {
                    key: string;
                };
            };
            responses: {
                200: {
                    content: {
                        'application/json': {
                            meta: {
                                images: {
                                    [imageRef: string]: string;
                                };
                            };
                        };
                    };
                };
                404: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/files/:key/comments': {
        get: {
            parameters: {
                path: {
                    key: string;
                };
            };
            responses: {
                200: {
                    content: {
                        'application/json': {
                            comments: ModelType.Comment[];
                        };
                    };
                };
                404: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/files/:file_key/comments': {
        post: {
            parameters: {
                path: {
                    file_key: string;
                };
            };
            requestBody: {
                content: {
                    'application/json': {
                        message: string;
                        comment_id?: string;
                        client_meta?: Vector | ModelType.FrameOffset;
                    };
                };
            };
            responses: {
                200: {
                    content: {
                        'application/json': ModelType.Comment;
                    };
                };
                404: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/files/:file_key/comments/:comment_id': {
        delete: {
            parameters: {
                path: {
                    file_key: string;
                    comment_id: string;
                };
            };
            responses: {
                200: {
                    content: components['success-no-content'];
                };
                404: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/me': {
        get: {
            responses: {
                200: {
                    content: {
                        'application/json': ModelType.User;
                    };
                };
                403: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/files/:key/versions': {
        get: {
            parameters: {
                path: {
                    key: string;
                };
            };
            responses: {
                200: {
                    content: {
                        'application/json': {
                            versions: ModelType.Version[];
                            pagination?: {
                                prev_page?: string;
                                next_page?: string;
                            };
                        };
                    };
                };
                404: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/teams/:team_id/projects': {
        get: {
            parameters: {
                path: {
                    team_id: string;
                };
            };
            responses: {
                200: {
                    content: {
                        'application/json': {
                            name: string;
                            projects: ModelType.Project[];
                        };
                    };
                };
                400: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/projects/:project_id/files': {
        get: {
            parameters: {
                path: {
                    project_id: string;
                };
                query: {
                    branch_data?: boolean;
                };
            };
            responses: {
                200: {
                    content: {
                        'application/json': {
                            name: string;
                            files: [
                                {
                                    key: string;
                                    name: string;
                                    thumbnail_url: string;
                                    last_modified: string;
                                    branches?: [
                                        {
                                            key: string;
                                            name: string;
                                            thumbnail_url: string;
                                            last_modified: string;
                                        }
                                    ];
                                }
                            ];
                        };
                    };
                };
                400: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/teams/:team_id/components': {
        get: {
            parameters: {
                path: {
                    team_id: string;
                };
                query: {
                    page_size?: number;
                    after?: number;
                    before?: number;
                };
            };
            responses: {
                200: {
                    content: {
                        'application/json': {
                            meta: {
                                components: ModelType.Component[];
                                cursor: {
                                    before: number;
                                    after: number;
                                };
                            };
                        };
                    };
                };
                400: {
                    content: components['basic-error'];
                };
                403: {
                    content: components['basic-error'];
                };
                404: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/files/:file_key/components': {
        get: {
            parameters: {
                path: {
                    file_key: string;
                };
            };
            responses: {
                200: {
                    content: {
                        'application/json': {
                            meta: {
                                components: ModelType.Component[];
                            };
                        };
                    };
                };
                400: {
                    content: components['basic-error'];
                };
                403: {
                    content: components['basic-error'];
                };
                404: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/components/:key': {
        get: {
            parameters: {
                path: {
                    key: string;
                };
            };
            responses: {
                200: {
                    content: {
                        'application/json': {
                            meta: ModelType.Component;
                        };
                    };
                };
                400: {
                    content: components['basic-error'];
                };
                403: {
                    content: components['basic-error'];
                };
                404: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/teams/:team_id/component_sets': {
        get: {
            parameters: {
                path: {
                    team_id: string;
                };
                query: {
                    page_size?: number;
                    after?: number;
                    before?: number;
                };
            };
            responses: {
                200: {
                    content: {
                        'application/json': {
                            meta: {
                                component_sets: ModelType.ComponentSet[];
                                cursor: {
                                    before: number;
                                    after: number;
                                };
                            };
                        };
                    };
                };
                400: {
                    content: components['basic-error'];
                };
                403: {
                    content: components['basic-error'];
                };
                404: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/files/:file_key/component_sets': {
        get: {
            parameters: {
                path: {
                    file_key: string;
                };
            };
            responses: {
                200: {
                    content: {
                        'application/json': {
                            meta: {
                                component_sets: ModelType.ComponentSet[];
                            };
                        };
                    };
                };
                400: {
                    content: components['basic-error'];
                };
                403: {
                    content: components['basic-error'];
                };
                404: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/component_sets/:key': {
        get: {
            parameters: {
                path: {
                    key: string;
                };
            };
            responses: {
                200: {
                    content: {
                        'application/json': {
                            meta: ModelType.ComponentSet;
                        };
                    };
                };
                400: {
                    content: components['basic-error'];
                };
                403: {
                    content: components['basic-error'];
                };
                404: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/teams/:team_id/styles': {
        get: {
            parameters: {
                path: {
                    team_id: string;
                };
                query: {
                    page_size?: number;
                    after?: number;
                    before?: number;
                };
            };
            responses: {
                200: {
                    content: {
                        'application/json': {
                            meta: {
                                styles: ModelType.StyleComponent[];
                                cursor: {
                                    before: number;
                                    after: number;
                                };
                            };
                        };
                    };
                };
                400: {
                    content: components['basic-error'];
                };
                403: {
                    content: components['basic-error'];
                };
                404: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/files/:file_key/styles': {
        get: {
            parameters: {
                path: {
                    file_key: string;
                };
            };
            responses: {
                200: {
                    content: {
                        'application/json': {
                            meta: {
                                styles: ModelType.StyleComponent[];
                            };
                        };
                    };
                };
                400: {
                    content: components['basic-error'];
                };
                403: {
                    content: components['basic-error'];
                };
                404: {
                    content: components['basic-error'];
                };
            };
        };
    };
    '/v1/styles/:key': {
        get: {
            parameters: {
                path: {
                    key: string;
                };
            };
            responses: {
                200: {
                    content: {
                        'application/json': {
                            meta: ModelType.StyleComponent;
                        };
                    };
                };
                400: {
                    content: components['basic-error'];
                };
                403: {
                    content: components['basic-error'];
                };
                404: {
                    content: components['basic-error'];
                };
            };
        };
    };
};
export {};
