import Train from "../assets/train_logo.png";
import DefaultIcon from "../assets/def_icon.jpg"
import SearchBar from "./SearchBar";
//            <img src={Train} alt="Train logo" className="justify-start h-15 w-15 ml-4" />

function TopBar() {
    return (
        <div className="flex items-center justify-between text-md font-medium bg-[#11212D] pt-3 h-15 pb-2 mb-4">
            <div className="justify-start pl-4 h-16 w-16 rounded-full flex items-center">
                <img src={DefaultIcon.src} className="rounded-full shadow-lg h-10 w-10 mr-4" />

            </div>

            <div className="flex flex-wrap -mb-px justify-center items-center">
                <SearchBar/>
            </div>

            <div className="justify-end items-center">
                <img src={Train.src} className="h-10 w-10 mr-4" />
            </div>

        </div>
    );
}

export default TopBar;
