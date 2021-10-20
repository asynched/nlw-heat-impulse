const LOCAL_STORAGE_TOKEN_KEY = '@dowhile:token'

export const clearLocalStorageToken = () => {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
}

export const getLocalStorageToken = () => {
  return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
}

export const setLocalStorageToken = (token: string) => {
  localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token)
}
