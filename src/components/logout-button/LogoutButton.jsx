"use client";
import { signOut } from "next-auth/react";
export default function LogoutButton() {
  <div>
    <button onClick={() => signOut({ callbackUrl: "/" })}>Déconnexion</button>
  </div>;
}
