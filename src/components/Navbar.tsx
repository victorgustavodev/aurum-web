import iconMenu from '../assets/icon-menu.png';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    // <div className='flex w-screen items-center p-4 justify-around md:justify-between md:px-56'>

    <nav className='flex justify-between px-9 pt-5 md:px-16 2xl:px-32'>
      <div className='flex gap-1 items-end'>
        <img src={logo} alt="" className='w-8 h-7' />
        <span className='text-base font-bold'>Aurum Web</span>
      </div>
      <button><img src={iconMenu} alt="" className='w-8 h-7 sm:hidden' /></button>

    <div className='hidden sm:block'>
      <section className='flex items-center gap-5'>
        <ul className='gap-2 flex text-base md:gap-8'>
          <a href=""><li >Home</li></a>
          <a href=""><li>Sobre</li></a>
          <div>
          <a href=""><li>Serviços</li></a>
          
          </div>
          <a href=""><li>Contato</li></a>
        </ul>
    <div className='flex gap-4'>
        <button className='border-solid border-2 border-black bg-gray-300 px-3 py-1'>Login</button>
        <button className='border-solid border-2 border-black bg-black text-white px-3 py-1'>Registrar</button>
    </div>
    </section>
    </div>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
