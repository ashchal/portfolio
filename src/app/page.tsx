import styles from "./page.module.css";
import Link from "next/link";

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
      {/* <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        <div>X 𝕏</div>
        <div>Linked in</div>
        <div>in</div>
      </div> */}
    </main>
  );
}
