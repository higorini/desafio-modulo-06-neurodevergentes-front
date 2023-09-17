import { useEffect, useState } from "react";
import FormSimple from "../../components/FormSimple";
import "./style.css";

function SingIn() {
    const [form, setForm] = useState("")
    const dataForm = {
        dataForm: {
            title: 0,
            input: {
                input1: 1,
                input2: 2
            },
            button: 0
        }
    }

    function handleForm() {
        const userData = {
            email: form.email,
            password: form.senha
        }
        console.log(userData)
    }

    return (
        <div className="container-signIn" >
            <div className="left-signIn">
                <div>
                    <h3>Gerencie todos os pagamentos da sua empresa em um só lugar</h3>
                </div>
            </div>
            <div className="right-signIn">
                <FormSimple
                    stateForm={dataForm.dataForm}
                    setForm={setForm}
                    sendData={handleForm}
                />
            </div>
        </div>
    );
}

export default SingIn;
