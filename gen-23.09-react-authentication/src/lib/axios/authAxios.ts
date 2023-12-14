import axios from "axios";
import {
  LoginUserRequest,
  RegisterUserRequest,
  AuthResponse,
} from "../../interfaces/userInterface";

export const registerUser = async (
  body: RegisterUserRequest,
): Promise<AuthResponse> => {
  const data = await axios
    .post(`http://localhost:8080/register`, body)
    .then((res) => res.data);

  return data;
};

export const loginUser = async ({
  email,
  password,
}: LoginUserRequest): Promise<AuthResponse> => {
  const data = await axios
    .post(`http://localhost:8080/login`, { email, password })
    .then((res) => res.data);

  return data;
};
