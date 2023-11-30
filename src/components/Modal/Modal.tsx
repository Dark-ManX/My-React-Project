import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { StyledDiv } from "./Modal.styled";

const modalRoot: any = document.querySelector("#modal") as HTMLElement;

const Modal: FC<{ children?: ReactNode }> = ({ children }) => {
  return createPortal(
    <div
      className={
        "absolute top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] z-10"
      }
    >
      <StyledDiv
        className={
          "relative p-[50px] max-w-[600px] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-white rounded-3xl"
        }
      >
        {children}
      </StyledDiv>
    </div>,
    modalRoot
  );
};

export default Modal;
