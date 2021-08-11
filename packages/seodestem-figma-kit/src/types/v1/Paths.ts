import { ExtractRequestParameters, ExtractRequestRequestBody } from '../Common';

export type Paths = {
  '/v1/files/:key': {
    get: {
      parameters: {
        key: string;
        version?: string;
        ids?: string;
        depth?: number;
        geometry?: string;
        plugin_data?: string;
        branch_data?: string;
      };
      response: {
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
  '/v1/files/:key/:title': {
    get: {
      parameters: {
        key: string;
        title: string;
      };
      response: {};
    };
  };
  [key: string]: object;
};

export type Operation<
  Url extends keyof Paths,
  Method extends keyof Paths[Url]
> = {
  parameters: ExtractRequestParameters<Paths[Url][Method]>;
  requestBody: ExtractRequestRequestBody<Paths[Url][Method]>;
  response: any;
};
