import { Menu, X } from "lucide-react";
import React, { ComponentProps, useEffect, useState } from "react";
interface NavbarProps extends ComponentProps<"nav"> {
  widthWindow?: any;
}
export default function Navbar({
  widthWindow,
  children,
  className,
  ...props
}: NavbarProps) {
  const [width, setWidth] = useState(0);
  const [flipflop, setFlipflop] = useState(false);

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

  widthWindow(width);
  if (width < 768) {
    return (
      <nav className={`${className} `} {...props}>
        <button onClick={() => setFlipflop(!flipflop)}>
          <Menu size={30} />
        </button>
        {flipflop && (
          <div className="absolute left-0 top-0 z-40 h-screen w-screen bg-black/30">
            <ul className="absolute right-0 z-50 flex w-52 flex-col justify-center bg-violet-800">
              <header className="flex items-center justify-between">
                <h4 className="px-2 text-lg">Menu</h4>
                <button onClick={() => setFlipflop(!flipflop)}>
                  <X size={30} />
                </button>
              </header>
              <div className="flex flex-col items-center bg-violet-950">
                {children}
              </div>
            </ul>
          </div>
        )}
      </nav>
    );
  }
  return (
    <nav className={`${className}`} {...props}>
      {children}
    </nav>
  );
}
