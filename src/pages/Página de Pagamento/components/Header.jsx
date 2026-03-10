import styles from "./Header.module.css";

export function Header() {
  return (
    <div>
      <header className={styles.Header}>
        <h1>VM Softwares</h1>
        <div className={styles.caixaInformations}>
          <h1>Caixa: <span>01</span></h1>
          <h1>Atendente: <span>Vinicius Matos</span></h1>
        </div>
      </header>
    </div>
  )
}