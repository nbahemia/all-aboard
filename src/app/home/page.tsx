"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { api } from "@/trpc/server"; // Assuming you're using tRPC for data fetching
import { Club } from "@prisma/client";
export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <p>Loading...</p>
  }
  if (!session) {
    router.push("/api/auth/signin");
    return null;
  }
  return(
    <div>
    <p>No content yet!</p>
  
    <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem] mt-16">
        Welcome, {session?.user.name}!
      </h1>
      </div>

  );
}