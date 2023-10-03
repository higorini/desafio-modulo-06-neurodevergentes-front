import {
  Box,
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { format } from 'date-fns';
import { useState } from "react";
import ChargeIcon from "../../assets/icons/charge.svg";
import CloseIcon from "../../assets/icons/closeIcon.svg";
import useGlobal from "../../hooks/useGlobal";
import { addCharge } from "../../services";

function AddCharge({ setOpenCharge, selectedClientId, selectedClientName }) {
  const { setAddChargeSuccessAlert } = useGlobal();
  const [valueInput, setValueInput] = useState({
    costumer_name: selectedClientName,
    description: "",
    value: "",
    status: "paga",
    charge_date: ""
  })

  const [errorMsg, setErrorMsg] = useState({
    description: "",
    value: "",
    status: "",
    charge_date: "",
  });

  function handleInput(e) {
    const valueInputEvent = e.target.value;
    const nameInputEvent = e.target.name;
    setValueInput((prevValue) => ({
      ...prevValue,
      [nameInputEvent]: valueInputEvent,
    }));
  }

  function handleRadioChange(e) {
    const valueInputEvent = e.target.value;
    setValueInput((prevValue) => ({
      ...prevValue,
      status: valueInputEvent,
    }));
  }

  const valorInputCheck = () => {
    let check = false
    for (let value in valueInput) {
      if (valueInput.hasOwnProperty(value) && !valueInput[value]) {
        setErrorMsg((prevValue) => ({
          ...prevValue,
          [value]: "Preencha todos os campos.",
        }));
        check = true
      }
    }
    return check
  }

  async function handleSendForm() {
    if (valorInputCheck()) {
      return
    }

    const formattedDate = format(new Date(valueInput.charge_date), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    const mountConvert = Math.round(parseFloat(valueInput.value.replace(',', '.')) * 100);

    const user = {
      costumer_name: valueInput.costumer_name,
      description: valueInput.description,
      value: mountConvert,
      status: valueInput.status,
      charge_date: formattedDate
    };

    await addCharge(user, selectedClientId);

    setOpenCharge("")
    setAddChargeSuccessAlert(true)
  }

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(145, 154, 150, 0.3)",
        zIndex: 1,
        position: "fixed",
        top: "0",
        left: "0",
      }}
    >
      <Stack
        padding="40px 56px"
        sx={{
          borderRadius: "32px",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <Typography
          display="flex"
          component="h2"
          fontSize="var(--title-l)"
          fontFamily="var(--font-title)"
          fontWeight="600"
          gap="1rem"
          color="var(--gray-800)"
          sx={{
            marginBottom: "8px",
          }}
        >
          <img src={ChargeIcon} />
          Cadastro de Cobrança
        </Typography>
        <Box
          onClick={() => setOpenCharge(false)}
          sx={{
            position: "absolute",
            top: "24px",
            right: "24px",
          }}
        >
          <img src={CloseIcon} alt="" />
        </Box>
        <form action="">
          <Stack gap="10px" alignItems="center">
            <Stack direction="column">
              <InputLabel
                htmlFor="clientName"
                sx={{
                  fontSize: "var(--body-s)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "600",
                  color: "var(--gray-700)",
                }}
              >
                Nome*
              </InputLabel>
              <TextField
                id="clientName"
                name="costumer_name"
                variant="outlined"
                placeholder="Digite o nome"
                error={!!errorMsg.costumer_name}
                helperText={errorMsg.costumer_name}
                value={valueInput.costumer_name}
                onChange={handleInput}
                sx={{
                  width: "487px",
                  "input:first-of-type": {
                    color: "var(--gray-600)",
                    padding: "10px 14px",
                    fontFamily: "var(--font-body)",
                  },
                }}
              />
            </Stack>
            <Stack direction="column">
              <InputLabel
                htmlFor="description"
                sx={{
                  fontSize: "var(--body-s)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "600",
                  color: "var(--gray-700)",
                }}
              >
                Descrição*
              </InputLabel>
              <TextField
                name="description"
                variant="outlined"
                placeholder="Digite a descrição"
                error={!!errorMsg.description}
                helperText={errorMsg.description}
                value={valueInput.description}
                onChange={handleInput}
                multiline
                sx={{
                  width: "485px",
                  "input:first-of-type": {
                    height: "68px",
                    color: "var(--gray-600)",
                    padding: "10px 14px",
                    fontFamily: "var(--font-body)",
                  },
                }}
              />
            </Stack>
            <Stack direction="row" gap="24px">
              <Stack direction="column">
                <InputLabel
                  htmlFor="expireDate"
                  sx={{
                    fontSize: "var(--body-s)",
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    color: "var(--gray-700)",
                  }}
                >
                  Vencimento*
                </InputLabel>
                <TextField
                  id="expireDate"
                  name="charge_date"
                  variant="outlined"
                  placeholder="Data de Vencimento"
                  error={!!errorMsg.charge_date}
                  helperText={errorMsg.charge_date}
                  value={valueInput.charge_date}
                  type="date"
                  onChange={handleInput}
                  sx={{
                    width: "235px",
                    "input:first-of-type": {
                      color: "var(--gray-600)",
                      padding: "10px 14px",
                      fontFamily: "var(--font-body)",
                    },
                  }}
                />
              </Stack>
              <Stack direction="column">
                <InputLabel
                  htmlFor="value"
                  sx={{
                    fontSize: "var(--body-s)",
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    color: "var(--gray-700)",
                  }}
                >
                  Valor*
                </InputLabel>
                <TextField
                  id="value"
                  name="value"
                  placeholder="Digite o valor"
                  error={!!errorMsg.value}
                  helperText={errorMsg.value}
                  value={valueInput.value}
                  onChange={handleInput}
                  sx={{
                    width: "224px",
                    "input:first-of-type": {
                      color: "var(--gray-600)",
                      padding: "10px 14px",
                      fontFamily: "var(--font-body)",
                    },
                  }}
                />
              </Stack>
            </Stack>
            <Stack
              direction="column"
              sx={{
                width: "482px",
              }}
            >
              <InputLabel
                htmlFor="clientName"
                sx={{
                  fontSize: "var(--body-s)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "600",
                  color: "var(--gray-700)",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                Status*
              </InputLabel>
              <RadioGroup
                defaultValue="paga"
                sx={{
                  gap: "0.5rem",
                  marginLeft: "0.5rem",
                  width: "487px",
                }}
              >
                <FormControlLabel
                  value="paga"
                  control={<Radio />}
                  label="Cobrança Paga"
                  onChange={handleRadioChange}
                  sx={{
                    fontSize: "var(--body-s)",
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    color: "var(--gray-700)",
                    background: "var(--gray-200)",
                    borderRadius: "0.5rem",
                  }}
                />
                <FormControlLabel
                  value="pendente"
                  control={<Radio />}
                  label="Cobrança Pendente"
                  onChange={handleRadioChange}
                  sx={{
                    fontSize: "var(--body-s)",
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    color: "var(--gray-700)",
                    background: "var(--gray-200)",
                    borderRadius: "0.5rem",
                  }}
                />
              </RadioGroup>
            </Stack>
            <Stack
              display="flex"
              flexDirection="row"
              gap="24px"
              paddingTop="32px"
            >
              <Button
                variant="contained"
                onClick={() => setOpenCharge(false)}
                sx={{
                  textTransform: "capitalize",
                  width: "231.5px",
                  height: "34px",
                  borderRadius: "10px",
                  fontSize: "var(--title-s)",
                  fontFamily: "var(--font-body)",
                  backgroundColor: "var(--gray-300)",
                  color: "var(--green-500)",
                  cursor: "pointer",
                  transition: "0.2s",
                  ":hover": {
                    backgroundColor: "var(--gray-100)",
                    opacity: "0.8",
                  },
                }}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                onClick={handleSendForm}
                sx={{
                  textTransform: "capitalize",
                  width: "231.5px",
                  height: "34px",
                  borderRadius: "10px",
                  fontSize: "var(--title-s)",
                  fontFamily: "var(--font-body)",
                  backgroundColor: "var(--pink-500)",
                  color: "var(--gray-100)",
                  cursor: "pointer",
                  transition: "0.2s",
                  ":hover": {
                    backgroundColor: "var(--pink-500)",
                    opacity: "0.8",
                  },
                }}
              >
                Aplicar
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
}

export default AddCharge;
