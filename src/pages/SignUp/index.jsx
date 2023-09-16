import { useState } from "react";
import FormSimple from "../../components/FormSimple";
import "./style.css";
import iconStep1 from '../../assets/icon-step1-signUp.png'
import iconStep2 from '../../assets/icon-step2-signUp.png'
import iconStep3 from '../../assets/icon-step3-signUp.png'

function SingUp() {
    const [stepSingUp, setStepSingUp] = useState(1)

    function handleNextStep() {
        console.log("fsafs")
    }

    return (
        <div className="container-signUp" >
            <div className="left-signUp">
                <div className="step">
                    <div>
                        <img src={iconStep1} alt="icone etapa" />
                    </div>
                    <div className="container-task">
                        <div>
                            <span>
                                Cadastre-se
                            </span>
                            <p>
                                Por favor, escreva seu nome e e-mail
                            </p>
                        </div>
                        <div>
                            <span>
                                Escolha uma senha
                            </span>
                            <p>
                                Escolha uma senha segura
                            </p>
                        </div>
                        <div>
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
                <FormSimple
                    title={1}
                    input={[
                        0, 1
                    ]}
                    button={1}
                    nextStep={handleNextStep}
                />
            </div>
        </div>
    );
}
export default SingUp;
