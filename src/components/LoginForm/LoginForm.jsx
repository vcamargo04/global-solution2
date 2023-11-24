import { useState, useEffect } from 'react';
import styles from '../../styles/login.module.css';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    obterPacientesPreCadastrados();
  }, []);

  const handleLogin = () => {
    const usuariosCadastrados = JSON.parse(localStorage.getItem('pacientes')) || [];
    const usuarioEncontrado = usuariosCadastrados.find(
      (user) => user.email.toLowerCase() === email.toLowerCase() && user.senha === senha
    );

    if (usuarioEncontrado) {
      alert('Login bem-sucedido!');
      onLogin(usuarioEncontrado);

    
      navigateTo('/informacoesPaciente');
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  const obterPacientesPreCadastrados = () => {
    const pacientesPreCadastrados = [
      { nome: "Eduardo", sobrenome: "Silva", cpf: "12345678901", email: "eduardo@gmail.com", senha: "1234" },
      { nome: "Vinicius", sobrenome: "Oliveira", cpf: "23456789012", email: "vinicius@gmail.com", senha: "12345" },
      { nome: "Luiz", sobrenome: "Santos", cpf: "34567890123", email: "luiz@gmail.com", senha: "123456" },
    ];

    localStorage.setItem('pacientes', JSON.stringify(pacientesPreCadastrados));
  };

  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <main>
      <div className={styles.container}>
        <h2 className={styles.title}>Login</h2>
        <form className={styles.form}>
          <label className={styles.label}>Email:</label>
          <input className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" required />

          <label className={styles.label}>Senha:</label>
          <input className={styles.input} type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" required />

          <button className={styles.button} type="button" onClick={handleLogin}>
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginForm;
