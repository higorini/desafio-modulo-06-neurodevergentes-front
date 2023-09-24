import { useEffect, useState } from "react";
import { listCustumers } from "../services";

function useGlobalProvider() {
  const [clients, setClients] = useState([]);
  const [addClientSuccessAlert, setAddClientSuccessAlert] = useState(false);

  useEffect(() => {
    async function loadClients() {
      try {
        const response = await listCustumers();
        setClients(response);
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
  };
}
export default useGlobalProvider;
