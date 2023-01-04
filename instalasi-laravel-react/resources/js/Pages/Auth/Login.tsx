import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

interface Props {
  status: string;
  canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: Props) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: "",
  });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(
      event.target.name as "email" | "password" | "remember",
      event.target.type === "checkbox"
        ? event.target.checked + ""
        : event.target.value
    );
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    post(route("login"));
  };

  return (
    <GuestLayout>
      <Head title="Log in" />

      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
      )}

      <form onSubmit={submit}>
        <div>
          <InputLabel forInput="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            isFocused={true}
            handleChange={onHandleChange}
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel forInput="password" value="Password" />

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="current-password"
            handleChange={onHandleChange}
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="flex mt-4 justify-between">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              value={data.remember}
              handleChange={onHandleChange}
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <p className="text-sm">
            Don't have an account yet?
            <Link
              href={route("register")}
              className="ml-2  text-sm text-gray-700 dark:text-gray-500 underline"
            >
              Register
            </Link>
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center justify-end mt-4">
          <PrimaryButton processing={processing}>Log in</PrimaryButton>
          {canResetPassword && (
            <Link
              href={route("password.request")}
              className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Forgot your password?
            </Link>
          )}
        </div>
      </form>
    </GuestLayout>
  );
}
