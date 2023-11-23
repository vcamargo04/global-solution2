

import Link from 'next/link';
import styles from '../styles/home.module.css';
import cardStyles from '../styles/cardStyles.module.css';
import Cabecalho from '../components/Cabecalho/Cabecalho';
import Rodape from '../components/Rodape/Rodape'

const cards = [
  {
    backgroundImage: '/teleDescubra.jpg',
    title: 'O que é Telemedicina?',
    description:
      'A telemedicina utiliza tecnologias de comunicação para proporcionar cuidados médicos à distância.',
  },
  {
    backgroundImage: '/teleVantagens.png',
    title: 'Benefícios da Telemedicina',
    description:
      'Acesso rápido a profissionais de saúde, redução de custos e conveniência para pacientes e médicos.',
  },
  {
    backgroundImage: '/teleInformacoes.jpg',
    title: 'Segurança e Privacidade',
    description:
      'Nossos serviços garantem a segurança e privacidade das informações médicas dos pacientes.',
  },
];

const teleConsultaSections = [
  {
    backgroundImage: '/teleConsulta.jpg',
    title: 'TeleConsulta Agendada',
    description:
      'Agende suas consultas médicas de forma flexível e receba atendimento de qualidade no horário marcado.',
  },
  {
    backgroundImage: '/teleEmergencia.webp',
    title: 'TeleConsulta de Emergência',
    description:
      'Obtenha atendimento médico de emergência imediato através da nossa teleConsulta dedicada a situações urgentes.',
  },
];

const Home = () => {
  return (
    <main>
      <Cabecalho/>
    <div className={styles.container}>
      
      <h1>Bem-vindo à Telemedicina RapidMed</h1>

      <div className={styles.section}>
        <h2>O que é Telemedicina?</h2>
        <p>Descubra como a telemedicina está revolucionando a forma como você recebe cuidados médicos.</p>
      </div>

      <div className={styles.section}>
        <h2>Entenda a Telemedicina</h2>
        <div className={cardStyles.cardContainer}>
          {cards.map((card, index) => (
            <div key={index} className={cardStyles.card}>
              <img src={card.backgroundImage} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2>TeleConsulta</h2>
        <div className={cardStyles.cardContainer}>
          {teleConsultaSections.map((section, index) => (
            <div key={index} className={cardStyles.card}>
              <img src={section.backgroundImage} alt={section.title} />
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Rodape/>
    </main>
  );
};

export default Home;