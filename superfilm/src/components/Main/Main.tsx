import main from "./assets/modules/Main.module.scss";

import estacao from "./assets/imgs/estacao.jpg";
import parabrisa from "./assets/imgs/superfilm-parabrisa.jpeg";
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
            <p>Superfilm Películas</p>
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
            <h4>Aplicação de película (insulfilm) para carros.</h4>
            <p>
              Se você procura uma empresa especializada em instalação de película automotiva em Florianópolis, oferecemos películas de alta qualidade para proteção solar, redução de calor, com 99% de bloqueio dos raios UV, e até 94% de rejeição do IR, mais privacidade e conforto para o seu veículo. Trabalhamos com películas profissionais e de alta performance, como as linhas Nano Cerâmica e Nano Carbono, com garantia vitalícia e que garantem uma alta proteção térmica com ótima visibilidade de dentro para fora. Instalação realizada por quem está há mais de 14 anos no mercado.
            </p>

            <h4>
              Películas de proteção solar em janelas e vidros para residências
              ou estabelecimentos comerciais.
            </h4>
            <p>
              Se você está a procurando por uma empresa com um ótimo custo
              benefício para fazer serviço de instalação de insulfilm em
              Floripa, com uma grande variedade de opções de window film de controle
              solar para diversas finalidades, como redução de calor, proteção
              de raios UV, privacidade e segurança, podemos ser a solução,
              atuamos na região de Florianópolis, entregamos serviço com preço justo, qualidade e confiança garantida de quem está há mais de 14 anos
              no mercado. Condições especiais para peliculas na Lagoa da Conceição,
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


          </div>
          <figure className={main["sobre__pelicula"]}>
            <img src={parabrisa} alt="aplicando pelicula" />
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

            <h4>
              Envelopamento
            </h4>
            <p>Trabalhamos com envelopamento para personalização de diversas peças do veículo, como por exemplo: retrovisores, colunas, molduras, entre outras... Entre em contato com sua ideia para montarmos um orçamento.</p>

          </div>

        </div>

        <div className={main["localizacao"]}>

          <div className={main["localizacao__texts"]}>

            <h3>
              Anexo ao Estação Santa Mônica
            </h3>
            <h4>Endereço:</h4>
            <p>Rua Valter Mussi, 61 - Santa Monica, Florianópolis - SC</p>
            <h4>Horário de Atendimento:</h4>

            <p>Segunda á Sexta: 09h ás 18h <br />
              Sábado: 09h ás 12h <small>
                <br />(com horário agendado)</small></p>


            <p>
              Estamos localizados no subsolo do Estação Santa Mônica, se você preferir aguardar enquanto executamos o serviço no seu carro, poderá usufruir de um ambiente com diversas opções de gastronomia, lazer e espaço kids, ou até mesmo trabalhar remotamente, pois o ambiente oferece wi-fi.
            </p>
            <p>
              O estacionamento fica gratuíto para nossos clientes.
            </p>

          </div>
          <figure className={main["localizacao__local"]}>
            <img src={estacao} alt="estação santa mônica" />
          </figure>
        </div>
      </section>

      <Orcamento />

      <section id="peliculas" className={main["duvidas"]}>
        <div className={main["duvidas__container"]}>
          <h3>Quais os tipos recomendados de películas para colocar?</h3>
          <p>
            Vai depender do objetivo, abaixo está algumas películas com suas principais características
            e finalidades:
          </p>

          <div className={main["duvidas__container__opcoes"]}>
            <div className={main["duvidas__container__opcoes__cima"]}>
              <div>
                <h5>Película Profissional</h5>

                <p>
                  Essa é a película convencional fumê mais utilizada no mercado tanto
                  para instalação automotiva quanto para arquitetura, pois ela
                  garante um bom
                  desempenho para redução do calor, com bloqueio de 99% dos raios UV prejudiciais á pele e rejeição de até 32% do IR, principal gerador de calor. Além de garantir segurança e privacidade.
                </p>
                <p>
                  Disponível em todas as transparências.
                </p>
              </div>
              <div>
                <h5>Película Nano Cerâmica</h5>
                <p>A película nano cerâmica é uma linha premium para carros e arquitetura,
                  desenvolvida para oferecer alta performance térmica em todas as transparências.
                  Sua tecnologia avançada proporciona
                  bloqueio de até 99% dos raios UV e até 92% do IR, principal gerador de calor. Nossa linha cerâmica oferece garantia vitalícia.
                </p>
                <p>
                  É recomendada para clientes que buscam máxima proteção contra calor, ótima visibilidade e preservação de móveis e produtos contra desbotamento, além de maior eficiência do ar-condicionado e conforto no dia a dia. Disponível em todas as transparências.
                </p>
              </div>
              <div>
                <h5>Película Nano Carbono</h5>
                <p>Películas de nanocarbono que proporcionam excelente conforto térmico, sua tecnologia com nano particulas de carbono na composição evita desbotamento e alteração de cor,
                  bloqueio de até 99% dos raios UV e até 66% do IR, principal gerador de calor. Além de oferecer ótima visibilidade tanto de dia quanto a noite, nossa linha carbon oferece garantia vitalícia.
                </p>
                <p>Disponível nas transparências 5%, 20% e 35%.</p>
              </div>
            </div>

            <div className={main["duvidas__container__opcoes__baixo"]}>
              <div>
                <h5>Película Refletiva e Semi Refletiva</h5>
                <p>
                  A refletiva, conhecida como película espelhada, apresenta uma
                  aparência de espelho, oferece uma alta performance na redução de calor,
                  com rejeição de até 92% do IR, além de 99% de bloqueio
                  contra raios UV. Contém diversas cores disponíveis, embora o
                  prata seja o mais utilizada, há cores como azul, verde,
                  vermelho, amarelo, entre outros. Transparências
                  disponíveis são 5% e 15%.
                </p>
                <p>A semi refletiva, conhecida como película metalizada, apresenta uma
                  aparência espelhada parcial, dando um pouco de brilho ao
                  vidro, sem deixar totalmente espelhado, tabmém contém alta proteção solar.</p>
                <p>

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
                  Disponíveis em diversas porcentagens.
                  Consultar disponibilidade.
                </p>
              </div>
              <div>
                <h5>Películas Decorativas</h5>
                <p>
                  As películas decorativas apresentam diversos formatos e
                  estilos, porém a finalidade principal delas é estetica ou de
                  privacidade, temos como exemplo a película jateada (branca),
                  que oferece privacidade sem reduzir a luz do ambiente. Além de opções de adesivo vinil de diversas cores que podem ser aplicados em vidros.
                  Consultar disponibilidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >
  );
};

export { Main };
