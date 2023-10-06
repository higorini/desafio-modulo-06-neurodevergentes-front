import { useEffect, useState } from "react";
import { listCharges, listCustumers } from "../services";

function useGlobalProvider() {
  const [clients, setClients] = useState([]);
  const [defaultingClients, setDefaultingClients] = useState([]);
  const [loyalClients, setLoyalClients] = useState([]);

  const [charges, setCharges] = useState([]);
  const [paidCharge, setPaidCharge] = useState([]);
  const [pendingCharge, setPendingCharge] = useState([]);
  const [overdueCharge, setOverdueCharge] = useState([]);

  const [selectedCharge, setSelectedCharge] = useState([]);
  const [selectedClient, setSelectedClient] = useState([]);

  const [showAlert, setShowAlert] = useState(false);

  const [clientsHome, setClientsHome] = useState("")
  const [chargesHome, setChargesHome] = useState("")

  useEffect(() => {
    async function loadClients() {
      try {
        const response = await listCustumers();
        setClients(response);
        setLoyalClients(
          response.filter((client) => {
            return client.status === "Em dia";
          })
        );
        setDefaultingClients(
          response.filter((client) => {
            return client.status === "Inadimplente";
          })
        );
      } catch (erro) {
        return erro;
      }
    }
    loadClients();
  }, [showAlert]);

  useEffect(() => {
    async function loadCharges() {
      try {
        const response = await listCharges();
        setCharges(response);
        setPaidCharge(
          response.filter((charge) => {
            return charge.status === "paga";
          })
        );
        setPendingCharge(
          response.filter((charge) => {
            return charge.status === "pendente";
          })
        );
        setOverdueCharge(
          response.filter((charge) => {
            return charge.status === "vencida";
          })
        );
      } catch (erro) {
        return erro;
      }
    }
    loadCharges();
  }, [showAlert]);

  return {
    clients,
    setClients,
    loyalClients,
    defaultingClients,
    charges,
    setCharges,
    paidCharge,
    pendingCharge,
    overdueCharge,
    selectedCharge,
    setSelectedCharge,
    selectedClient,
    setSelectedClient,
    showAlert,
    setShowAlert,
    clientsHome,
    setClientsHome,
    chargesHome,
    setChargesHome
  };
}
export default useGlobalProvider;
