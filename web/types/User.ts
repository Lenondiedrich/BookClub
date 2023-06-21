export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  avatarUrl: string | null;
  createdAt: string;
  wishListId: string;
}

export interface LoginResponse {
  authenticated: boolean
	id: string
	name: string
	email: string
	token: string
}