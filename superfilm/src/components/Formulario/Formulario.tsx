import formulario from "./assets/Formulario.module.scss";
import { Formik } from "formik";

import instagram from "./assets/instagram.png";
import email from "./assets/email.png";
import whatsapp from "./assets/whatsapp.png";

const Formulario = () => {
  return (
    <div className={formulario["section"]}>
      <h3>Orçamentos gratuítos para instalação de película</h3>

      <div className={formulario["section__textos"]}>
        <p>
          Entre em contato conosco e faça um orçamento para colocação de
          película em sua casa ou estabelecimento, para que possamos fazer uma
          avaliação dos custos do serviço, pedimos que envie:
        </p>
        <ul>
          <li>Endereço onde será feito o serviço</li>
          <li>Quantidade de vidros</li>
          <li>
            Tamanho médio dos vidros (se tiver como medir), senão, posso fazer
            uma avaliação por foto ou ir até o local.
          </li>
          <li>Foto dos vidros/ambiente.</li>
          <li>
            Os vidros ficam em altura de até 2 metros do chão? Para avaliar se
            precisará de escada ou andaimes.
          </li>
          <li>
            Qual o tipo de película que deseja.
            <a href="#peliculas"> Clique aqui</a> e veja as principais
            características e finalidades de cada uma.
          </li>
        </ul>

        <p>
          Se preferir, em casos de serviços maiores, com mais vidros, podemos ir
          presencialmente fazer um orçamento, basta entrar em contato passando o
          endereço.
        </p>
        <p>
          Para orçamentos de serviço terceirizado para concessionárias e outras
          lojas, basta entrar em contato.
        </p>
      </div>

      <ul className={formulario["section__links"]}>
        <a href="https://wa.me/5548996802068" target="_blank" rel="noreferrer">
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
  );
};

export { Formulario };
