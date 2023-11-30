import { FC, Suspense, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import AuthForm from "../../components/AuthForm.tsx/AuthForm";
import { Outlet } from "react-router-dom";

const Main: FC = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      {show && (
        <Modal>
          <AuthForm />
        </Modal>
      )}
      <Footer />
    </>
  );
};

export default Main;
