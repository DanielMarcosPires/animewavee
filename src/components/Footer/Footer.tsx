import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { PiTelegramLogoDuotone } from "react-icons/pi";

export function Footer() {
  return (
    <footer className="bg-gray-900 py-6 text-white">
      <section className="container mx-auto flex flex-col items-center justify-between lg:flex-row">
        <div className="flex-wrap gap-6 space-x-4 lg:flex">
          <div className="flex items-center">
            <BsWhatsapp className="mr-2 text-2xl" />
            <span>+55 (123) 4002-8922</span>
          </div>
          <div className="flex items-center">
            <BsInstagram className="mr-2 text-2xl" />
            <a
              href="https://www.instagram.com/seu_instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ instagram
            </a>
          </div>
          <div className="flex items-center">
            <AiOutlineFacebook className="mr-2 text-2xl" />
            <a
              href="https://www.facebook.com/seu_facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
          <div className="flex items-center">
            <PiTelegramLogoDuotone className="mr-2 text-2xl" />
            <a
              href="https://t.me/seu_telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </div>
        </div>
        <div className="mt-4 lg:mt-0">
          © {new Date().getFullYear()} Anime Wave. Todos os direitos
          reservados.
        </div>
      </section>
    </footer>
  );
}
