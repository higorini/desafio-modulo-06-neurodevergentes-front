import { useState } from "react";
import { Link } from "react-router-dom";
import iconDoesShowPassword from '../../assets/imgs/SignUp/icon-does-show-password.png';
import iconFinishSignUp from '../../assets/imgs/SignUp/icon-finish-signUp.png';
import iconShowPassword from '../../assets/imgs/SignUp/icon-show-password.png';
import iconStep1 from '../../assets/imgs/SignUp/icon-step1-signUp.png';
import iconStep2 from '../../assets/imgs/SignUp/icon-step2-signUp.png';
import iconStep3 from '../../assets/imgs/SignUp/icon-step3-signUp.png';
import { newUser, validateEmail } from "../../services";
import "./style.css";

function SignUp() {
  const [stepSignUp, setStepSignUp] = useState(1)
  const [imgStep, setImgStep] = useState(iconStep1)
  const [btnShowPassword1, setBtnShowPassword1] = useState(false)
  const [btnShowPassword2, setBtnShowPassword2] = useState(false)
  const [msgError, setMsgError] = useState("")
  const icons = [iconStep1, iconStep2, iconStep3]
  const [valueInput, setValueInput] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  })

  function handleShowPassword(input) {
    input ? setBtnShowPassword2(!btnShowPassword2) : setBtnShowPassword1(!btnShowPassword1)
  }

  function handlePrevStep() {
    if (stepSignUp === 2) {
      setStepSignUp(0)
      setImgStep(icons[0])
    }
    setStepSignUp(1)
  }

  async function handleNextStep() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!valueInput.name.length || !valueInput.email.length) {
      setMsgError("Por favor, preencha todos os campos obrigatórios antes de continuar.")
      return
    }

    if (!emailRegex.test(valueInput.email) && stepSignUp === 1) {
      setMsgError("Por favor, insira um endereço de email válido.")
      return
    }

    if (stepSignUp === 1) {

      const name = valueInput.name
      const email = valueInput.email
      const response = await handleValidateEmail(email, name)
      if (response.status === 400) {
        setMsgError(response.data.message)
        return
      }

    }

    setMsgError("")

    if (stepSignUp === 2) {
      if (valueInput.password2.length < 6 && stepSignUp === 2) {
        setMsgError("A senha deve ter pelo menos 6 caracteres.")
        return
      }
      if (valueInput.password1 !== valueInput.password2 && stepSignUp === 2) {
        setMsgError("As senhas não coincidem. Por favor, tente novamente.")
        return
      }
      setMsgError("")

      handleSendForm()
    }

    if (stepSignUp < 3) {
      setStepSignUp(stepSignUp + 1)
      setImgStep(icons[stepSignUp])
    }
  }

  function handleInput(e) {
    const valueInputEvent = e.target.value
    const nameInputEvent = e.target.id
    setValueInput((prevValue) => ({ ...prevValue, [nameInputEvent]: valueInputEvent }))
  }

  async function handleValidateEmail(email, name) {
    const response = await validateEmail(email, name)
    return response
  }

  async function handleSendForm() {
    const user = {
      name: valueInput.name,
      email: valueInput.email,
      password: valueInput.password2
    }
    await newUser(user);
  }

  return (
    <div className="container-signUp" >
      <div className="left-signUp">
        <div className="step">
          <div>
            <img
              className="icon-step"
              src={imgStep}
              alt="icone etapa" />
          </div>
          <div className="container-task">
            <div
              style={{ cursor: 'pointer' }}
              onClick={handlePrevStep}>
              <span>
                Cadastre-se
              </span>
              <p>
                Por favor, escreva seu nome e e-mail
              </p>
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={handleNextStep}>
              <span>
                Escolha uma senha
              </span>
              <p>
                Escolha uma senha segura
              </p>
            </div>
            <div
              style={{ cursor: 'not-allowed' }}>
              <span>
                Cadastro realizado com sucesso
              </span>
              <p>
                E-mail e senha cadastrados com sucesso
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-signUp">
        {stepSignUp < 3 ? (stepSignUp === 1 ? (
          <div className="box-form-simple">
            <h1>Adicione seus dados</h1>
            <form>
              <label htmlFor="name">Nome*</label>
              <input
                placeholder={`Digite seu nome`}
                type='text'
                id='name'
                name="name"
                value={valueInput.name}
                onChange={handleInput}

              />
              <label htmlFor="email">E-mail*</label>
              <input
                placeholder={`Digite seu e-mail`}
                type='email'
                id="email"
                name="email"
                value={valueInput.email}
                onChange={handleInput}
              />
            </form>
            {msgError && (
              <p className="msg-error">
                {msgError}
              </p>
            )}
            <div>
              <button
                onClick={handleNextStep}
                className="button-primary hover-simple">
                Continuar
              </button>
              <p>
                {`Já possui uma conta? Faça seu `}
                <Link to="../sign-in">
                  Login
                </Link>
              </p>
            </div>
          </div >
        ) : (
          <div className="box-form-simple">
            <h1>Escolha uma senha</h1>
            <form>
              <label htmlFor="password">Senha*</label>
              <input
                placeholder={`Digite sua senha`}
                type={(btnShowPassword1 ? "text" : "password")}
                id='password1'
                name="password"
                value={valueInput.password1}
                onChange={handleInput}
              />
              <label htmlFor="password">Repita a senha*</label>
              <input
                placeholder={`Digite sua senha`}
                type={(btnShowPassword2 ? "text" : "password")}
                id="password2"
                name="password"
                value={valueInput.password2}
                onChange={handleInput}
              />
            </form>
            <div className="div-showPassword">
              <div>
                <button
                  className='showPassword'
                  onClick={() => handleShowPassword(0)}>
                  <img src={btnShowPassword1 ? iconShowPassword : iconDoesShowPassword} alt="ver senha" />
                </button>
              </div>
              <div>
                <button
                  className='showPassword'
                  onClick={() => handleShowPassword(1)}>
                  <img src={btnShowPassword2 ? iconShowPassword : iconDoesShowPassword} alt="ver senha" />
                </button>
              </div>
            </div>
            {msgError && (
              <div className="div-msg-error">
                <p className={
                  (stepSignUp === 1 ? "msg-error" : "msg-error2")}>
                  {msgError}
                </p>
              </div>
            )}
            <div>
              <button
                onClick={handleNextStep}
                className="button-primary hover-simple">
                Continuar
              </button>
              <p>
                {`Já possui uma conta? Faça seu `}
                <Link to="../sign-in">
                  Login
                </Link>
              </p>
            </div>
          </div >
        )) : (
          <div className="div-finish">
            <div className="finish-signUp">
              <img src={iconFinishSignUp} alt="Fim do cadastro" />
              <h1>Cadastro realizado com sucesso!</h1>
            </div>
            <Link to="../sign-in">
              <button className="button-primary">
                Ir para Login
              </button>
            </Link>
          </div>
        )}
        <div className="bar-progress">
          <div
            style={{ cursor: 'pointer' }}
            onClick={handlePrevStep}
            className={`bar ${stepSignUp === 1 ? "bar-active" : "bar-idle"}`} />
          <div
            style={{ cursor: 'pointer' }}
            onClick={handleNextStep}
            className={`bar ${stepSignUp === 2 ? "bar-active" : "bar-idle"}`} />
          <div
            style={{ cursor: 'not-allowed' }}
            className={`bar ${stepSignUp === 3 ? "bar-active" : "bar-idle"}`} />

        </div>
      </div>

    </div>

  );
}


export default SignUp;