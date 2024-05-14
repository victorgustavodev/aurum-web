import img from '../assets/image-conquiste-o-digital.png'

const sectionConquiste = () => {
  return (
    <div id='section-destaques' className="flex flex-col gap-20 px-8 xl:flex-row lg:px-52 md:px-32 justify-center items-center">
        <section>
            <div className='flex flex-col gap-7'>
                <h1 className='font-semibold text-2xl text-center lg:text-left lg:text-5xl'>Conquiste o digital</h1>
                <p className='text-base w-auto lg:w-[580px]'>Destaque-se no mundo digital com nossos sites personalizados, projetados para impulsionar sua presença online e conquistar o sucesso do seu negócio.</p>
                <ul className='list-disc pl-5'>
                    <li>Design Personalizado</li>
                    <li>Funcionalidade Avançada</li>
                    <li>Visibilidade Online</li>
                    <li>Suporte Especializado</li>
                </ul>
                <button className='border-[1px] w-[190px] h-[50px] uppercase transition duration-150 hover:scale-105 hover:border-0 hover:bg-black hover:text-white'>Entrar em contato</button>
            </div>
        </section>

        <div className='flex justify-center'>
        <img src={img} alt="" className='flex justify-center w-[240px] h-[270px] md:w-[320px] md:h-[400px] lg:w-[560px] lg:h-[640px]'/>
        </div>
      
    </div>
  )
}

export default sectionConquiste
