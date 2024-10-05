import img from "../assets/image-apresentation.png";

const sectionMain = () => {
  return (
    <div className="px-8 lg:px-32 pt-24 md:pt-36 flex items-center justify-center bg-dark-Blue text-white">
      <div className="flex flex-col items-center gap-16 lg:flex-row">
        <div className=" lg:w-[560px] flex flex-col gap-5">
          <h1 className="text-2xl lg:text-5xl font-bold">
            Desenvolvimento de sites e criação personalizada de bots para
            DISCORD
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
            Oferecemos desde o desenvolvimento de sites personalizados até a
            criação de bots para Discord.
          </p>
        </div>

        <div className="shadow-2xl rounded-xl">
          <img src={img} alt="" className="w-64 sm:w-[560px] sm:h-[640px]" />
        </div>
      </div>
    </div>
  );
};

export default sectionMain;
