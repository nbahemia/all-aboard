          
          // components/SignInButton.tsx
'use client'; // This marks the component as a client component

import { signIn } from 'next-auth/react';

export default function SignInButton() {
  const handleSignIn = async () => {
    // Sign in and pass the callbackUrl to redirect to the dashboard
    await signIn('discord', {
      callbackUrl: '/dashboard', // Redirect to dashboard after successful sign-in
    });
  };

  return (
    <button
      onClick={handleSignIn}
      className="rounded-full bg-white/50 hover:bg-white/60 px-10 py-3 font-semibold no-underline transition"
    >
      Sign In with Discord
    </button>
  );
}

          