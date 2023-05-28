import Image from "next/image";
import SearchBar from "./SearchBar";
import Avatar from "../../assets/avatar.png";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Gear, SignOut, UserGear } from "phosphor-react";

export default function Header() {
  return (
    <div className="bg-iceBlue text-white flex items-center justify-around h-16">
      <span className="font-bold font-roboto text-4xl">BookClub</span>
      <SearchBar />
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div className="border-2 border-black rounded-full">
            <Image src={Avatar} alt="profile picture" width={45} height={45} />
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="bg-slate-300 min-w-[200px] p-3 rounded-lg mt-4 relative flex flex-col items-start gap-3">
            <div className="h-5 w-5 bg-slate-300 absolute rotate-45 -top-2 left-1/2 -translate-x-1/2" />
            <DropdownMenu.Item className="flex items-center gap-3 hover:outline-none cursor-pointer">
              <UserGear size={24} /> Meu Perfil
            </DropdownMenu.Item>
            <DropdownMenu.Item className="flex items-center gap-3 hover:outline-none cursor-pointer">
              <Gear size={24} /> Configurações
            </DropdownMenu.Item>
            <DropdownMenu.Item className="flex items-center gap-3 hover:outline-none cursor-pointer">
              <SignOut size={24} /> Sair
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
