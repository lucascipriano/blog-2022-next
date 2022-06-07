
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';
export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a className={styles.titleNav} href="/">Lucas <span>Cipriano</span></a>

        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a href="#">Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a href="#">Blog</a>
          </ActiveLink>
          <ActiveLink href="/projetos" activeClassName={styles.active}>
            <a href="#">Projetos</a>
          </ActiveLink>
          <ActiveLink href="/sobre" activeClassName={styles.active}>
            <a href="#">Sobre</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  )
}