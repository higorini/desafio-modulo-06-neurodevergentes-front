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

  const [addClientSuccessAlert, setAddClientSuccessAlert] = useState(false);
  const [addChargeSuccessAlert, setAddChargeSuccessAlert] = useState(false);

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
  }, [addClientSuccessAlert]);

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
  }, [addChargeSuccessAlert]);

  return {
    clients,
    setClients,
    addClientSuccessAlert,
    setAddClientSuccessAlert,
    loyalClients,
    defaultingClients,
    charges,
    setCharges,
    paidCharge,
    pendingCharge,
    addChargeSuccessAlert,
    overdueCharge,
    setAddChargeSuccessAlert,
  };
}
export default useGlobalProvider;
