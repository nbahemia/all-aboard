import Link from "next/link";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

import TopBar from "@/app/_components/TopBar";
import ClubCard from "../_components/ClubCard";
//import ClubCard from "@/app/_components/ClubCard";


const mockClubs = [
  {
    name: "BoilerMake",
    description: "Manage a hackathon",
    image: null, // Example image URL
    website: "https://boilermake.org", // Example website URL
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
    website: null
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
    <div className='h-auto w-full bg-white/10'>
      <div className="w-full h-auto sticky top-0">
        <TopBar />
      </div>
      <div className="flex flex-col items-center justify-center pb-4 ">
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
  )
}

export default Dashboard
