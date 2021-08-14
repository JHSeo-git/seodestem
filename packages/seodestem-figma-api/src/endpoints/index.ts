import { Paths } from './path-routes';
import {
  ExtractRequest,
  ExtractResponses,
  MethodsMap,
  RequestHeaders,
} from './types';

export type Operation<
  Url extends keyof Paths,
  Method extends keyof Paths[Url]
> = {
  parameters: ExtractRequest<Paths[Url][Method]>;
  request: {
    method: Method extends keyof MethodsMap ? MethodsMap[Method] : never;
    url: Url;
    headers: RequestHeaders;
  };
  responses: ExtractResponses<Paths[Url][Method]>;
};

export const EndpointRoutes = [
  /**
   * files
   */
  'GET /v1/files/:key',
  'GET /v1/files/:key/nodes',
  'GET /v1/images/:key',
  'GET /v1/files/:key/images',

  /**
   * comments
   */
  'GET /v1/files/:key/comments',
  'POST /v1/files/:file_key/comments',
  'DELETE /v1/files/:file_key/comments',

  /**
   * users
   */
  'GET /v1/me',

  /**
   * version history
   */
  'GET /v1/files/:key/versions',

  /**
   * projects
   */
  'GET /v1/teams/:team_id/projects',
  'GET /v1/projects/:project_id/files',

  /**
   * comnponents and styles
   */
  'GET /v1/teams/:team_id/components',
  'GET /v1/files/:file_key/components',
  'GET /v1/components/:key',
  'GET /v1/teams/:team_id/component_sets',
  'GET /v1/files/:file_key/component_sets',
  'GET /v1/component_sets/:key',
  'GET /v1/teams/:team_id/styles',
  'GET /v1/files/:file_key/styles',
  'GET /v1/styles/:key',
];

export type Endpoints = {
  /**
   * files
   */
  'GET /v1/files/:key': Operation<'/v1/files/:key', 'get'>;
  'GET /v1/files/:key/nodes': Operation<'/v1/files/:key/nodes', 'get'>;
  'GET /v1/images/:key': Operation<'/v1/files/:key/nodes', 'get'>;
  'GET /v1/files/:key/images': Operation<'/v1/files/:key/nodes', 'get'>;

  /**
   * comments
   */
  'GET /v1/files/:key/comments': Operation<'/v1/files/:key', 'get'>;
  'POST /v1/files/:file_key/comments': Operation<'/v1/files/:key', 'get'>;
  'DELETE /v1/files/:file_key/comments': Operation<'/v1/files/:key', 'get'>;
};
