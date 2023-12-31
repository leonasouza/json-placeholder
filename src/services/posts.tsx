// TYPES
import type { Post } from '@/types/posts'

// SERVICES
import { api } from '@/services/api'

export const getPosts = async (): Promise<Post[]> => {
  const response = await api.get<Post[]>('/posts')
  return response.data
}

export const getPost = async (id: string): Promise<Post> => {
  const response = await api.get<Post>(`/posts/${id}`)
  return response.data
}

export const createPost = async (post: Partial<Post>): Promise<Post> => {
  const response = await api.post<Post>('/posts', post)
  return response.data
}

export const editPost = async (post: Partial<Post>, postId: string): Promise<Post> => {
  const response = await api.put<Post>(`/posts/${postId}`, post)
  return response.data
}

export const deletePost = async (postId: string): Promise<void> => {
  const response = await api.delete(`/posts/${postId}`)
  return response.data
}
