import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import "./styles.css";
import { Header } from ".";
import Link from "next/link";
import { Crown, Search, User } from "lucide-react";
// eslint-disable-next-line prettier/prettier
interface HeaderProps {
  Animes: Dispatch<SetStateAction<object>>;
}
export default function HeaderComplete({ Animes }: HeaderProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const ref = useRef(0);
  console.log(ref.current);
  return (
    <>
      <Header.Box className="flex bg-violet-800 p-4">
        <div className="flex w-full items-center justify-between  gap-4  md:justify-normal">
          <Header.Logo className="select-none text-2xl font-bold">
            Anime Wave
          </Header.Logo>
          <Header.Navbar
            widthWindow={(e: any) => (ref.current = e)}
            className="flex gap-4"
          >
            <Link className="w-full py-2 text-center md:border-none" href={"#"}>
              Navegar
            </Link>
            <Link className="w-full py-2 text-center md:border-none" href={"#"}>
              Mangás
            </Link>
            <Link className="w-full py-2 text-center md:border-none" href={"#"}>
              Notícias
            </Link>
          </Header.Navbar>
        </div>
        {width > 768 ? (
          <div className="flex w-full items-center justify-end px-5">
            <nav className="flex items-center gap-4">
              <Search />
              <Crown className="rounded-full " stroke="yellow" fill="yellow" />
              <div className="rounded-full border-2 p-1 hover:border-black hover:bg-white/25">
                <User className=" hover:stroke-black" />
              </div>
            </nav>
          </div>
        ) : (
          ""
        )}
      </Header.Box>
    </>
  );
}
