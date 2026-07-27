import header from "./assets/modules/Header.module.scss";
import superfilm from "./assets/imgs/superfilm-logo.png";
import cartao from "./assets/imgs/cartao.webp"
import local from "./assets/imgs/local.png"

const Header = () => {
  return (
    <header className={header["header"]}>
      <nav>
        <figure>
          <a href="https://superfilmfloripa.com.br">
            <img src={superfilm} alt="logo superfilm" />
          </a>
        </figure>

        <ul>
          <a href="#servicos">
            <li>Nossos serviços</li>
          </a>

          <a href="#peliculas">
            <li>Películas</li>
          </a>

          <a href="#orcamentos">
            <li>Orçamentos</li>
          </a>
        </ul>
      </nav>
      <div className={header["header__texts"]}>
        {/*<div className={header["header__texts__fechado"]}>
          TEMPORARIAMENTE FECHADO
        </div>*/}
        <h1>PELÍCULAS AUTOMOTIVAS E PREDIAIS</h1>
        {/*<h2 className={header["header__texts__segundo"]}>películas automotivas e prediais</h2>*/}
        <h2 className={header["header__texts__terceiro"]}>
          PPF e Envelopamento
        </h2>

        <a href="https://wa.me/5548996802068" target="_blank" rel="noreferrer">
          Solicitar Orçamento
        </a>

        <div className={header["header__texts__cartaolocal"]}>

          <div className={header["header__texts__cartaolocal__cartao"]}>
            <figure>

              <img src={cartao} alt="icone cartão" />

            </figure>Parcelamos em até <strong>6X</strong> SEM JUROS
          </div>

          <div className={header["header__texts__cartaolocal__local"]}>
            <figure>

              <img src={local} alt="icone localização" />

            </figure>Anexo ao Estação Santa Mônica
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
