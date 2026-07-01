"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Client, Account } from "appwrite";

type Props = {
  endpoint: string;
  projectId: string;
};

export default function ResetPasswordForm({ endpoint, projectId }: Props) {
  const params = useSearchParams();

  const userId = params.get("userId") || "";
  const secret = params.get("secret") || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const configurationMissing = !endpoint || !projectId;
  const tokenMissing = !userId || !secret;

  // ✅ Proper Appwrite setup
  const client = new Client()
    .setEndpoint(endpoint.replace(/\/$/, ""))
    .setProject(projectId);

  const account = new Account(client);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (configurationMissing) {
      setError("Password reset is not configured. Please contact support.");
      return;
    }

    if (tokenMissing) {
      setError("This recovery link is incomplete. Request a new reset email.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least eight characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      // ✅ ONLY THIS — no fetch
      await account.updateRecovery({ userId, secret, password });

      setIsComplete(true);
      setPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Unable to update your password.");
    } finally {
      setIsLoading(false);
    }
  }

  if (isComplete) {
    return (
      <section className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl shadow-black/5">
        <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-700">
          ✓
        </div>

        <h1 className="text-2xl font-bold text-[#10131f]">Password updated</h1>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Return to Leankly and sign in with your new password.
        </p>

        <a
          href="leankly://"
          className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-full bg-black px-5 font-semibold text-white"
        >
          Open Leankly
        </a>
      </section>
    );
  }

  return (
    <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl shadow-black/5">
      <h1 className="text-3xl font-bold">Reset password</h1>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          className="h-14 w-full rounded-xl border px-4"
        />

        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={isLoading}
          className="h-14 w-full rounded-xl border px-4"
        />

        {error && (
          <p className="rounded-xl bg-red-50 p-3 text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading || tokenMissing || configurationMissing}
          className="h-12 w-full rounded-full bg-black text-white"
        >
          {isLoading ? "Updating..." : "Update password"}
        </button>
      </form>
    </section>
  );
}
