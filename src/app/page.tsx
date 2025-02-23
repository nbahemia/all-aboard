
import Link from "next/link";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import db from "@/server/db"
import { Club } from "@prisma/client";
import SignInButton from "@/app/_components/signInButton"

let clubs: Club[] = [];
try {
  clubs = await db.club.findMany();
} catch (error) {
  console.error("Error fetching clubs:", error);
}
export const dynamic = "force-dynamic"

export default async function Home() {
  
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (

    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#87CEFA] to-[#4682B4] text-white">
        <h1 className="text-5xl textshadow font-extrabold tracking-tight sm:text-[5rem] mt-16" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
          <span>All-Aboard</span>
        </h1>
        <div className="container flex flex-col items-center justify-center gap-12 pt-4 pb-16">
          <div className="flex flex-col items-center gap-2">
            {session && (
              <p className="text-center text-2xl text-white">
                Logged in as {session.user?.name}
              </p>
            )}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-16">
            
              {session ? (
                <Link
                  href="/dashboard" 
                  className="rounded-full bg-white/50 hover:bg-white/60 px-10 py-3 font-semibold no-underline transition"
                >
                  Go to Home
                </Link>
              ) : (
                <SignInButton />
              )}
            
            </div>
          </div>          
        </div>
        
      </main>

    </HydrateClient>
  );
}
