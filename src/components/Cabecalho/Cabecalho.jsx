

import Link from 'next/link';
import styles from '../../styles/cabecalho.module.css';

const Header = ({ currentPath }) => {
  const getOppositePath = (path) => {
    switch (path) {
      case '/login':
        return '/cadastro';
      default:
        return '/login';
    }
  };

  const oppositePath = getOppositePath(currentPath);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logoNotreDame.jpeg" alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <Link href={oppositePath}>
          <div>{oppositePath === '/cadastro' ? 'Cadastro' : 'Login'}</div>
        </Link>
        <Link href="/">
          <div>Home</div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
