import FormSimple from "../../components/FormSimple";
import "./style.css";

function SingIn() {

    return (
        <div className="container-signIn" >
            <div className="left-signIn">
                <div>
                    <h3>Gerencie todos os pagamentos da sua empresa em um só lugar</h3>
                </div>
            </div>
            <div className="right-signIn">
                <FormSimple
                    title={0}
                    input={[
                        1, 2
                    ]}
                    button={0}
                />
            </div>
        </div>
    );
}

export default SingIn;
