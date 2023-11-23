"use client";
import { useState } from 'react';
import styles from '../../styles/cadastro.module.css';
import Cabecalho from '../../components/Cabecalho/Cabecalho';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastrar = () => {
    if (!nome || !sobrenome || !cpf || !email || !senha) {
      alert('Todos os campos são obrigatórios.');
      return;
    }

    if (!/^\d+$/.test(cpf) || cpf.length !== 11) {
      alert('CPF inválido. Deve conter apenas números e ter 11 caracteres.');
      return;
    }

    const paciente = {
      nome,
      sobrenome,
      cpf,
      email,
      senha,
    };

    const pacientesCadastrados = JSON.parse(sessionStorage.getItem('pacientes')) || [];
    pacientesCadastrados.push(paciente);
    sessionStorage.setItem('pacientes', JSON.stringify(pacientesCadastrados));

    alert('Cadastro realizado com sucesso!');

    limparCampos();
  };

  const limparCampos = () => {
    setNome('');
    setSobrenome('');
    setCpf('');
    setEmail('');
    setSenha('');
  };

  const currentPath = '/cadastro';

  return (
    <main>
      <Cabecalho currentPath={currentPath} />

      <div className={styles.container}>
        <h1 className={styles.title}>Cadastro de Paciente</h1>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="nome">Nome:</label>
          <input className={styles.input} type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />

          <label className={styles.label} htmlFor="sobrenome">Sobrenome:</label>
          <input className={styles.input} type="text" id="sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />

          <label className={styles.label} htmlFor="cpf">CPF:</label>
          <input className={styles.input} type="text" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} required />

          <label className={styles.label} htmlFor="email">Email:</label>
          <input className={styles.input} type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label className={styles.label} htmlFor="senha">Senha:</label>
          <input className={styles.input} type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />

          <div className={styles.buttonContainer}>
            <button className={styles.button} type="button" onClick={cadastrar}>
              Cadastrar
            </button>
            <button className={styles.button} type="button" onClick={limparCampos}>
              Limpar Dados
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Cadastro;
