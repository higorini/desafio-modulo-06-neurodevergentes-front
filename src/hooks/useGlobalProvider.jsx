import { useEffect, useState } from "react";
import { listCustumers } from "../services";

function useGlobalProvider() {
  const [clients, setClients] = useState([]);
  const [defaultingClients, setDefaultingClients] = useState([]);
  const [loyalClients, setLoyalClients] = useState([]);
  const [addClientSuccessAlert, setAddClientSuccessAlert] = useState(false);
  const [addChargeSuccessAlert, setAddChargeSuccessAlert] = useState(false)

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

  return {
    clients,
    setClients,
    addClientSuccessAlert,
    setAddClientSuccessAlert,
    loyalClients,
    defaultingClients,
    addChargeSuccessAlert,
    setAddChargeSuccessAlert
  };
}
export default useGlobalProvider;
