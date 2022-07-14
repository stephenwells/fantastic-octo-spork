import Image from "next/image";
import styles from "./merchandise.module.scss";

export default function Merchandise({ data }) {
  return (
    <>
      <div className={styles.container}>
        {data.map(({ title, image, description }) => (
          <section className={styles.card} key={title}>
            <h3>{title}</h3>
            <figure>
              <Image src={image} height={340} width={340} alt={title} />
              <figcaption>{description}</figcaption>
            </figure>
            <div className={styles.button}>
              <button type="button" onClick={() => alert("Good Choice!")}>
                I want it.
              </button>
            </div>
          </section>
        ))}
      </div>
      <a className={styles.more}>More Merch!</a>
    </>
  );
}
