"use client";
import { useState } from 'react';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import styles from '../../styles/agendarConsulta.module.css';

const AgendarConsulta = () => {
  const [tipoConsulta, setTipoConsulta] = useState('agendada');
  const [especialista, setEspecialista] = useState('clinico');
  const [sintomas, setSintomas] = useState('');
  const [horarioSelecionado, setHorarioSelecionado] = useState({ dia: null, horario: null });
  const [horariosVisiveis, setHorariosVisiveis] = useState({});
  const [mensagem, setMensagem] = useState('');

  const handleTipoConsultaChange = (event) => {
    setTipoConsulta(event.target.value);
  };

  const handleEspecialistaChange = (event) => {
    setEspecialista(event.target.value);
  };

  const handleSintomasChange = (event) => {
    setSintomas(event.target.value);
  };

  const toggleHorariosVisiveis = (dia) => {
    setHorariosVisiveis((prevHorariosVisiveis) => {
      const updatedHorariosVisiveis = { ...prevHorariosVisiveis };
      updatedHorariosVisiveis[dia] = !updatedHorariosVisiveis[dia];
      return updatedHorariosVisiveis;
    });
  };

  const marcarConsulta = (dia, horario) => {
    setHorarioSelecionado({ dia, horario });
  };

  const gerarLinkZoom = () => {
    const codigoZoom = Math.floor(Math.random() * 1000000);
    const novaMensagem = `Link para sua consulta: https://zoom.us/j/${codigoZoom}. Quando der o horário da sua consulta, entre neste link e seu médico o aguardará.`;
    setMensagem(novaMensagem);
  };

  const renderOpcoesConsulta = () => {
    const diasUteis = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
    const diasTodos = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const horariosTodos = Array.from({ length: 24 }, (_, index) => `${index.toString().padStart(2, '0')}:00`);

    const dias = tipoConsulta === 'agendada' ? diasUteis : diasTodos;
    const horarios = tipoConsulta === 'agendada' ? ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'] : horariosTodos;

    return (
      <div className={styles.optionsContainer}>
        <h3>Escolha o dia para a consulta {tipoConsulta === 'agendada' ? 'agendada' : 'de emergência'}:</h3>
        {dias.map((dia) => (
          <div key={dia}>
            <strong onClick={() => toggleHorariosVisiveis(dia)} style={{ cursor: 'pointer' }}>
              {dia} (Clique para ver os horários)
            </strong>
            {horariosVisiveis[dia] && (
              <div className={styles.horariosContainer}>
                {horarios.map((horario) => (
                  <button
                    key={horario}
                    onClick={() => marcarConsulta(dia, horario)}
                    className={`${styles.button} ${horarioSelecionado.dia === dia && horarioSelecionado.horario === horario ? styles.selected : ''}`}
                  >
                    {horario}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        {tipoConsulta === 'emergencia' && (
          <div>
            <label className={styles.labelSelect}>
              Especialista:
              <select value={especialista} onChange={handleEspecialistaChange} className={styles.inputSelect}>
                <option value="clinico">Clínico Geral</option>
                <option value="otorrino">Otorrino</option>
                <option value="cardiologista">Cardiologista</option>
                <option value="nutricionista">Nutricionista</option>
                <option value="dermatologista">Dermatologista</option>
                <option value="psiquiatra">Psiquiatra</option>
                <option value="psicologa">Psicóloga</option>
                <option value="pediatra">Pediatra</option>
              </select>
            </label>
            <label className={styles.label}>
              Descreva seus sintomas:
              <textarea value={sintomas} onChange={handleSintomasChange} rows="4" className={styles.input} />
            </label>
          </div>
        )}

        {tipoConsulta === 'agendada' && (
          <div>
            <label className={styles.labelSelect}>
              Especialista:
              <select value={especialista} onChange={handleEspecialistaChange} className={styles.inputSelect}>
                <option value="clinico">Clínico Geral</option>
                <option value="otorrino">Otorrino</option>
                <option value="cardiologista">Cardiologista</option>
                <option value="nutricionista">Nutricionista</option>
                <option value="dermatologista">Dermatologista</option>
                <option value="psiquiatra">Psiquiatra</option>
                <option value="psicologa">Psicóloga</option>
                <option value="pediatra">Pediatra</option>
              </select>
            </label>
          </div>
        )}
      </div>
    );
  };

  return (
    <main>
      <Cabecalho />
      <div className={styles.container}>
        <h2>Agendar Consulta</h2>
        <label className={styles.label}>
          Tipo de Consulta:
          <select value={tipoConsulta} onChange={handleTipoConsultaChange}>
            <option value="agendada">Consulta Agendada</option>
            <option value="emergencia">Consulta de Emergência</option>
          </select>
        </label>

        {renderOpcoesConsulta()}

        <button className={styles.linkButton} onClick={gerarLinkZoom}>
          Agendar Consulta
        </button>
        {mensagem && <p>{mensagem}</p>}
        {horarioSelecionado.dia && horarioSelecionado.horario && (
          <p>Você selecionou a consulta para {horarioSelecionado.dia} às {horarioSelecionado.horario}.</p>
        )}
      </div>
    </main>
  );
};

export default AgendarConsulta;
