import Link from "next/link";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import db from "@/server/db"
import { Club } from "@prisma/client";

let clubs: Club[] = [];
try {
  clubs = await db.club.findMany();
} catch (error) {
  console.error("Error fetching clubs:", error);
}
export const dynamic = "force-dynamic"
const mockClubs = [
  {
    name:"BoilerMake",
    description:"Manage a hackathon",
    tags:["Professional","Development"]

  },
  {
    name:"USB",
    description:"Undergrauate Student Board",
    tags:["Professional","Event Planning"]

  },
  {
    name:"Rock Climbing Club",
    description:"Rock climbing",
    tags:["Athletics/Sports","Recreational"]

  },
  {
    name:"Outing Club",
    description:"Touch grass",
    tags:["Athletics/Sports",]

  },
  {
    name:"Business Club",
    description:"Network with people",
    tags:["Professional","Business"]

  },
]

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
                <Link
                  href="/api/auth/signin" // Redirect to the sign-in page if not logged in
                  className="rounded-full bg-white/50 hover:bg-white/60 px-10 py-3 font-semibold no-underline transition"
                >
                  Sign In
                </Link>
              )}
            
            </div>
          </div>          
        </div>
        <div className="flex flex-col items-center gap-4 mt-8">
          <p className="text-center text-2xl text-white">
            Clubs
          </p>
          {clubs.length > 0 ? (
            clubs.map((club) => (
              <p key={club.id} className="text-xl text-white">
                {club.name}, {club.description}, {club.tags?.join(", ") || "No tags available"}
              </p>
            ))
          ) : (
            <p className="text-xl text-white">No clubs available.</p>
          )}
          </div>
      </main>

    </HydrateClient>
  );
}
