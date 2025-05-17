'use client';

import { useEffect, useState } from 'react';
import './LoginPage.css'; // ajuste conforme o caminho real do CSS
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState<boolean>(false);
    const router = useRouter();

  useEffect(() => {
    const loginForm = document.querySelector('.login-form') as HTMLElement | null;
    const signupForm = document.querySelector('.signup-form') as HTMLElement | null;
    const loginBox = document.getElementById('login-box') as HTMLElement | null;
    const signupBox = document.getElementById('signup-box') as HTMLElement | null;
    const formContainer = document.querySelector('.form-container') as HTMLElement | null;

    if (loginForm && signupForm && loginBox && signupBox && formContainer) {
      loginForm.style.display = isSignup ? 'none' : 'flex';
      signupForm.style.display = isSignup ? 'flex' : 'none';
      loginBox.style.display = isSignup ? 'none' : 'block';
      signupBox.style.display = isSignup ? 'block' : 'none';

      formContainer.classList.toggle('signup-active', isSignup);
    }
  }, [isSignup]);

  const toggleForms = (): void => {
    console.log('Trocando de formulário');
    setIsSignup((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="form-container">
        {/* Tela de Login */}
        <div className="login-form">
          <h2>Faça Login</h2>
          <form action="/projetos/CityRun/php/testeLogin.php" method="post">
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="senha" placeholder="Senha" required />
            <button type="submit" name="submit" className="login-btn">
              Login
            </button>
          </form>
          <p>
            <a href="#">
              Esqueceu a senha?
            </a>
          </p>
        </div>

        {/* Tela de Cadastro */}
        <div className="signup-form">
          <h2>Crie sua Conta</h2>
          {/*</div><form action="/projetos/CityRun/php/usuario.php" method="post"></div>*/}
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="senha" placeholder="Senha" required />
            <button type="submit" name="submit" className="signup-btn" onClick={() =>router.push("/criacao")}>
              Cadastrar
            </button>
          {/*</form>*/}
        </div>

        {/* Bloco Verde Animado */}
        <div className="info-box" id="info-box">
          <div id="login-box">
            <h3>Olá, Corredor</h3>
            <p>Insira os seus dados pessoais e comece a sua jornada conosco.</p>
            <button className="toggle-btn" onClick={toggleForms}> Crie uma Conta </button>
          </div>
          <div id="signup-box">
            <h3>Bem-vindo de Volta!</h3>
            <p>Para se manter conectado, faça login com suas informações pessoais.</p>
            <button className="toggle-btn" onClick={toggleForms}>
              Faça Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
