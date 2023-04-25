import banner from "./assets/Banner.module.scss";

import pelicula from "./assets/pelicula.jpeg";

const Banner = () => {
  return (
    <figure className={banner["figure"]}>
      <img src={pelicula} alt="banner moldagem pelicula" />
    </figure>
  );
};

export { Banner };
