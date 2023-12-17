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
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface AuthResponse {
  accessToken: string;
  user: UserResponse;
}

export interface RegisterUserRequest {
  email: string;
  password: string;
  name: string;
  role: "user" | "admin";
  createdAt?: string;
}