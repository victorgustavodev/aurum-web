import {User, Lock, X} from 'lucide-react'

export default function modal({isOpen}) {
    if(isOpen){
  return (
    <div className="bg-black bg-opacity-70 fixed  flex items-center justify-center w-screen h-screen z-10">
        
        <div className="flex flex-col gap-8 bg-white pt-10 pb-6 px-10 rounded-lg min-w-[420px]">
        <div className='flex justify-end text-dark-gray'><a href=''><X/></a></div>
        <h1 className="text-center uppercase text-2xl">Registre-se</h1>
        <label className='flex gap-3 border-b-[1px] border-dark-gray pb-2' htmlFor=""><User /><input className='focus:outline-none w-full text-sm' type="text" placeholder='Usuário' /> </label>      
        <label className='flex gap-3 border-b-[1px] border-dark-gray pb-2' htmlFor=""><User /><input className='focus:outline-none w-full text-sm' type="email" placeholder='Email' /> </label>      
        <label className='flex gap-3 border-b-[1px] border-dark-gray pb-2'><Lock /><input className='focus:outline-none w-full text-sm' type="password" placeholder='Senha' /></label>
        <label className='flex gap-3 border-b-[1px] border-dark-gray pb-2'><Lock /><input className='focus:outline-none w-full text-sm' type="password" placeholder='Confirmar Senha' /></label>
            
            <button className='text-center flex bg-yellow rounded-md text-white h-10 items-center justify-center text-sm'>Registrar</button>
            <p className='text-center border-t-[1px] border-dark-gray pt-2 text-sm'>Já possui uma conta? <button className='text-black font-semibold'> Realizar login</button></p>
        </div>
    </div>
  )
}
    return null
}
