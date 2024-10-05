import { useState } from "react";
import { ChevronDown } from "lucide-react";

const SectionFaq = () => {
  const [rotated, setRotated] = useState(Array(5).fill(false));

  const handleRotate = (index: number) => {
    const updatedRotated = [...rotated];
    updatedRotated[index] = !updatedRotated[index];
    setRotated(updatedRotated);
  };

  return (
    <div id="section-duvidas" className="px-8 flex flex-col py-9 justify-center gap-9 pb-12 lg:px-52 min-h-[80vh] bg-gray text-black">
      <h1 className="text-2xl text-center font-semibold lg:text-5xl">
        Perguntas frequentes (FAQs)
      </h1>

      <p className="text-center lg:text-xl">
        Abaixo algumas das dúvidas mais frequentes!
      </p>

      <div className="grid gap-4">
        <details className="border-t-[2px] cursor-pointer">
          <summary
            onClick={() => handleRotate(0)}
            className="summary-no-marker font-semibold pt-4 flex justify-between"
          >
            Quanto tempo para receber meu site?
            <ChevronDown
              style={{
                transform: rotated[0] ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </summary>

          <p className="pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            fuga aut ex cupiditate assumenda nisi obcaecati, optio eaque odit
            maiores debitis quasi velit magni deserunt ipsa consequatur ea sint.
            Alias!
          </p>
        </details>

        <details className="border-t-[2px] cursor-pointer">
          <summary
            onClick={() => handleRotate(1)}
            className="summary-no-marker font-semibold pt-4 flex justify-between"
          >
            Vocês oferecem suporte técnico após o lançamento do site?
            <ChevronDown
              style={{
                transform: rotated[1] ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </summary>
          <p className="pt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            consequatur corporis sapiente? Deserunt veritatis esse ullam
            adipisci maiores nam soluta? Iusto aliquid soluta dolore, dolor
            ducimus adipisci non repellat eum.
          </p>
        </details>

        <details className="border-t-[2px] cursor-pointer">
          <summary
            onClick={() => handleRotate(2)}
            className="summary-no-marker font-semibold pt-4 flex justify-between"
          >
            Como posso atualizar o conteúdo do meu site depois que ele estiver
            pronto?
            <ChevronDown
              style={{
                transform: rotated[2] ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </summary>
          <p className="pt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            consequatur corporis sapiente? Deserunt veritatis esse ullam
            adipisci maiores nam soluta? Iusto aliquid soluta dolore, dolor
            ducimus adipisci non repellat eum.
          </p>
        </details>

        <details className="border-t-[2px] cursor-pointer">
          <summary
            onClick={() => handleRotate(3)}
            className="summary-no-marker font-semibold pt-4 flex justify-between"
          >
            O site será compatível com dispositivos móveis?
            <ChevronDown
              style={{
                transform: rotated[3] ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </summary>
          <p className="pt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            consequatur corporis sapiente? Deserunt veritatis esse ullam
            adipisci maiores nam soluta? Iusto aliquid soluta dolore, dolor
            ducimus adipisci non repellat eum.
          </p>
        </details>

        <details className="border-y-[2px] cursor-pointer">
          <summary
            onClick={() => handleRotate(4)}
            className="summary-no-marker font-semibold py-4 flex justify-between"
          >
            Vocês oferecem serviços de hospedagem?
            <ChevronDown
              style={{
                transform: rotated[4] ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </summary>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            consequatur corporis sapiente? Deserunt veritatis esse ullam
            adipisci maiores nam soluta? Iusto aliquid soluta dolore, dolor
            ducimus adipisci non repellat eum.
          </p>
        </details>
      </div>
    </div>
  );
};

export default SectionFaq;
