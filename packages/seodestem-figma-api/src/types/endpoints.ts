import { Paths } from './path-routes';
import { ExtractRequest, ExtractResponses, MethodsMap, RequestHeaders } from './common';

export type Operation<Url extends keyof Paths, Method extends keyof Paths[Url]> = {
  parameters: ExtractRequest<Paths[Url][Method]>;
  request: {
    method: Method extends keyof MethodsMap ? MethodsMap[Method] : never;
    url: Url;
    headers: RequestHeaders;
  };
  responses: ExtractResponses<Paths[Url][Method]>;
};

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
  'GET /v1/files/:key/comments': Operation<'/v1/files/:key/comments', 'get'>;
  'POST /v1/files/:file_key/comments': Operation<'/v1/files/:file_key/comments', 'post'>;
  'DELETE /v1/files/:file_key/comments/:comment_id': Operation<'/v1/files/:file_key/comments/:comment_id', 'delete'>;

  /**
   * users
   */
  'GET /v1/me': Operation<'/v1/me', 'get'>;

  /**
   * version history
   */
  'GET /v1/files/:key/versions': Operation<'/v1/files/:key/versions', 'get'>;

  /**
   * projects
   */
  'GET /v1/teams/:team_id/projects': Operation<'/v1/teams/:team_id/projects', 'get'>;
  'GET /v1/projects/:project_id/files': Operation<'/v1/projects/:project_id/files', 'get'>;

  /**
   * comnponents and styles
   */
  'GET /v1/teams/:team_id/components': Operation<'/v1/teams/:team_id/components', 'get'>;
  'GET /v1/files/:file_key/components': Operation<'/v1/files/:file_key/components', 'get'>;
  'GET /v1/components/:key': Operation<'/v1/components/:key', 'get'>;
  'GET /v1/teams/:team_id/component_sets': Operation<'/v1/teams/:team_id/component_sets', 'get'>;
  'GET /v1/files/:file_key/component_sets': Operation<'/v1/files/:file_key/component_sets', 'get'>;
  'GET /v1/component_sets/:key': Operation<'/v1/component_sets/:key', 'get'>;
  'GET /v1/teams/:team_id/styles': Operation<'/v1/teams/:team_id/styles', 'get'>;
  'GET /v1/files/:file_key/styles': Operation<'/v1/files/:file_key/styles', 'get'>;
  'GET /v1/styles/:key': Operation<'/v1/styles/:key', 'get'>;
};
