import { useEffect, useState } from "react";
import FormSimple from "../../components/FormSimple";
import "./style.css";
import iconStep1 from '../../assets/icon-step1-signUp.png'
import iconStep2 from '../../assets/icon-step2-signUp.png'
import iconStep3 from '../../assets/icon-step3-signUp.png'
import iconFinishSignUp from '../../assets/icon-finish-signUp.png'

function SignUp() {
    const [stepSignUp, setStepSignUp] = useState({
        stepActive: 1,
        dataForm: {
            title: 1,
            input: {
                input1: 0,
                input2: 1
            },
            button: 1
        }
    })
    const [formNameEmail, setFormNameEmail] = useState({})
    const [formPassword, setFormPassword] = useState({})
    const [imgStep, setImgStep] = useState(iconStep1)
    const icons = [
        iconStep1, iconStep2, iconStep3
    ]

    useEffect(() => {
    }, [stepSignUp])

    function handlePrevStep() {
        if (stepSignUp.stepActive === 2) {
            setStepSignUp({
                stepActive: 0,
                dataForm: {
                    title: 1,
                    input: {
                        input1: 0,
                        input2: 1
                    },
                    button: 1
                }
            })
            setImgStep(icons[0])

        }
        setStepSignUp((prevValue) => ({ ...prevValue, stepActive: 1 }))
    }

    function handleNextStep() {


        if (stepSignUp.stepActive < 3) {
            setStepSignUp({
                stepActive: stepSignUp.stepActive + 1,
                dataForm: {
                    title: 2,
                    input: {
                        input1: 2,
                        input2: 2
                    },
                    button: 2
                }
            })
            setImgStep(icons[stepSignUp.stepActive])

        }

    }

    function handleForm() {

        const user = {
            name: formNameEmail.name,
            email: formNameEmail.email,
            password: formPassword.password
        }

        console.log(user);

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
                {stepSignUp.stepActive < 3 ? (
                    <FormSimple
                        sendData={handleNextStep}
                        stateForm={stepSignUp.dataForm}
                        setFormPassword={setFormPassword}
                        setFormNameEmail={setFormNameEmail}
                    />
                ) : (
                    <div className="div-finish">
                        <div className="finish-signUp">
                            <img src={iconFinishSignUp} alt="Fim do cadastro" />
                            <h1>Cadastro realizado com sucesso!</h1>
                        </div>
                        <button className="button-primary"
                            onClick={handleForm}
                        >
                            Ir para Login
                        </button>
                    </div>
                )}
                <div className="bar-progress">
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={handlePrevStep}
                        className={`bar ${stepSignUp.stepActive === 1 ? "bar-active" : "bar-idle"}`} />
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={handleNextStep}
                        className={`bar ${stepSignUp.stepActive === 2 ? "bar-active" : "bar-idle"}`} />
                    <div
                        style={{ cursor: 'not-allowed' }}
                        className={`bar ${stepSignUp.stepActive === 3 ? "bar-active" : "bar-idle"}`} />

                </div>
            </div>

        </div>
    );
}
export default SignUp;