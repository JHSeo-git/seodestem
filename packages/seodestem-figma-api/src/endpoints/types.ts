export type Paths = {
  '/v1/files/:key': {
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
  '/v1/files/:key/:title': {
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
