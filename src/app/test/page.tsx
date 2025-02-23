import Link from "next/link";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

import Sidebar from "@/app/_components/Sidebar";
import ClubCard from "../_components/ClubCard";

const mockClubs = [
  {
    name: "BoilerMake",
    description: "Manage a hackathon",
    image: null,
    website: "https://boilermake.org",
  },
  {
    name: "USB",
    description: "Undergraduate Student Board",
    image: null,
    website: "https://usb.purdue.edu",
  },
  {
    name: "Rock Climbing Club",
    description: "Rock climbing",
    image: null,
    website: "https://rockclimbingclub.purdue.edu",
  },
  {
    name: "Outing Club",
    description: "Touch grass",
    image: null,
    website: null,
  },
  {
    name: "Business Club",
    description: "Network with people",
    image: null,
    website: "https://businessclub.purdue.edu",
  },
  {
    name: "DB Club",
    description: "Database club",
    image: null,
    website: null,
  },
  {
    name: "Coding Society",
    description: "A community for coding enthusiasts",
    image: null,
    website: null,
  },
  {
    name: "Art Collective",
    description: "A group for artists to collaborate and showcase their work",
    image: null,
    website: null,
  },
  {
    name: "Photography Club",
    description: "Capture moments and improve your photography skills",
    image: null,
    website: null,
  },
  {
    name: "Environmental Advocates",
    description: "Promoting sustainability and environmental awareness",
    image: null,
    website: null,
  },
];

function Dashboard() {
  return (
    <div className="flex h-screen bg-[#d9dee3]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 ml-60 overflow-y-auto">
        <div className="flex flex-wrap justify-start pl-24 r gap-6">
          {mockClubs.map((club, index) => (
            <ClubCard
              key={index}
              name={club.name}
              description={club.description}
              image={club.image}
              website={club.website}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
