import { Menu as Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useState } from "react";
import ListMobile from "./ListMobile";
import ModalLogin from "./modalLogin"
import ModalRegister from "./modalRegister"

const Navbar = () => {
  const [ativo, setAtivo] = useState(false);
  const toggleIcon = () => {
    setAtivo(!ativo);
  };

  const [openModalLogin, setOpenModalLogin] = useState(false)
  const [openModalRegister, setOpenModalRegister] = useState(false)

  return (
    <div id="home">
    <nav className="flex justify-between px-16 p-5 2xl:px-32 fixed w-screen bg-white shadow-md h-[68px]">
      <a className="flex gap-1 items-end">
        <img src={logo} alt="" className="w-8 h-7" />
        <span className="text-base font-bold">Aurum Web</span>
      </a>

      <button onClick={toggleIcon}>
        { ativo ? (
          <X className="w-8 h-7 lg:hidden" />
        ) : (
          <Menu className="w-8 h-7 lg:hidden" />
        )}
      </button>
      <div className="hidden lg:block">
        <section className="flex items-center gap-10">
          <ul className="gap-2 flex text-base md:gap-8">
            <a
              href="#home"
              className="transition-all duration-300 hover:scale-105 hover:font-medium"
            >
              <li>Home</li>
            </a>
            <a
              href="#section-pontos"
              className="transition-all duration-300 hover:scale-105 hover:font-medium"
            >
              <li>Destaques</li>
            </a>
            <div>
              <a
                href="#section-destaques"
                className="transition-all duration-300 hover:scale-105 hover:font-medium"
              >
                <li>Contato</li>
              </a>
            </div>
            <div>
              <a
                href="#section-feedbacks"
                className="transition-all duration-300 hover:scale-105 hover:font-medium"
              >
                <li>Feedback</li>
              </a>
            </div>
            <a
              href="#section-duvidas"
              className="transition-all duration-300 hover:scale-105 hover:font-medium"
            >
              <li>Dúvidas</li>
            </a>
          </ul>
          <div className="flex gap-3">
            <button onClick={()=> setOpenModalLogin(true) } className="rounded-md border-solid bg-black text-white transition border-[1px] border-black bg-gray-300 px-3 py-1 hover:bg-yellow hover:text-white hover:scale-105">
              Login
            </button>
            <button onClick={()=> setOpenModalRegister(true) } className="rounded-md border-solid bg-white text-black transition border-[1px] border-black bg-gray-300 px-3 py-1 hover:bg-yellow hover:text-white hover:scale-105">
              Register
            </button>
            </div>
        </section>
{/* List actived menu */}
      </div>
    </nav>
    <div>
        { ativo ? (
          <ListMobile />
        ) : (
          <div className="hidden">
            <ListMobile/>
          </div>
        )}
      </div>
      <ModalLogin isOpen={openModalLogin}/>
      <ModalRegister isOpen={openModalRegister}/>
      </div>
  );
};

export default Navbar;
