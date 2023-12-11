export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
}

export interface RegisterUserSchema {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface RegisterUserRequest {
  name: string;
  email: string;
  password: string;
  role?: string;
  createdAt: string;
}

export interface UserResponse {
  name: string;
  email: string;
  message: string;
}
