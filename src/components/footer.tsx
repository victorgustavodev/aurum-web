import logo from "../assets/logo.png"

const footer = () => {
  return (
    <div className="bg-dark-gray flex gap-2 lg:gap-14 py-8 px-5 lg:px-52 justify-between items-center">
        <img src={logo} alt="logo" className="w-[50px] h-[40px]"/>
        <p className="text-white text-sm lg:text-base">© 2024 . Todos os direitos reservados.</p>
    </div>
  )
}

export default footer
