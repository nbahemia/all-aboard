"use client";

import { useState } from "react";

// Example categories (can be fetched dynamically later)
const categories = ["Tech", "Outdoor", "Business", "Arts", "Sports", "Academics"];

function ClubDropDown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<{ [key: string]: boolean }>({});

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleCheckboxChange = (category: string) => {
        setSelectedCategories((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    return (
        <div className="relative pl-4">
            <button
                onClick={toggleDropdown}
                className="text-gray-500 bg-white hover:bg-white/80 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button"
            >
                Filter By Category
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600 mt-2">
                    <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
                        {categories.map((category) => (
                            <li key={category}>
                                <div className="flex items-center">
                                    <input
                                        id={`checkbox-${category}`}
                                        type="checkbox"
                                        checked={selectedCategories[category] || false}
                                        onChange={() => handleCheckboxChange(category)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label htmlFor={`checkbox-${category}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        {category}
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ClubDropDown;
