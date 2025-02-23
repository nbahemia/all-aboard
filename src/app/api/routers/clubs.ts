import prisma from '../../../server/db'; // Import Prisma client

async function getClubs() {
  const clubs = await prisma.club.findMany(); // Fetch all clubs
  return clubs;
}

getClubs().then((clubs) => console.log(clubs));