import Image from "next/image";
import Link from "next/link";
import Counter from "./Counter";
import styles from "./nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.container}>
      <h1 className={styles.logo}>
        <Link href="/">
          <a>
            <Image
              src="/images/logo-cumc.svg"
              height={46}
              width={517}
              alt="Columbia University Irving Medical Center Logo"
            />
          </a>
        </Link>
      </h1>
      <menu className={styles.utils}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Rush</Link>
        </li>
        <li>
          <Counter />
        </li>
      </menu>
    </nav>
  );
}
