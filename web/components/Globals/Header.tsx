import Image from "next/image";
import SearchBar from "./SearchBar";
import Avatar from "../../assets/avatar.png";

export default function Header() {
  return (
    <div className="bg-iceBlue text-white flex items-center justify-around h-16">
      <span className="font-bold font-roboto text-4xl">BookClub</span>
      <SearchBar />
      <div className="border-2 border-black rounded-full">
        <Image src={Avatar} alt="profile picture" width={45} height={45} />
      </div>
    </div>
  );
}
