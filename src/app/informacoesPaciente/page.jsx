"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/informacoesPaciente.module.css';
import Cabecalho from '../../components/Cabecalho/Cabecalho';

const InformacoesPaciente = () => {
  const [rg, setRg] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sexoBiologico, setSexoBiologico] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [grupoSanguineo, setGrupoSanguineo] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [erro, setErro] = useState('');
  const [salvoComSucesso, setSalvoComSucesso] = useState(false);

  const handleSubmit = () => {
    if (
      rg.length !== 9 || 
      rg.trim() === '' ||
      !dataNascimento ||
      sexoBiologico.trim() === '' ||
      escolaridade.trim() === '' ||
      estadoCivil.trim() === '' ||
      grupoSanguineo.trim() === '' ||
      altura.trim() === '' ||
      peso.trim() === ''
    ) {
      setErro('Por favor, preencha todos os campos corretamente.');
      return;
    }

    setSalvoComSucesso(true);
  };

  return (
    <main>
      <Cabecalho />
      <div className={styles.container}>
        <h1 className={styles.title}>Informações do Paciente</h1>
        {erro && <p className={styles.error}>{erro}</p>}
        {salvoComSucesso && <p className={styles.success}>Informações salvas com sucesso!</p>}
        <label>
          RG :
          <input type="text" value={rg} onChange={(e) => setRg(e.target.value)} placeholder="Digite seu RG (9 dígitos)" className={styles.input} />
        </label>
        <label>
          Data de Nascimento:
          <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} placeholder="Selecione a data" className={styles.input} />
        </label>
        <label>
          Sexo Biológico:
          <input type="text" value={sexoBiologico} onChange={(e) => setSexoBiologico(e.target.value)} placeholder="Digite seu sexo biológico" className={styles.input} />
        </label>
        <label>
          Escolaridade:
          <input type="text" value={escolaridade} onChange={(e) => setEscolaridade(e.target.value)} placeholder="Digite sua escolaridade" className={styles.input} />
        </label>
        <label>
          Estado Civil:
          <input type="text" value={estadoCivil} onChange={(e) => setEstadoCivil(e.target.value)} placeholder="Digite seu estado civil" className={styles.input} />
        </label>
        <label>
          Grupo Sanguíneo:
          <input type="text" value={grupoSanguineo} onChange={(e) => setGrupoSanguineo(e.target.value)} placeholder="Digite seu grupo sanguíneo" className={styles.input} />
        </label>
        <label>
          Altura:
          <input type="text" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder="Digite sua altura" className={styles.input} />
        </label>
        <label>
          Peso:
          <input type="text" value={peso} onChange={(e) => setPeso(e.target.value)} placeholder="Digite seu peso" className={styles.input} />
        </label>
        <button className={styles.button} onClick={handleSubmit}>
          Salvar Informações
        </button>
        {salvoComSucesso && (
          <Link href="/agendarConsulta">
            <button className={styles.button}>Ir para Agendar Consulta</button>
          </Link>
        )}
      </div>
    </main>
  );
};

export default InformacoesPaciente;
