import orcamento from "./assets/Orcamento.module.scss";
import { Formik } from "formik";

import instagram from "./assets/instagram.png";
import email from "./assets/email.png";
import whatsapp from "./assets/whatsapp.png";

const Orcamento = () => {
  return (
    <section className={orcamento["section"]} id="orcamentos">
      <div className={orcamento["container"]}>
        <h3>Contato:</h3>

        <div className={orcamento["container__textos"]}>
          <p>Entre em contato conosco e faça um orçamento sem compromisso,
            para colocação de
            película em seu veículo, casa ou estabelecimento:
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
              WhatsApp (48) 99680-2068
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

        <div className={orcamento["container__mapa"]}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5000.833117863634!2d-48.49703861585817!3d-27.589715705584805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273f381a2ccf7d%3A0x7d0f5a8ad8d2d1a!2sSuperfilm%20-%20Pel%C3%ADculas%20Residenciais!5e0!3m2!1spt-BR!2sbr!4v1784563957710!5m2!1spt-BR!2sbr"
            title="mapa superfilm"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
};

export { Orcamento };
