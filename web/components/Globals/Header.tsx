import UsersService from "@/services/UsersService";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { useRouter } from "next/router";
import { SignOut, UserGear } from "phosphor-react";
import Avatar from "../../assets/avatar.png";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    UsersService.logout();
    router.push("/");
  };

  return (
    <div className="bg-iceBlue text-white flex items-center justify-around h-16">
      <span className="font-bold font-roboto text-4xl">BookClub</span>
      {/* <SearchBar /> */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div className="border-2 border-black rounded-full">
            <Image src={Avatar} alt="profile picture" width={45} height={45} />
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="bg-slate-300 min-w-[200px] p-3 rounded-lg mt-4 relative flex flex-col items-start gap-3">
            <div className="h-5 w-5 bg-slate-300 absolute rotate-45 -top-2 left-1/2 -translate-x-1/2" />
            <DropdownMenu.Item
              onClick={() => router.push("/profile")}
              className="flex items-center gap-3 hover:outline-none cursor-pointer"
            >
              <UserGear size={24} /> Meu Perfil
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="flex items-center gap-3 hover:outline-none cursor-pointer"
              onClick={handleLogout}
            >
              <SignOut size={24} /> Sair
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
