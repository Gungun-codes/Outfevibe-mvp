"use client";

import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import {onAuthStateChanged} from "firebase/auth";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously,
} from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  /* ================= EMAIL LOGIN ================= */

  const handleEmailLogin = async () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    try {
      setError("");
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  /* ================= GOOGLE LOGIN ================= */

  const handleGoogleLogin = async () => {
    try {
      setError("");
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("login successful!");
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  /* ================= GUEST LOGIN ================= */

  const handleGuestLogin = async () => {
    try {
      setError("");
      await signInAnonymously(auth);
      alert("logged in as guest!");
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-[#111] p-8 rounded-2xl border border-[#1f1f1f]">

        <h1 className="text-3xl font-bold text-center mb-8">
          Login to Outfevibe
        </h1>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-xl bg-black border border-[#2a2a2a] focus:outline-none focus:border-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 rounded-xl bg-black border border-[#2a2a2a] focus:outline-none focus:border-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleEmailLogin}
          className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition mb-6"
        >
          Login with Email
        </button>

        {/* DIVIDER */}
        <div className="my-6 text-center text-gray-500 text-sm">
          OR
        </div>

        {/* GOOGLE */}
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 mb-3 rounded-xl border border-white hover:bg-white hover:text-black transition"
        >
          Continue with Google
        </button>

        {/* GUEST */}
        <button
          onClick={handleGuestLogin}
          className="w-full py-3 rounded-xl text-gray-400 hover:text-white transition"
        >
          Continue as Guest
        </button>

        {/* ERROR */}
        {error && (
          <p className="mt-4 text-red-500 text-sm text-center">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
