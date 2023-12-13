import axios from "axios";
import {
  LoginUserRequest,
  RegisterUserRequest,
  RegisterUserResponse,
  LoginUserResponse,
} from "../../interfaces/userInterface";

export const registerUser = async (
  body: RegisterUserRequest,
): Promise<RegisterUserResponse> => {
  const data = await axios
    .post(`http://localhost:8080/users`, body)
    .then((res) => res.data);

  return data;
};

export const loginUser = async ({
  email,
  password,
}: LoginUserRequest): Promise<LoginUserResponse[]> => {
  const data = await axios
    .get(`http://localhost:8080/users?email=${email}&password=${password}`)
    .then((res) => res.data);

  return data;
};
