import { Button } from "../../../components/Button";
import { loginUser } from "../../../lib/axios/authAxios";
import { useAppDispatch } from "../../../store/hooks";
import { setAccessToken, setUser } from "../../../store/slices/authSlice";
import * as yup from "yup";
import { LoginUserRequest } from "../../../interfaces/userInterface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const loginSchema: yup.ObjectSchema<LoginUserRequest> = yup.object().shape({
    email: yup.string().email().required("Email harus diisi"),
    password: yup.string().required("Password harus diisi"),
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(loginSchema) });

  const handleOnSubmit = async (data: LoginUserRequest) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    await loginUser(payload)
      .then((res) => {
        dispatch(setUser(res.user));
        dispatch(setAccessToken(res.accessToken));
        navigate("/");
      })
      .catch((err) => alert(err.message))
      .finally(() => reset());
  };

  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="my-auto mb-10 mt-5 flex h-96 w-full flex-col self-center rounded-2xl border border-gray-200 bg-white px-4 pb-10 pt-5 shadow-md sm:w-[600px] sm:px-10 sm:pt-10 "
      >
        <h1 className="text-center text-2xl font-semibold">Masuk</h1>
        <div className="mt-5 flex flex-col gap-y-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            {...register("email")}
          />
          <span className="text-xs text-red-500">{errors.email?.message}</span>
        </div>
        <div className="mt-5 flex flex-col gap-y-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            {...register("password")}
          />
          <span className="text-xs text-red-500">
            {errors.password?.message}
          </span>
        </div>
        <div className="flex w-full">
          <Button
            variant="primary"
            type="submit"
            className="mx-auto mt-4 w-60 self-center"
          >
            Masuk
          </Button>
        </div>
      </form>
    </main>
  );
};

export default Login;
