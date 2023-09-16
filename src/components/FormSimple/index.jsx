import { useState } from 'react'
import iconDoesShowPassword from '../../assets/icon-does-show-password.png'
import iconShowPassword from '../../assets/icon-show-password.png'
import './style.css'

function FormSimple({ title, input, button, nextStep }) {
    const [showPassword, setShowPassword] = useState(title === 0 ? false : true)
    const titleH1 = [
        "Faça seu login!",
        "Adicione seus dados",
        "Escolha uma senha"
    ]
    const titleInput = [
        "Nome",
        "E-mail",
        "Senha",
    ]
    const titleButton = [
        "Entrar",
        "Continuar",
        "Finalizar Cadastro",
        "Ir para login"
    ]
    const [valueInput, setValueInput] = useState([
        titleInput[title[0]] = "",
        titleInput[title[1]] = ""
    ])


    function handleNextStep(params) {
        nextStep()
    }

    function handleShowPassword() {
        setShowPassword(!showPassword)
    }

    return (
        <div className="box-form-simple">

            <h1> {titleH1[title]}</h1>

            <form action="">
                <label htmlFor={titleInput[input[0]]}>{titleInput[input[0]] + (title !== 0 ? "*" : "")}</label>
                <input
                    placeholder={
                        `Digite seu ${titleInput[input[0]].slice(0, 1).toLocaleLowerCase() + titleInput[input[0]].slice(1)}`
                    }
                    type="text"
                    id="email"
                    name="email"
                />
                <label htmlFor={titleInput[input[1]]}>{titleInput[input[1]] + (title !== 0 ? "*" : "")}</label>
                <input
                    placeholder={
                        `Digite seu ${titleInput[input[1]].slice(0, 1).toLocaleLowerCase() + titleInput[input[1]].slice(1)}`
                    }
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
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

            {/* {m && (
            <p className="msg-error">error</p>
        )} */}

            <div>
                <button
                    onClick={nextStep}
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