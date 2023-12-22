"use client";

import usePreventScroll from "@/hooks/usePreventScroll";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  isOpen: boolean;
  setIsOpen?: () => void;
  children: ReactNode;
}

function Portal({ isOpen, children, setIsOpen }: PortalProps) {
  const [portal, setPortal] = useState<HTMLElement | null>();
  useEffect(() => {
    if (document) {
      const portalElem = document.getElementById("portal");

      setPortal(portalElem);
    }
  }, []);
  if (typeof window === "undefined") return <></>;

  if (!isOpen) {
    return null;
  }
  return createPortal(children, portal as HTMLElement);
}

interface ModalProps {
  children: ReactNode;
  content: JSX.Element;
  isConfirm?: boolean;
}

const Modal = ({ children, content, isConfirm = false }: ModalProps) => {
  const [open, setOpen] = useState<boolean>(false);

  if (typeof window === "undefined") return <></>;
  const modalHandler = () => {
    setOpen((pre) => !pre);
  };

  const Content = () => {
    usePreventScroll();

    return React.cloneElement(content, { func: modalHandler });
  };

  return (
    <div>
      <div onClick={modalHandler}>{children}</div>
      <Portal isOpen={open}>
        <div
          className="bg-black bg-opacity-40 w-screen h-screen fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          //   style={{
          //     backgroundColor: "rgba(0,0,0,0.4)",
          //     width: "100vw",
          //     height: "100vh",
          //     position: "fixed",
          //     left: "50%",
          //     top: "50%",
          //     transform: "translate(-50%, -50%)",
          //     zIndex: 10,
          //   }}
          onClick={() => {
            !isConfirm && modalHandler();
          }}
        />
        <Content />
      </Portal>
    </div>
  );
};

export default Modal;
