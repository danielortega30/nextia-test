import { Comment, Post, User } from "../types";

import axiosJSONPLACEHOLDER from "../config/api";

export const api = {
  getUsers: () =>
    axiosJSONPLACEHOLDER
      .get<User[]>("/users")
      .then((response) => response.data),

  getUser: (id: number) =>
    axiosJSONPLACEHOLDER
      .get<User>(`/users/${id}`)
      .then((response) => response.data),

  getPosts: () =>
    axiosJSONPLACEHOLDER
      .get<Post[]>("/posts")
      .then((response) => response.data),

  getUserPosts: (userId: number) =>
    axiosJSONPLACEHOLDER
      .get<Post[]>(`/users/${userId}/posts`)
      .then((response) => response.data),

  getPost: (id: number) =>
    axiosJSONPLACEHOLDER
      .get<Post>(`/posts/${id}`)
      .then((response) => response.data),

  getPostComments: (postId: number) =>
    axiosJSONPLACEHOLDER
      .get<Comment[]>(`/posts/${postId}/comments`)
      .then((response) => response.data),

  createPost: (post: Omit<Post, "id">) =>
    axiosJSONPLACEHOLDER
      .post<Post>("/posts", post)
      .then((response) => response.data),

  updatePost: (id: number, post: Partial<Post>) =>
    axiosJSONPLACEHOLDER
      .put<Post>(`/posts/${id}`, post)
      .then((response) => response.data),
};
