import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import iconDoesShowPassword from '../../assets/imgs/SignIn/icon-does-show-password.png';
import iconShowPassword from '../../assets/imgs/SignIn/icon-show-password.png';
import { login } from "../../services";
import "./style.css";

function SingIn() {
    const [showPassword, setShowPassword] = useState(false)
    const [msgError, setMsgError] = useState("")
    const navigateTo = useNavigate();
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
    const [valueInput, setValueInput] = useState({
        email: "",
        password: "",
    })

    function handleShowPassword() {
        setShowPassword(!showPassword)
    }

    function handleInput(e) {
        const valueInputEvent = e.target.value
        const nameInputEvent = e.target.id
        setValueInput((prevValue) => ({ ...prevValue, [nameInputEvent]: valueInputEvent }))
    }

    async function handleSendForm() {
        const user = {
            email: valueInput.email,
            password: valueInput.password
        }

        try {
            const response = await login(user);
            localStorage.setItem("token", response.data.token);
            navigateTo("../home");
        } catch (erro) {
            setMsgError(erro.response.data.message);
        }

    }

    return (
        <div className="container-signIn" >
            <div className="left-signIn">
                <div>
                    <h3>Gerencie todos os pagamentos da sua empresa em um só lugar</h3>
                </div>
            </div>
            <div className="right-signIn">
                <div className="box-form-simple">
                    <h1>Faça seu login!</h1>
                    <form>
                        <label htmlFor="email">E-mail</label>
                        <input
                            placeholder={`Digite seu e-mail`}
                            type='email'
                            id='email'
                            name="email"
                            value={valueInput.email}
                            onChange={handleInput}

                        />
                        <label htmlFor="password">Senha</label>
                        <input
                            placeholder={`Digite seu senha`}
                            type={(showPassword ? "text" : "password")}
                            id="password"
                            name="password"
                            value={valueInput.password}
                            onChange={handleInput}
                        />
                    </form>
                    <button
                        className='showPassword'
                        onClick={handleShowPassword}>
                        <img src={showPassword ? iconShowPassword : iconDoesShowPassword} alt="ver senha" />
                    </button>
                    {msgError && (
                        <p className="msg-error redux">
                            {msgError}
                        </p>
                    )}
                    <div>
                        <button
                            onClick={handleSendForm}
                            className="button-primary redux3">
                            Continuar
                        </button>
                        <p>
                            Ainda não possui uma conta?
                            <Link to="../sign-up">
                                Cadastre-se
                            </Link>
                        </p>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default SingIn;
