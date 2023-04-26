import main from "./assets/modules/Main.module.scss";

import moldagem from "./assets/imgs/supefilm-moldagem.jpeg";
import instagram from "./assets/imgs/instagram.png";
import { Contador } from "../Contador/Contador";
import { Formulario } from "../Formulario/Formulario";

const Main = () => {
  return (
    <main>
      <section>
        <div className={main["resumo"]}>
          <div className={main["resumo__superfilm"]}>
            <p>SUPERFILM FLORIPA</p>
            <a
              href="https://www.instagram.com/superfilmfloripa/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="icone do instagram" />
            </a>
          </div>
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

      <section id="orcamentos">
        <Formulario />
      </section>

      <section className={main["duvidas"]}>
        <div className={main["duvidas__container"]}>
          <h3>Dúvidas Frequentes</h3>
          <h4 id="peliculas">
            Quais os tipos recomendados de películas para colocar?
          </h4>
          <p>
            Isso vai depender do propósito que está buscando, por isso vou
            listar algumas películas abaixo com suas principais características
            e finalidades:
          </p>

          <div className={main["duvidas__container__opcoes"]}>
            <div className={main["duvidas__container__opcoes__cima"]}>
              <div>
                <h5>Película Profissional Fumê</h5>

                <p>
                  Essa é a película convencional mais utilizada no mercado tanto
                  para instalação automotiva quanto para arquitetura, pois ela
                  garante uma boa duração de no mínimo 3 anos, e um bom
                  desempenho para redução do calor, de em média 20%, além de
                  proteger 99% dos raios UV.
                </p>
                <p>
                  As transparências disponíveis para esse tipo de película são
                  variadas, começando pela mais escura até mais clara, 5%, 20%,
                  35%, 50%, 70% e 75%. A mais utilizada para automoveis é a 20%
                  e a 35%, porém para soluções em arquitetura, indicamos a mais
                  escura, pois muitas vezes o cliente está querendo optar por
                  privacidade e segurança.
                </p>
              </div>
              <div>
                <h5>Película Tintada Fumê</h5>
                <p>
                  É uma película de linha convencional também para carros e
                  arquitetura, porém é uma linha econômica, no qual o material
                  não tem a mesma performance de uma película profissional, uma
                  duração de 2 anos até começar a desbotar, a redução de calor é
                  baixa, porém a proteção de raios UV também é de 99%.
                </p>
                <p>
                  Também disponível em todas transparências, como a
                  profissional. Essa película é recomendada para casos em que o
                  cliente quer economizar, ou para casos de apenas privacidade,
                  onde a proteção do calor não é o principal propósito.
                </p>
              </div>
              <div>
                <h5>Película Semi Refletiva</h5>
                <p>
                  Também conhecida como película metalizada, apresenta uma
                  aparência espelhada parcial, dando um pouco de brilho ao
                  vidro, essa é uma película com uma duração e proteção maior
                  que a profissional convencional.
                </p>
                <p>Disponível nas transparências 5%, 20% e 35%.</p>
              </div>
            </div>

            <div className={main["duvidas__container__opcoes__baixo"]}>
              <div>
                <h5>Película Refletiva</h5>
                <p>
                  Também conhecida como película espelhada, apresenta uma
                  aparencia de espelho, contém uma duração de no mínimo 5 anos,
                  além de uma alta performance no fator redução de calor,
                  reduzindo em média 50% do calor, além de 99% de proteção
                  contra raios UV.
                </p>
                <p>
                  Essa película contém diversas cores disponíveis, embora o
                  prata seja o mais utilizada, há cores como azul, verde,
                  vermelho, amarelo, entre outros. Porém as transparências
                  disponíveis são apenas 5% e 15%.
                </p>
              </div>
              <div>
                <h5>Película de Segurança</h5>
                <p>
                  Também conhecida como película antivandalismo, as películas de
                  segurança são produzidas com poliéster grosso, transparente e
                  de alta resistência a impactos, que quando instaladas nos
                  vidros, proporcionam uma resistência adicional ao vidro,
                  previnindo o espalhamento de cacos de vidros durante impactos
                  nos vidros, retendo o vidro estilhaçado dentro da moldura e
                  reduzindo ao mínimo o risco de gastos e danos a pessoas e
                  propriedades causados pelos fragmentos.
                </p>
                <p>
                  Disponíveis em diversas porcentagem e níveis de resistência.
                  Consultar disponibilidade.
                </p>
              </div>
              <div>
                <h5>Películas Decorativas</h5>
                <p>
                  As películas decorativas apresentam diversos formatos e
                  estilos, porém a finalidade principal delas é estetica ou de
                  privacidade, temos como exemplo a película jateada (branca),
                  que oferece privacidade sem reduzir a luz do ambiente.
                  Consultar disponibilidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export { Main };
