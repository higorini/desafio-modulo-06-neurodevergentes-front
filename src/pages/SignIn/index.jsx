// import imagem from "../../assets/img-login.png";
import "./style.css";


function SingIn() {

    return (
        <div
            className="container-login" >
            <div className="left-signIn">
                <h3>Gerencie todos os pagamentos da sua empresa em um só lugar</h3>
            </div>
            <div className="right-signIn">
                <div className="box-login">
                    <h1>Faça seu login</h1>
                    <form action="">
                        <label htmlFor="email">E-mail</label>
                        <input
                            placeholder="Digite seu e-mail"
                            type="email"
                            id="email"
                            name="email"
                        />
                        <label htmlFor="password">Senha</label>
                        <input
                            placeholder="Digite sua senha"
                            type="password"
                            id="password"
                            name="password"
                        />
                        <a href="">Esqueceu a senha?</a>
                    </form>
                    <div>
                        <button>
                            Entrar
                        </button>
                        <p>Ainda não possui uma conta? <a href="">Cadastre-se</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingIn;
