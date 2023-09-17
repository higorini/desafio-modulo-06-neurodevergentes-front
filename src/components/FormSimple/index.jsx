import { useState } from 'react'
import iconDoesShowPassword from '../../assets/icon-does-show-password.png'
import iconShowPassword from '../../assets/icon-show-password.png'
import './style.css'

function FormSimple({ stateForm, sendData, setFormPassword, setFormNameEmail, setForm }) {
    const { title, input, button } = stateForm
    const [showPassword, setShowPassword] = useState(title === 0 ? false : true)
    const [msgError, setMsgError] = useState("")
    const titleH1 = {
        0: "Faça seu login!",
        1: "Adicione seus dados",
        2: "Escolha uma senha"
    }
    const titleInput = {
        0: "Nome",
        1: "E-mail",
        2: "Senha",
    }
    const titleButton = [
        "Entrar",
        "Continuar",
        "Finalizar Cadastro",
        "Ir para login"
    ]
    const [valueInput, setValueInput] = useState({
        input1: "",
        input2: ""
    })

    const inputName1 = titleInput[input.input1] + (title !== 0 ? "*" : "")
    const inputName2 = titleInput[input.input2] + (title !== 0 ? "*" : "")
    const handleNameImput1 = titleInput[input.input1].slice(0, 1).toLocaleLowerCase() + titleInput[input.input1].slice(1)
    const handleNameImput2 = titleInput[input.input2].slice(0, 1).toLocaleLowerCase() + titleInput[input.input2].slice(1)

    function handleInput(e) {
        const valueInputEvent = e.target.value
        const nameInputEvent = e.target.name
        setValueInput((prevValue) => ({ ...prevValue, [nameInputEvent]: valueInputEvent }))
    }

    function handleForm(e) {
        e.preventDefault()
        if (!valueInput.input1.length || !valueInput.input2.length) {
            setMsgError("Campos obrigatorios não preenchidos")
            return
        }

        if (valueInput.input2.length < 6 && inputName2 === "Senha*") {

            setMsgError("Quantidade minima de caracteres para a senha é 6 (seis)")
            return
        }

        setMsgError("")
        if (title !== 0) {
            if (title === 1) {
                setFormNameEmail((prevValue) => ({ ...prevValue, name: valueInput.input1 }))
                setFormNameEmail((prevValue) => ({ ...prevValue, email: valueInput.input2 }))
            }

            if (title === 2) {
                setFormPassword((prevValue) => ({ ...prevValue, password: valueInput.input2 }))

            }

            setValueInput({
                input1: "",
                input2: ""
            })

            sendData()
            return
        }
        setForm({
            email: valueInput.input1,
            senha: valueInput.input2
        })
        sendData()

    }

    function handleShowPassword() {
        setShowPassword(!showPassword)
    }

    return (
        <div className="box-form-simple">

            <h1> {titleH1[title]}</h1>

            <form>
                <label htmlFor="input1">{inputName1}</label>
                <input
                    placeholder={
                        `Digite seu ${handleNameImput1}`
                    }
                    type="text"
                    id={inputName1}
                    name="input1"
                    value={valueInput.input1}
                    onChange={handleInput}

                />
                <label htmlFor="input2">{inputName2}</label>
                <input
                    placeholder={
                        `Digite seu ${handleNameImput2} `
                    }
                    type={(title === 0 ? (showPassword ? "text" : "password") : ('email'))}
                    id={inputName2}
                    name="input2"
                    value={valueInput.input2}
                    onChange={handleInput}
                />
                {title === 0 &&
                    <a className="recov-passwor" href="">Esqueceu a senha?</a>
                }
            </form>

            {title === 0 &&
                <button
                    className='showPassword'
                    onClick={handleShowPassword}>
                    <img src={showPassword ? iconShowPassword : iconDoesShowPassword} alt="ver senha" />
                </button>
            }

            {msgError && (
                <p className="msg-error">
                    {msgError}
                </p>
            )}

            <div>
                <button
                    onClick={handleForm}
                    className="button-primary hover-simple">
                    {titleButton[button]}
                </button>
                {title !== 0 ?
                    <p>Já possui uma conta? Faça seu <a href="">Login</a></p>
                    : <p>Ainda não possui uma conta? <a href="">Cadastre-se</a></p>}
            </div>
        </div>
    )
}

export default FormSimple