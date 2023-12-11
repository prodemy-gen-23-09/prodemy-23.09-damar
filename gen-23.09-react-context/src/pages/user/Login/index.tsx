import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "../../../components/Button";
import { loginUser } from "../../../lib/axios/userAxios";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const { email, password } = loginData;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOnSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message) {
      alert(message);
      return;
    }
    const payload = await loginUser(loginData);

    console.log(payload);

    if (payload.length > 0) {
      alert("Login berhasil");
    } else {
      alert("Login gagal");
    }
  };

  useEffect(() => {
    if (!email || !password) {
      setMessage("Email dan Password harus diisi!");
    } else {
      setMessage("");
    }
  }, [email, password]);

  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <form
        onSubmit={handleOnSubmit}
        className="my-auto mb-10 mt-5 flex h-96 w-full flex-col self-center rounded-2xl border border-gray-200 bg-white px-4 pb-10 pt-5 shadow-md sm:w-[600px] sm:px-10 sm:pt-10 "
      >
        <h1 className="text-center text-2xl font-semibold">Masuk</h1>
        <div className="mt-5 flex flex-col gap-y-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            name="email"
            value={email}
            onChange={handleOnChange}
          />
        </div>
        <div className="mt-5 flex flex-col gap-y-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            name="password"
            value={password}
            onChange={handleOnChange}
          />
        </div>
        <p className="mt-2 text-sm text-red-500">{message && message}</p>
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
