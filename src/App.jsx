import { useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import IconoNuevo from "./components/routes/img/cerrar.svg";
import TablaTipoDocumento from "./components/TablaTipoDocumento";
import TablaTransaccion from "./components/TablaTransaccion";
import TablaAsientos from "./components/TablaAsientos";

function App() {
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const handleNuevoGasto = () => {
    setModal("true");

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const [page, setPage] = useState("/");

  const getContent = () => {
    if (page === "/") {
      return <TablaTipoDocumento />;
    } else if (page === "/ModalClientes") {
      console.log("clientes");
    } else if (page === "/ModalTransacciones") {
      return <TablaTransaccion />;
    } else if (page === "/ModalAsientos") {
      return <TablaAsientos />;
    }
  };

  const toPage = (page) => (event) => {
    event.preventDefault();
    setPage(page)
  };

  return (
    <div>
      <Header />

      <ul id="Navbar">
        <li id="Navitem">
          <a href="#" onClick={toPage("/")}>
            Tipos de documento
          </a>
        </li>
        <li id="Navitem">
          <a href="#" onClick={toPage("/ModalClientes")}>
            Clientes
          </a>
        </li>
        <li id="Navitem">
          <a href="#" onClick={toPage("/ModalTransacciones")}>
            Transacciones
          </a>
        </li>
        <li id="Navitem">
          <a href="#" onClick={toPage("/ModalAsientos")}>
            Asientos contables
          </a>
        </li>
      </ul>

      <div className="nuevo-gasto">
        <img src={IconoNuevo} alt="iconnew" onClick={handleNuevoGasto} />
      </div>
      {getContent()}
      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
        />
      )}
    </div>
  );
}

export default App;
