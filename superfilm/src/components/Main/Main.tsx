import main from "./assets/modules/Main.module.scss";

const Main = () => {
  return (
    <main>
      <section className={main["banner"]}>
        <div className={main["banner__texts"]}>
          <h1>PELÍCULAS PARA VIDROS</h1>
          <h2>películas arquitetônicas residencial e comercial.</h2>
          <h2>
            prestação de serviços terceirizados para concessionárias e frotas de
            carros.
          </h2>
        </div>
      </section>
      <section className={main["sessao"]}>asdasdasdasd</section>
    </main>
  );
};

export { Main };
