import orcamento from "./assets/Orcamento.module.scss";
import { Formik } from "formik";

import instagram from "./assets/instagram.png";
import email from "./assets/email.png";
import whatsapp from "./assets/whatsapp.png";

const Orcamento = () => {
  return (
    <section className={orcamento["section"]} id="orcamentos">
      <div className={orcamento["container"]}>
        <h3>Orçamentos gratuítos para instalação de película</h3>

        <div className={orcamento["container__textos"]}>
          <p>
            Entre em contato conosco e faça um orçamento para colocação de
            película em sua casa ou estabelecimento, para que possamos fazer uma
            avaliação dos custos do serviço, pedimos que envie:
          </p>
          <ul>
            <li>Endereço onde será feito o serviço</li>

            <li>Foto dos vidros/ambiente.</li>

            <li>Quantidade de vidros e suas medidas.</li>

            <li>
              Os vidros ficam em altura de até 2 metros do chão? Para avaliar se
              precisará de escada ou andaimes.
            </li>
            <li>
              Qual o tipo de película que deseja.
              <a href="#peliculas"> Logo abaixo</a> veja as principais
              características e finalidades de cada uma.
            </li>
          </ul>

          <p>
            Se preferir, em casos de serviços mais complexos, com mais vidros,
            podemos ir presencialmente fazer um orçamento, basta entrar em
            contato passando o endereço.
          </p>
          <p>
            Para orçamentos de serviço terceirizado para concessionárias e
            outras lojas, basta entrar em contato.
          </p>
        </div>

        <ul className={orcamento["container__links"]}>
          <a
            href="https://wa.me/5548996802068"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <img src={whatsapp} alt="icone do whatsapp" />
              Chamar no WhatsApp
            </li>
          </a>

          <a
            href="https://www.instagram.com/superfilmfloripa/"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <img src={instagram} alt="icone do instagram" />
              @superfilmfloripa
            </li>
          </a>

          <li>
            <img src={email} alt="icone de email" />
            superfilmfloripa@gmail.com
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Orcamento };
