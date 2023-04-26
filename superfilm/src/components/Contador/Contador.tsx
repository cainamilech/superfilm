import contador from "./assets/Contador.module.scss";

import CountUp from "react-countup";

const Contador = () => {
  return (
    <CountUp enableScrollSpy={true} duration={3} start={0} end={11} delay={0}>
      {({ countUpRef }) => (
        <span className={contador["numero"]} ref={countUpRef} />
      )}
    </CountUp>
  );
};

export { Contador };
