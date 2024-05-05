const ListMobile = () => {
  return (
    <div>
          <ul className="gap-6 flex items-center mt-[66px] justify-start pt-12 bg-gray flex-col fixed top-0 right-0 w-screen h-screen text-base md:gap-8">
            <a
              href=""
              className="transition-all duration-300 hover:scale-105 hover:font-medium"
            >
              <li>Home</li>
            </a>
            <a
              href=""
              className="transition-all duration-300 hover:scale-105 hover:font-medium"
            >
              <li>Sobre</li>
            </a>
            <div>
              <a
                href=""
                className="transition-all duration-300 hover:scale-105 hover:font-medium"
              >
                <li>Serviços</li>
              </a>
            </div>
            <a
              href=""
              className="transition-all duration-300 hover:scale-105 hover:font-medium"
            >
              <li>Contato</li>
            </a>
            <button className="rounded-md border-solid bg-black text-white transition border-[1px] border-black bg-gray-300 px-6 py-1 hover:bg-white hover:text-black hover:scale-105">
              Login
            </button>
          </ul>
          
    </div>
  )
}

export default ListMobile
