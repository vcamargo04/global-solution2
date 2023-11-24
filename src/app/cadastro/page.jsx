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

  const cadastrar = async () => {
    if (!nome || !sobrenome || !cpf || !email || !senha) {
      alert('Todos os campos são obrigatórios.');
      return;
    }

    if (!/^\d+$/.test(cpf) || cpf.length !== 11) {
      alert('CPF inválido. Deve conter apenas números e ter 11 caracteres.');
      return;
    }

    try {
      const response = await fetch('/api/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, sobrenome, cpf, email, senha }),
      });
  
      if (!response.ok) {
        
        throw new Error(`Erro no servidor: ${response.status}`);
      }
  
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
       
        throw new Error('Resposta do servidor não é um JSON válido');
      }
  
      const data = await response.json();
  
      if (data) {
        alert('Cadastro realizado com sucesso!');
        limparCampos();
      } else {
        alert('Ocorreu um erro durante o cadastro. Tente novamente mais tarde.');
      }
    } catch (error) {
      console.error('Erro no cadastro:', error);
      alert('Ocorreu um erro durante o cadastro. Tente novamente mais tarde.');
    }
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
          <input className={styles.input} type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome" required />

          <label className={styles.label} htmlFor="sobrenome">Sobrenome:</label>
          <input className={styles.input} type="text" id="sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} placeholder="Digite seu sobrenome" required />

          <label className={styles.label} htmlFor="cpf">CPF:</label>
          <input className={styles.input} type="text" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu CPF (11 dígitos)" required />

          <label className={styles.label} htmlFor="email">Email:</label>
          <input className={styles.input} type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" required />

          <label className={styles.label} htmlFor="senha">Senha:</label>
          <input className={styles.input} type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" required />

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
