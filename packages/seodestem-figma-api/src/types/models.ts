export type Comment = {
  id: string;
  client_meta: Vector | FrameOffset;
  message: string;
  file_key: string;
  parent_id: string;
  user: User;
  created_at: string;
  resolved_at: string;
  order_id: number;
};

export type FrameOffset = {
  node_id: string;
  node_offset: Vector;
};

export type User = {
  id: string;
  handle: string;
  img_url: string;
  email: string;
};

export type Version = {
  id: string;
  created_at: string;
  label: string | null;
  description: string | null;
  user: User;
};

export type Project = {
  id: number;
  name: string;
};

export type BaseComponent = {
  key: string;
  file_key: string;
  node_id: string;
  thumbnail_url: string;
  name: string;
  description: string;
  created_at: string;
  update_at: string;
  user: User;
};

export type Component = {
  containing_frame: FrameInfo;
  containing_page: PageInfo;
} & BaseComponent;

export type ComponentSet = Component;

export type FrameInfo =
  | {
      node_id: string;
      name: string;
      background_color: string;
      page_id: string;
      page_name: string;
    }
  | {};

export type PageInfo = {};

export type StyleComponent = {
  style_type: StyleType;
  sort_position: string;
} & BaseComponent;
