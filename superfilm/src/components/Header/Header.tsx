import header from "./assets/modules/Header.module.scss";
import superfilm from "./assets/imgs/superfilm-logo.png";

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
        <h1>PELÍCULAS PARA VIDROS</h1>
        <h2>películas arquitetônicas, residencial e comercial.</h2>
        <h2 className={header["header__texts__terceiro"]}>
          prestação de serviços terceirizados para concessionárias e frotas de
          carros.
        </h2>

        <a href="https://wa.me/5548996802068" target="_blank" rel="noreferrer">
          Solicitar Orçamento
        </a>
      </div>
    </header>
  );
};

export { Header };
