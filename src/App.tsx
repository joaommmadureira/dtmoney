import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

    function handleOpenNewTransactionModal() {
      setIsNewTransactionOpen(true);
    }

    function handleCloseNewTransactionModal() {
      setIsNewTransactionOpen(false);
    }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}

export default App;
