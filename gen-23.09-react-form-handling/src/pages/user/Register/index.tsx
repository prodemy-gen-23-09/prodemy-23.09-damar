import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../../../components/Button";
import { registerUser } from "../../../lib/axios/user";
import { RegisterUserSchema } from "../../../interfaces/user";


const Register = () => {
  const registerSchema: yup.ObjectSchema<RegisterUserSchema> = yup
    .object()
    .shape({
      name: yup.string().required("nama harus diisi"),
      email: yup.string().email().required("email harus diisi"),
      password: yup.string().min(8).required("password harus diisi"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "password tidak sama")
        .required("konfirmasi password harus diisi"),
        
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleOnSubmit = async (data: RegisterUserSchema) => {
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: "user",
      createdAt: new Date().toISOString(),
    };

    await registerUser(payload)
      .then((res) => console.log(res))
      .finally(() => alert("Berhasil mendaftar"));

    reset();
  };

  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="mb-10 mt-5 flex w-full flex-col self-center rounded-2xl border border-gray-200 bg-white px-4 pb-10 pt-5 shadow-md sm:w-[600px] sm:px-10 sm:pt-10 "
      >
        <h1 className="mb-5 text-center text-2xl font-semibold">Daftar</h1>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            id="name"
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            {...register("name")}
          />
          <p className="text-red-500">{errors.name?.message}</p>
        </div>
        <div className="mt-5 flex flex-col gap-y-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            {...register("email")}
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>
        <div className="mt-5 flex flex-col gap-y-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            {...register("password")}
          />
          <p className="text-red-500">{errors.password?.message}</p>
        </div>
        <div className="mt-5 flex flex-col gap-y-2">
          <label htmlFor="confirmPassword">Konfirmasi Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            {...register("confirmPassword")}
          />
          <p className="text-red-500">{errors.confirmPassword?.message}</p>
        </div>
        <div className="flex w-full">
          <Button
            variant="primary"
            type="submit"
            className="mx-auto mt-4 w-48 self-center"
          >
            Daftar
          </Button>
        </div>
      </form>
    </main>
  );
};

export default Register;
