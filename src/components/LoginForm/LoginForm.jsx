
import { useState } from 'react';
import styles from '../../styles/login.module.css';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    const usuariosCadastrados = JSON.parse(localStorage.getItem('pacientes')) || [];
    const usuarioEncontrado = usuariosCadastrados.find((user) => user.email === email && user.senha === senha);

    if (usuarioEncontrado) {
      alert('Login bem-sucedido!');
      onLogin(usuarioEncontrado);
      
      history.push('/informacoesPaciente');
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <main>
      <div className={styles.container}>
        <h2 className={styles.title}>Login</h2>
        <form className={styles.form}>
          <label className={styles.label}>Email:</label>
          <input className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label className={styles.label}>Senha:</label>
          <input className={styles.input} type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />

          <button className={styles.button} type="button" onClick={handleLogin}>
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginForm;
