function ClubCard({ name, description, image, website }: { name: string; description?: string; image?: string; website?: string }) {
    return (
        <div className="flex flex-col bg-white/90 shadow-lg rounded-lg w-3/5 h-auto p-6 mt-6">
            <div className="inline-block mt-2">
                {image && (
                    <img className="rounded-full shadow-full pb-4" src={image} alt="{name}" />
                )}

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {website ? (
                        <a href={website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:underline">
                            {name}
                        </a>
                    ) : (
                        name
                    )}
                </h5>
            </div>

            {
                description && (
                    <div className="mt-2">
                        <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    </div>
                )
            }
        </div >
    );
}


export default ClubCard