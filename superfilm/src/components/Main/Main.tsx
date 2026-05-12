import main from "./assets/modules/Main.module.scss";

import moldagem from "./assets/imgs/supefilm-moldagem.jpeg";
import ppf from "./assets/imgs/ppf_multimidia_macaneta.png"
import instagram from "./assets/imgs/instagram.png";
import { Contador } from "../Contador/Contador";
import { Orcamento } from "../Orcamento/Orcamento";

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
          <div className={main["resumo__contadores"]}>
            <div className={main["resumo__contadores__contador"]}>
              <div>
                <span>+</span>
                <Contador end={14} />
              </div>
              <div>ANOS NO MERCADO</div>
            </div>
            <div className={main["resumo__contadores__contador"]}>
              <div>
                <span>+</span>
                <Contador end={8000} />
              </div>
              <div>CARROS PROTEGIDOS</div>
            </div>
            <div className={main["resumo__contadores__contador"]}>
              <div>
                <span>+</span>
                <Contador end={100} />
              </div>
              <div>PRÉDIOS PROTEGIDOS</div>
            </div>

          </div>
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
              benefício para fazer serviço de instalação de insulfilm em
              Floripa, com uma grande variedade de opções de filme de controle
              solar para diversas finalidades, como redução de calor, proteção
              de raios UV, privacidade e segurança, podemos ser a solução,
              atuamos na região de Florianópolis, e por sermos uma empresa sem
              endereço físico, conseguimos entregar um serviço com preço justo e
              com qualidade e confiança garantida de quem está a mais de 14 anos
              no mercado. Preços especiais para peliculas na Lagoa da Conceição,
              Barra da Lagoa, Itacorubi, Rio Tavares, Campeche, Santa Mônica e
              toda região leste da Ilha de Florianópolis.
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

            <h4>Instalação de película automotiva para frota de carros.</h4>
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
          <figure className={main["sobre__pelicula"]}>
            <img src={moldagem} alt="aplicando pelicula" />
          </figure>
        </div>

        <div className={main["sobre"]}>
          <figure className={main["sobre__ppf"]}>
            <img src={ppf} alt="ppf maçaneta e multimidia" />
          </figure>
          <div className={main["sobre__texts"]}>

            <h4>
              PPF (Paint Protection Film)
            </h4>
            <p>
              Película de proteção transparente desenvolvida para preservar a pintura e superfícies do veículo contra riscos, arranhões, marcas de uso e pequenos impactos do dia a dia.
            </p>
            <p>Aplicamos PPF em áreas mais vulneráveis e de alto contato, aumentando a durabilidade e mantendo o aspecto original do carro por muito mais tempo.

            </p>
            <p>Também realizamos aplicação em multimídias e acabamentos internos, conchas de maçaneta, quinas de porta,
              para-choques e faróis, protegendo contra riscos, desgaste e marcas causadas pelo uso constante.</p>



          </div>

        </div>
      </section>

      <Orcamento />

      <section id="peliculas" className={main["duvidas"]}>
        <div className={main["duvidas__container"]}>
          <h3>Quais os tipos recomendados de películas para colocar?</h3>
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
                  garante um bom
                  desempenho para redução do calor, com bloqueio de 99% dos raios UV e em média 32% do IR. Além de garantir segurança e privacidade.
                </p>
                <p>
                  As transparências disponíveis para esse tipo de película são
                  variadas, começando pela mais escura até mais clara, 5%, 20%,
                  35%, 50% e 70%.
                </p>
              </div>
              <div>
                <h5>Película Nano Cerâmica</h5>
                <p>A película nano cerâmica é uma linha premium para carros e arquitetura,
                  desenvolvida para oferecer alta performance térmica em todas as transparências, até na transparente.
                  Sua tecnologia avançada proporciona excelente rejeição de calor,
                  bloqueio de até 99% dos raios UV e até 92% do IR, principal gerador de calor.
                </p>
                <p>
                  Garante
                  maior conforto térmico no ambiente, é recomendada para clientes que buscam máxima proteção contra calor, preservação de móveis e produtos contra desbotamento, além de maior eficiência do ar-condicionado e conforto no dia a dia.
                </p>
              </div>
              <div>
                <h5>Película Semi Refletiva</h5>
                <p>
                  Também conhecida como película metalizada, apresenta uma
                  aparência espelhada parcial, dando um pouco de brilho ao
                  vidro, essa é uma película com uma proteção térmica maior
                  que a linha profissional fumê.
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
