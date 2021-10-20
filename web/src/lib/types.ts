export type MessageType = {
  id: string
  text: string
  created_at: string
}

export type UserType = {
  id: string
  name: string
  github_id: number
  avatar_url: string
  login: string
  created_at: string
  updated_at: string
}

export type Optional<T> = T | null
