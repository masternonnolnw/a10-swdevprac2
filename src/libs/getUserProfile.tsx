import { useSession } from "next-auth/react";

export default async function getUserProfile(token: string) {
  const response = await fetch(
    "https://vaccine-app-backend-six.vercel.app/api/v1/auth/me",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  const data = await response.json();

  return data;
}
