declare namespace App {
  export type UserType = {
    name: string
    avatar_url: string
  }

  export type MessageType = {
    id: string
    text: string
    user: UserType
  }
}
