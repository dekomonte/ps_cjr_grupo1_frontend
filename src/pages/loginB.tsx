import './loginB.css';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LoginB() {
  const [fotoPreview, setFotoPreview] = useState<string>('/img/usuario-de-perfil (1).png');
  const [menuAberto, setMenuAberto] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);
  /*é de um tutorial que eu vi pra colocar a foto de perfil do usuário, seria bom se tivesse como ele remover, mas não sei como fazer
  de qualquer forma, a funcionalidade é escolher uma foto e carregar ela*/

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => { /*função que recebe o parâmetro "e" q é um evento de mudança*/ 
    const file = e.target.files?.[0]; /*acessa os arquivos q o usuário selecionou, atribui a file a foto selecionada*/
    if (!file) return; /*se not file, ou seja se o usuário não colocou arquivo, cancela*/

    const reader = new FileReader(); /*ler o arquivo*/
    reader.onload = () => { /*quando o usuário terminar de colocar o arqyuivo*/
      if (reader.readyState === 2) { /*se essa condição for satisfeita, ele teve sucesso*/
        setFotoPreview(reader.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => { /*basicamente, aq vai garantir q quando o usuário quiser cancelar o evento de colocar foto ele pode só clicar em qualquer lugar da tela e isso vai ser cancelado*/
    function handleClickOutside(event: MouseEvent) {
      if (avatarRef.current && !avatarRef.current.contains(event.target as Node)) {
        setMenuAberto(false);
      }
    }

    if (menuAberto) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuAberto]);

  return (
    <div className="login">
      <div className="imagem">
        <img
          src="https://i0.wp.com/psto.unb.br/wp-content/uploads/2020/07/Marca-UnB.png?fit=897%2C230&ssl=1"
          alt="Logo da UnB"
        />
      </div>

      <div className="info">
        <div className="conteudo-info">
          
        
        <div className="form">
          <form>
            <div className="infow">
              <h2 className="titulo">Cadastro de usuário</h2>
              <div className="box" ref={avatarRef}>
                <div className="avatar" onClick={() => setMenuAberto(!menuAberto)}>
                  <img
                    src={fotoPreview}
                    alt="Avatar Preview"
                  />
                </div>
                {menuAberto && (
                  <div className="menu"> {/*eu nao mudei muito de como tava no código de exemplo*/}
                    <label htmlFor="upload-input">
                      <i className="fa fa-upload"> <span>Upload</span></i>
                    </label>
                    <br />
                    <a href="#"><i className="fa fa-edit"> <span>Editar</span></i></a>
                  </div>
                )}
                <input
                  id="upload-input"
                  type="file"
                  accept="image/*"
                  onChange={handleFotoChange}
                  style={{ display: 'none' }}
                />
              </div>
              {/*acho que é meio autoexplicativo*/}
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="E-mail" />
              <input type="password" placeholder="Senha" />
              <input type="text" placeholder="Curso" />
              <input type="text" placeholder="Departamento" />
            </div>
            <div className="infob">
              <button type="button">Criar conta</button>
            </div>
            <p className="linkarpaginas"> {/*preferi também não colocar dois botões, no exemplo não tem a opção de voltar pra página
            de entrar mas achei que seria uma boa colocar isso*/}
              Já tem conta?{' '}
              <Link to="/" className="link">
              <strong>Entrar</strong>
              </Link>
            </p>
          </form>
        </div>
        </div>
    </div>
    </div>
  );
}

export default LoginB;