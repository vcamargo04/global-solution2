// components/Header.jsx
import Link from 'next/link';
import styles from '../../styles/cabecalho.module.css';

const Header = ({ currentPath }) => {
  const isHome = currentPath === '/';
  let oppositePath1, oppositePath2, link1Text, link2Text;

  if (currentPath === '/login') {
    oppositePath1 = '/cadastro';
    oppositePath2 = '/';
    link1Text = isHome ? 'Cadastro' : 'Cadastro';
    link2Text = isHome ? 'Home' : 'Home';
  } else if (currentPath === '/cadastro') {
    oppositePath1 = '/login';
    oppositePath2 = '/';
    link1Text = isHome ? 'Login' : 'Login';
    link2Text = isHome ? 'Home' : 'Home';
  } else {
    oppositePath1 = '/login';
    oppositePath2 = '/cadastro';
    link1Text = 'Login';
    link2Text = 'Cadastro';
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logoNotreDame.jpeg" alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <Link href={oppositePath1}>
          <div>{link1Text}</div>
        </Link>
        <Link href={oppositePath2}>
          <div>{link2Text}</div>
        </Link>
        {isHome && (
          <>
            <Link href="/cadastro">
              <div>Cadastro</div>
            </Link>
            <Link href="/login">
              <div>Login</div>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
