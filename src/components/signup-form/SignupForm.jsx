"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignupForm() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/user/profile");
    }
  }, [status, router]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    }).then((response) => {
      if (response.ok) {
        signIn();
      }
    });
  };
  return (
    <div className="flex min-h-full justify-center">
      <form
        className="mt-[20vh] flex flex-col gap-2.5"
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-secondary text-center">Inscription</h1>
        <input
          className="min-w-[400px] rounded-[5px] border border-gray-500 p-2.5"
          type="email"
          name="email"
          placeholder="E-mail"
        />
        <input
          className="min-w-[400px] rounded-[5px] border border-gray-500 p-2.5"
          type="password"
          name="password"
          placeholder="******"
        />
        <input
          className="min-w-[400px] rounded-[5px] border border-gray-500 p-2.5"
          type="submit"
          value="S'inscrire"
        />
      </form>
    </div>
  );
}
