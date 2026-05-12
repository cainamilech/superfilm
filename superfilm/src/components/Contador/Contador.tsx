import contador from "./assets/Contador.module.scss";

import CountUp from "react-countup";

type ContadorProps = {
  start?: number;
  end: number;
  duration?: number;
};

const Contador = ({
  start = 0,
  end,
  duration = 3,
}: ContadorProps) => {
  return (
    <CountUp
      enableScrollSpy={true}
      duration={duration}
      start={start}
      end={end}
      delay={0}
      separator=""
    >
      {({ countUpRef }) => (
        <span
          className={contador["numero"]}
          ref={countUpRef}
        ></span>
      )}
    </CountUp>
  );
};

export { Contador };