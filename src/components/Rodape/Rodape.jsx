import React from 'react';
import Link from 'next/link';
import styles from '../../styles/rodape.module.css'

const MembersSection = () => {
  const members = [
    { name: "Eduardo de Toledo Violante ", rm: "RM 550364 ", cargo:"Desenvolvimento de banco de Dados e Java" },
    { name: "Gabriel de Andrade Baltazar", rm: "RM 550870" , cargo:"Desenvolvimento de ChatBot"},
    { name: "Luiz Felipe Camargo Prendin", rm: "RM 552475" ,cargo:"Desenvolvimento de Python e Java"},
    { name: "Pedro Gomes Fernandes", rm: "RM 551480" ,cargo:"Desenvolvimento de Software Desing"},
    { name: "Vinícius De Araújo Camargo", rm: "RM 99494" ,cargo:"Desenvolvimento de Web Responsive"},
  ];

  const githubRepositoryLink = "https://github.com/vcamargo04/global-solution2";

  return (
    <section className={styles.membersSection}>
      <div className={styles.membersBox}>
        <h2>Integrantes</h2>
        <p>Equipe de desenvolvimento do projeto</p>

        <ul className={styles.membersCards}>
          {members.map((member, index) => (
            <li className={styles.card} key={index}>
              <h4>{member.name}</h4>
              <p>{member.rm}</p>
              <p>{member.cargo}</p>
            </li>
          ))}
        </ul>

        <Link target='_blank' href={githubRepositoryLink} passHref>
          <button className={styles.button}  > Abrir repositório</button>
        </Link>
      </div>
    </section>
  );
};

export default MembersSection;