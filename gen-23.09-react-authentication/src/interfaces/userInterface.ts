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

export interface UserResponse {
  name: string;
  email: string;
  role: string;
}

export interface RegisterUserRequest {
  name: string;
  email: string;
  password: string;
  role?: string;
  createdAt: string;
}

export interface RegisterUserResponse extends UserResponse {}

export interface LoginUserResponse extends UserResponse {}
