import { FC, SyntheticEvent, useState, useEffect } from "react";
import wheel from "../../imgs/wheel.jpg";

const History: FC = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    function handleScroll(e: any) {
      setScroll(e.currentTarget.scrollY);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        "container" +
        " " +
        "bg-[rgba(3,84,150,0.5)] max-w-[100%] indent-5 relative overflow-hidden text-lg"
      }
    >
      <div
        className={
          "absolute rounded-[50%] overflow-hidden w-[auto] top-[200px] right-[-250px] -z-10"
        }
      >
        <img
          src={wheel}
          alt="wheel"
          style={{ transform: `rotate(-${scroll / 4}deg)` }}
          className={"w-[100%]"}
        />
      </div>
      <article className={"w-[900px] pt-[100px]"}>
        <h1 className={"text-[60px] mb-5 font-[Kanit Bold]"}>History of BMW</h1>
        <i className={"block"}>
          The acronym BMW stands for Bayerische Motoren Werke GmbH, which
          roughly translates to the Bavarian Engine Works Company. The name
          harks back to the company’s origin in the German state of Bavaria. It
          also indicates BMW's original product range: engines for various
          applications.{" "}
        </i>
        <p>
          Today's BMW AG has its origin in Rapp-Motorenwerke GmbH, which began
          producing aircraft engines in 1913. During the First World War, Rapp
          supplied the air force of the German Empire. At that time, automobiles
          had not yet broken through into the mainstream. If you wanted to
          travel long distances on land, you went by train.
        </p>
      </article>
      <article className={"w-[750px] mt-10"}>
        <h2 className={"text-[40px] mb-5"}>Rapp Motorenwerke becomes BMW</h2>
        <p>
          Rapp Motorenwerke had its headquarters in the Bavarian capital, Munich
          – as did the factory where the engines were fitted into the aircrafts,
          Gustav Otto Flugmaschinenfabrik. When the Otto company went bankrupt
          in 1916, it became Bayerische Flugzeugwerke AG (BFW). Shortly
          afterwards, Rapp also changed its company name: In 1917, the company
          became known as Bayerische Motoren Werke GmbH. BMW’s origin in the
          Rapp company can also be seen on the logo.
        </p>
      </article>
      <article className={"w-[750px] mt-10"}>
        <h2 className={"text-[40px] mb-5"}>
          The BMW name vanishes – for a time
        </h2>
        <p>
          In August 1918, Bayerische Motoren Werke GmbH became a stock
          corporation. But the end of the First World War brought a halt to the
          construction of aircraft engines, as the Treaty of Versailles forbade
          Germany from building them. So BMW shifted its focus to railway brakes
          and built-in motors. This was so successful that the Berlin-based
          brakes company Knorr-Bremse AG took majority ownership of BMW in 1920,
          integrated the company and relocated to Munich. Bayerische Motoren
          Werke GmbH as an independent company disappeared temporarily from the
          scene – albeit not for long.
        </p>
      </article>
      <article className={"w-[900px] mt-10"}>
        <h2 className={"text-[40px] mb-5"}>BMW founding, take two!</h2>
        <p>
          In 1922, the major investor and aircraft construction pioneer Camillo
          Castiglioni was the main shareholder of Knorr-Bremse AG. He bought the
          BMW company name and took over engine construction operations, along
          with the employees, production facilities and company logo, and
          transferred everything to BFW, Bayerische Flugzeugwerke AG.
        </p>
        <i className={"block"}>
          In the same year, the company moved into BFW’s factory buildings in
          Lerchenauer Strasse and changed its name to Bayerische Motoren Werke
          AG. And that’s how the BMW name found its way into the commercial
          register for a second time.
        </i>
      </article>
      <article className={"mt-10 mb-[80px] font-[Kanit Bold] text-[20px]"}>
        All this means that BMW AG mb-5is the legal successor of BFW. The
        corporate headquarters and parent plant of the BMW Group are still
        located at the former BFW site in Milbertshofen, Munich to this day. And
        there’s something else the aircraft manufacturers bequeathed to BMW AG,
        too: BFW’s founding date of March 7, 1916 is considered to be BMW’s
        official birthday.
      </article>
    </div>
  );
};

export default History;
