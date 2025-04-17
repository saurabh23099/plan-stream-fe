import React, { useState, KeyboardEvent, JSX } from "react";
import { CiSearch } from "react-icons/ci";
import SearchInput from './SearchInput';
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../store/ToggleSlice";
import { RootState } from "../store/Store";

interface NavbarProps {
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    triggerSearch: () => void;

}

function Navbar({ setSearchQuery, triggerSearch }: NavbarProps): JSX.Element {
    const [inputValue, setInputValue] = useState<string>("");
    const dispatch = useDispatch();
    const isIntractive = useSelector((state: RootState) => state.toggle.isIntractive);

    // Triggers search on "Enter" key press
    const searchQueryHandler = (
        event: KeyboardEvent<HTMLInputElement> | "searchButton"
    ): void => {
        const isEnterKey = typeof event !== "string";

        if (isEnterKey || event === "searchButton") {
            setSearchQuery(inputValue);
            triggerSearch();
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50">
            <div className="flex items-center justify-between px-6 py-8 max-w-[1440px] mx-auto">
                <div className="flex items-center space-x-4 min-w-[120px]">
                   
                </div>
                <div className="flex items-center w-full max-w-[600px] mx-6">
                    <div className="flex flex-1 px-4 py-2 border border-gray-100 rounded-l-full">
                        <SearchInput
                            value={inputValue}
                            onChange={setInputValue}
                            onKeyUp={searchQueryHandler}
                            placeholder="Search for videos..."
                        />
                    </div>
                    <Button className="px-4 py-[10px] border border-gray-100 bg-gray-100 rounded-r-full"
                        onClick={() => searchQueryHandler("searchButton")}
                        icon={<CiSearch size={20} />} />
                </div>
                <div className="flex items-center space-x-4">
                    <Button className={`px-4 py-2 rounded border text-sm font-medium transition duration-200 ${isIntractive ? "bg-gray-300 text-black" : "bg-green-500 text-white" 
                        }`}
                        onClick={() => dispatch(toggleMode())}
                        name={isIntractive ? "Static" : "Interactive" } />
                </div>
            </div>
        </div>


    );
}

export default Navbar;
