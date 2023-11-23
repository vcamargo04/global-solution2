
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/error.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>!OOPSS - 404</h1>
      <div>
        <figure>
          <Image
            src="/Error404.png"
            alt="Imagem de Erro"
            width={750}
            height={600}
            className={styles.errorImage}
          />
        </figure>
      </div>
      <h2>Página não encontrada!</h2>
      <Link href="/">
        <p className={styles.backToHome}>Voltar para a Home</p>
      </Link>
    </div>
  );
}
