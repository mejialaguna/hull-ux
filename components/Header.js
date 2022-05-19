import Image from "next/image";
import HeaderItems from "./HeaderItems";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div className="flex flex-col md:flex-row m5 justify-between items-center h-auto">
      <div className="flex flex-grow max-w-2xl mt-4">
        <HeaderItems title="HOME" Img={HomeIcon} />
        <HeaderItems title="TRENDING" Img={BadgeCheckIcon} />
        <HeaderItems title="VERIFIED" Img={CollectionIcon} />
        <HeaderItems title="COLLECTIONS" Img={LightningBoltIcon} />
        <HeaderItems title="SEARCH" Img={SearchIcon} />
        <HeaderItems title="ACCOUNT" Img={UserIcon} />
      </div>
      {/*  passing a direct img or icon component to HeaderItems */}

      <Image
        src="https://links.papareact.com/ua6"
        alt="Hull-ux logo"
        className="object-contain opacity-50 hover:opacity-100 hover:scale-125 duration-500 cursor-pointer"
        width={150}
        height={100}
      />
    </div>
  );
}

export default Header;
