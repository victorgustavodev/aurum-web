import img from '../assets/image-apresentation.png'

const sectionMain = () => {
  return (
    <div className='px-8 lg:px-32  pt-24 md:pt-36 flex items-center justify-center'>

        <div className='flex flex-col items-center gap-16 lg:flex-row'>

      <div className=' lg:w-[560px] flex flex-col gap-5'>
        <h1 className='text-2xl lg:text-5xl font-bold'>Desenvolvimento Web Personalizado para o Sucesso do Seu Negócio</h1>
        <p className='text-sm md:text-base lg:text-lg'>Oferecemos desenvolvimento web personalizado para empreendedores e empresas, com foco na abordagem centrada no cliente.</p>
      </div>

        <div>
            <img src={img} alt="" className='w-64 shadow-2xl sm:w-[560px] sm:h-[640px]' />
        </div>

        </div>
    </div>
  )
}

export default sectionMain
