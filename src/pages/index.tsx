import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
export default function Home() {
  return (
  <>
     <Head>
      <title>Lucas Cipriano</title>
    </Head>
      <main className={styles.container}>
        <div className={styles.center}>

          <div>
            <Image src="/metwo.png" width={232} height={232} className={styles.roundedFull} objectFit="cover" />
          </div>
          
          <div className={styles.text}>
            <h1>Programação, Linux e opniões</h1>
            <h2>Arch, Go, Front e Mobile.</h2>
          </div>
          <div className={styles.icons}>
            <a href="" className={styles.github} ><Image src="/github.svg" height={30} width={30} /></a>
            <a href="" className={styles.twitter} ><Image src="/twitter.svg" height={30} width={30} /></a>
          </div>
        </div>
      </main>
      <footer className={styles.footer}><p>© 2022 <span>Lucas Cipriano</span> Powered by <span>OWL7</span></p></footer>
    </>
  )
}
