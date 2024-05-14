import star from '../assets/star.png'
import avatar from '../assets/avatar.png'

const feedbacks = () => {
  return (
    <div id='section-feedbacks' className='flex flex-col gap-24 px-8 text-center lg:px-32'>
        <section className='grid gap-3'>
            <h1 className='font-semibold text-2xl lg:text-5xl'>Feedbacks</h1>
            <p>Feedbacks dos nossos clientes.</p>
        </section>
        <section className='flex flex-col gap-14 lg:flex-row'>
            <div className='flex flex-col items-center gap-5'>
                <img src={star} alt="" className='w-28'/>
                <p className='md:w-3/5'>“Fiquei encantado com o novo site! A equipe capturou perfeitamente a vibe da minha marca.”</p>
                <img src={avatar} alt="" className='w-14'/>
                <div className='flex flex-col'>
                    <span>Nome, Sobrenome</span>
                    <span>Profissão, Empresa</span>
                </div>
            </div>
            <div className='flex flex-col items-center gap-5'>
                <img src={star} alt="" className='w-28'/>
                <p className='md:w-3/5'>“Fiquei encantado com o novo site! A equipe capturou perfeitamente a vibe da minha marca.”</p>
                <img src={avatar} alt="" className='w-14'/>
                <div className='flex flex-col'>
                    <span>Nome, Sobrenome</span>
                    <span>Profissão, Empresa</span>
                </div>
            </div>
            <div className='flex flex-col items-center gap-5'>
                <img src={star} alt="" className='w-28'/>
                <p className='md:w-3/5'>“Fiquei encantado com o novo site! A equipe capturou perfeitamente a vibe da minha marca.”</p>
                <img src={avatar} alt="" className='w-14'/>
                <div className='flex flex-col'>
                    <span>Nome, Sobrenome</span>
                    <span>Profissão, Empresa</span>
                </div>
            </div>
            </section>
    </div>
  )
}

export default feedbacks
