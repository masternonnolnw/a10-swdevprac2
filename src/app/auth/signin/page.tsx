"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@mui/material";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password
    });

    if (res?.error) {
      setError(res.error);
    } else {
      router.push("/booking");
    }
  };

  return (
    <div className="flex flex-col w-full bg-white text-black min-h-[calc(100vh-60px)] p-[60px] gap-4 relative">
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" variant="outlined">
              Sign In
            </Button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
