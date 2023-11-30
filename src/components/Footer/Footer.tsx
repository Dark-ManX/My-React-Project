import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer
      className={`relative top-0 left-0 translate-y-[-100%] w-[100%] py-[10px] bg-[rgba(100,107,117,0.6)] text-white text-center`}
    >
      <div className={"container" + " " + "max-w-[100%] pointer-events-none"}>
        <p>Created by Dark_Man</p>
      </div>
    </footer>
  );
};

export default Footer;
