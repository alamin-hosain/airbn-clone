import Image from "next/image";
import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = ({ placeHolder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuest, setNumberOfGuest] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleCancel = () => {
    setSearchInput("");
  };

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuest,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 shadow-md md:px-10 bg-white">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 my-auto cursor-pointer"
      >
        <Image
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="top image"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="pl-4 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          placeholder={placeHolder || "Search Your Hotel"}
        />
        <MagnifyingGlassIcon className="h-8 text-white bg-red-400 p-2 rounded-full cursor-pointer hidden md:inline-flex md:mx-2" />
      </div>
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border rounded-full p-2">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow">Number of Guests</h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={numberOfGuest}
              onChange={(e) => setNumberOfGuest(e.target.value)}
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>

          <div className="flex">
            <button
              className="flex-grow text-gray-500"
              onClickCapture={handleCancel}
            >
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
