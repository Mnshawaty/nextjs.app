import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        صنع بكل حب من BringAPK <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} />  M.nshawaty
      </footer>
    </>
  )
}
