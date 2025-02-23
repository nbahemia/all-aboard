import Train from "../assets/train_logo.png";
import DefaultIcon from "../assets/def_icon.jpg";
import SearchBar from "./SearchBar";
import ClubDropDown from "./Club_DropDown";

function Sidebar() {
    return (
        <div className="fixed left-0 top-0 h-full w-60 bg-[#11212D] text-white flex flex-col items-center py-6 space-y-4 shadow-lg">
            <div className="flex flex-col items-center">
                <img src={Train.src} alt="Train Logo" className="h-12 w-12 mb-4" /> {/* Reduced margin */}
            </div>

            <div className="w-full px-4">
                <SearchBar />
            </div>

            <div className="w-full px-4 pt-4"> 
                <ClubDropDown />
            </div>

            <div className="flex-grow"></div>

            <div className="mb-6">
                <img src={DefaultIcon.src} alt="Profile" className="rounded-full shadow-lg h-16 w-16" />
            </div>
        </div>
    );
}

export default Sidebar;
