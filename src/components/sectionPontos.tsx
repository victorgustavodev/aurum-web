import iconBox from '../assets/iconBox.png'

const sectionPontos = () => {
  return (
    <div id='section-pontos' className='py-24 px-8 flex flex-col gap-9 pb-10 md:gap-20 md:p-40 bg-gray text-black'>
      <h1 className='text-2xl font-semibold text-center lg:text-5xl' >Pontos de destaques</h1>
      <section className='flex flex-col gap-8 lg:flex-row'>
            <div className='flex flex-col gap-7 items-center text-center '>
            <img src={iconBox} alt="" className='w-7 md:w-8'/>
                <h1 className='font-semibold text-lg md:text-xl'>Experiência do Usuário Aprimorada</h1>
                <p className='text-base'>Nossos sites combinam design impressionante com funcionalidade excepcional, proporcionando uma experiência de usuário envolvente e eficiente.</p>
            </div>
            <div className='flex flex-col gap-7 items-center text-center'>
                <img src={iconBox} alt="" className='w-7 md:w-8'/>
                <h1 className='font-semibold text-lg md:text-xl'>Personalização Profunda</h1>
                <p className='text-base'>Criamos sites exclusivos para cada cliente, garantindo que atendam precisamente às suas necessidades e objetivos.</p>
            </div>
            <div className='flex flex-col gap-7 items-center text-center'>
            <img src={iconBox} alt="" className='w-7 md:w-8'/>
                <h1 className='font-semibold text-lg md:text-xl'>Suporte Contínuo e Atendimento Personalizado</h1>
                <p className='text-base'>Oferecemos suporte completo desde o desenvolvimento até além, garantindo que nossos clientes recebam assistência personalizada sempre que precisarem.</p>
            </div>

      </section>
    </div>
  )
}

export default sectionPontos
