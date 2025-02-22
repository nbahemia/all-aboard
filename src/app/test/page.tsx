import Link from "next/link";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

import TopBar from "@/app/_components/TopBar";
//import ClubCard from "@/app/_components/ClubCard";

function Dashboard() {

  return (
    <div className='h-screen bg-[#3D3D3D]'>

        <TopBar/>
    </div>
  )
}

export default Dashboard
