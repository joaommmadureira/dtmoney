import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
