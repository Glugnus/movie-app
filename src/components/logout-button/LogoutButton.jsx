"use client";
import { signOut } from "next-auth/react";
export default function LogoutButton() {
  return (
    <button
      className="bg-primary text-white"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Déconnexion
    </button>
  );
}
