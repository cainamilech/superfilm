import header from "./assets/modules/Header.module.scss";
import superfilm from "./assets/imgs/superfilm-logo.png";

const Header = () => {
  return (
    <header className={header["header"]}>
      <nav>
        <figure>
          <img src={superfilm} alt="logo superfilm" />
        </figure>

        <ul>
          <a href="">
            <li>Quem Somos</li>
          </a>

          <a href="">
            <li>Serviços</li>
          </a>

          <a href="">
            <li>Dúvidas</li>
          </a>

          <a href="">
            <li>Orçamento</li>
          </a>
        </ul>
      </nav>
      <div className={header["header__texts"]}>
        <h1>PELÍCULAS PARA VIDROS</h1>
        <h2>películas arquitetônicas residencial e comercial.</h2>
        <h2>
          prestação de serviços terceirizados para concessionárias e frotas de
          carros.
        </h2>
      </div>
    </header>
  );
};

export { Header };
