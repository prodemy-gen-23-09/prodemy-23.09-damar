import { Button } from "../../../components/Button";
import { loginUser } from "../../../lib/axios/authAxios";
import { useAppDispatch } from "../../../store/hooks";
import { setAccessToken, setUser } from "../../../store/slices/authSlice";
import * as yup from "yup";
import { LoginUserRequest } from "../../../interfaces/userInterface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";

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
    <main className="flex min-h-screen flex-row bg-contain bg-right bg-no-repeat md:bg-[url('assets/login-bg.jpg')]">
      <div className="flex w-full flex-col gap-y-2 sm:gap-y-5 self-center sm:mx-auto sm:w-[600px] md:ms-10 lg:ms-20 lg:w-5/12 xl:ms-40 xl:w-4/12">
        <Link to="/">
          <h1 className="mt-3 text-center text-3xl font-bold text-primary md:text-start">
            tokoungu
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="flex h-96 w-full flex-col rounded-2xl border-gray-200 bg-white px-4 pb-10 pt-5 shadow-md sm:border sm:px-10 sm:pt-10"
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
            <span className="text-xs text-red-500">
              {errors.email?.message}
            </span>
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
          <div className="text-end">
            <span>
              Belum punya akun?
              <Link to="/register" className="font-semibold text-primary">
                {" "}
                daftar disini
              </Link>
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
      </div>
    </main>
  );
};

export default Login;
