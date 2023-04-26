import main from "./assets/modules/Main.module.scss";

import moldagem from "./assets/imgs/supefilm-moldagem.jpeg";
import { Contador } from "../Contador/Contador";

const Main = () => {
  return (
    <main>
      <section>
        <div className={main["resumo"]}>
          <p>SUPERFILM FLORIPA</p>
          <h3>Instalação de películas em Florianópolis.</h3>
          <p>
            <span>+</span>
            <Contador /> ANOS NO MERCADO
          </p>
        </div>

        <div id="servicos" className={main["sobre"]}>
          <div className={main["sobre__texts"]}>
            <h3>Nossos serviços</h3>
            <h4>
              Películas de proteção solar em janelas e vidros para residências
              ou estabelecimentos comerciais.
            </h4>
            <p>
              Se você está a procurando por uma empresa com um ótimo custo
              benefício para fazer serviço de instalação de insulfilm, com uma
              grande variedade de opções de películas para diversas finalidades,
              como redução de calor, proteção de raios UV, privacidade e
              segurança, podemos ser a solução, atuamos na região de
              Florianópolis, e por sermos uma empresa sem endereço fixo,
              conseguimos entregar um serviço com preço justo e com qualidade e
              confiança garantida de quem está a mais de 11 anos no mercado.
              Entre em contato e faça já um orçamento via WhatsApp!
            </p>

            <h4>
              Prestação de serviços terceirados de instalação de películas
              automotivas para concessionárias ou lojas de serviços automotivos.
            </h4>
            <p>
              O melhor negócio para uma empresa, na maioria das vezes é optar
              por um profissional que garante qualidade nos serviços, com
              responsabilidade e confiança, se você está procurando por uma
              terceirização de instalação de insulfilm, basta entrar em contato,
              já atendemos algumas empresas em Florianópolis, como a
              concessionária da Chevrolet (Metronorte), Fiat (Repecon), Peugeot
              (Santa Fé), Toyota (Hai), entre outras na região de Florianopolis.
            </p>

            <h4>
              Instalação de película automotiva para frotas de carros, veículos
              que foram comprados em lote.
            </h4>
            <p>
              Outra opção são as frotas ou lotes de carros que muitas vezes são
              compradas como Venda Direta em uma concessionária, obviamente o
              objetivo dessas compras em lote por alguma empresa de aluguel de
              carros ou outras, são com objetivo de economia no valor final,
              visando esse melhor custo benefício podemos fazer um orçamento
              para o pacote fechado para instalação de película em vários
              carros.
            </p>
          </div>
          <figure>
            <img src={moldagem} alt="aplicando pelicula" />
          </figure>
        </div>
      </section>
    </main>
  );
};

export { Main };
