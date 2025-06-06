import { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginA.css';

function LoginA() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="login"> {/*aqui é a div maior, com todo o conteúdo da página*/}
      <div className="imagem"> {/*aqui é a subdiv, a página tem duas, basicamente elas ficam lado a lado, essa parte é só a logo da unb, mesmo*/}
        <img src="https://i0.wp.com/psto.unb.br/wp-content/uploads/2020/07/Marca-UnB.png?fit=897%2C230&ssl=1" alt="" />
      </div>
      <div className="info"> {/*aqui é a outra subdiv que contém toda a parte que o usuário vai interagir*/}
        <div className="cabecalho">
          <h1 className="titulo">Bem-vindo(a) ao <strong>Avalia</strong></h1>
          {/*deixei uma frase pra explicar melhor a funcionalidade do site*/}
          <p className='subtitulo'>Avalie seus professores de forma <strong>anônima, sincera e segura.</strong></p>
          </div>
        <div className="form">
          {/*título de início apresnetando o site e o nome do site*/}
          
          <form>
            <div className="corpo"> 

            
            <div className="infow">
              <h2>Log in</h2> 
              <input type="email" placeholder="E-mail"/> {/*digitar o email do usuário*/}
              <div className="senha"> {/*digitar a senha do usuário*/}
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Senha"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={togglePassword}
                  aria-label="Mostrar ou esconder senha"
                >
                  {showPassword ? (
                    // olho aberto quando o usuário quer ver a senha
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                    </svg>
                  ) : (
                    // olho fechado quando o usuário quer proteger a senha
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                      <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                      <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                    </svg>
                  )}
                </button>
              </div>
              <div className="infob">
              <button type="submit">Entrar</button> {/*o usuário clica no botão para entrar na conta dele*/}
            </div>
            </div>
            
            <p className="linkarpaginas">
                Não tem conta?{' '}
                <Link to="/criar-conta" className="link">
                <strong>Criar conta</strong>
                </Link> {/*aqui eu preferi colocar um texto, que indica a outra página de criar conta, e não um botão em si*/}
              </p>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginA;
