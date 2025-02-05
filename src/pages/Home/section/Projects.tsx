import { Link } from 'react-router-dom'

/* ---------------------------------- image --------------------------------- */
import jincupImg from 'src/assets/Home/Projects/projects_jincup.webp'

import styles from '../styles/projects.module.scss'

const Projects = ({ elRefMain }: { elRefMain?: any }) => {
  return (
    <div className={styles.projects} id='projects' ref={elRefMain}>
      <div className={styles.projectsContainer}>
        <Link to='/projects/jincup-anew' className={styles.projectsImg}>
          <figure>
            <img data-src={jincupImg} alt='Jincup Anew' loading='lazy' width={606} height={539} />
          </figure>
        </Link>

        <Link to='/projects/jincup-anew' className={styles.projectsTitle}>
          <p>Project 001</p>
          <div className={styles.title}>
            <h2>
              jincup <sup>anew</sup>
            </h2>
          </div>
        </Link>

        <div className={styles.projectsDetail}>
          <Link to='/projects/jincup-anew' className={styles.link}>
            detail
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
