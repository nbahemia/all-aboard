import db from "@/server/db";
import { Club } from "@prisma/client";

let clubs: Club[] = [];
try {
    clubs = await db.club.findMany({
        orderBy: {
            name: 'asc', 
        }
    });
} catch (error) {
    console.error("Error fetching clubs:", error);
}

function ClubCard() {

    return (
        <div>
            {clubs.length > 0 ? (
                clubs.map((club) => (
                    <div
                        key={club.id}
                        className="flex flex-col bg-white/90 shadow-lg rounded-lg w-3/5 h-auto p-6 mt-6"
                    >
                        <div className="flex items-center">
                            {club.image && (
                                <img
                                    className="rounded-full shadow-lg h-24 w-24 object-cover mr-4"
                                    src={club.image}
                                    alt={club.name}
                                />
                            )}

                            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                                {club.website ? (
                                    <a
                                        href={club.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-500 hover:underline"
                                    >
                                        {club.name}
                                    </a>
                                ) : (
                                    club.name
                                )}
                            </h5>
                        </div>

                        {club.description && (
                            <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
                                {club.description}
                            </p>
                        )}
                    </div>
                ))
            ) : (
                <p className="text-xl text-white">No clubs available.</p>
            )}
        </div>
    );
}
export default ClubCard;
