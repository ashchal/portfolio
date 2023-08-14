import styles from "./page.module.css";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 style={{ textAlign: "center" }}>ASHCHAL SHRESTHA</h1>
        <div style={{ zIndex: 20 }}>
          <Link href="https://codniv.com/" legacyBehavior>
            <a target="_blank">
              <p style={{ color: "#8860D0" }}>
                <strong>Codniv</strong>
              </p>
            </a>
          </Link>
        </div>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", gap: 20, zIndex: 20 }}
      >
        <div>
          <Link
            href="https://www.linkedin.com/in/ashchal-shrestha/"
            legacyBehavior
          >
            <a target="_blank">
              <BsLinkedin color="#0A66C2" size={24} />
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}
