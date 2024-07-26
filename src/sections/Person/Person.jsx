import styles from './PersonStyles.module.css'; 
import heroImg from '../../assets/tanzil2.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Person() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon; 
  const githubIcon = theme === 'light' ? githubLight : githubDark; 
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark; 

  return (
    <section id="person" className={styles.personSection}> 
      <div className={styles.colorModeContainer}>
        <img className={styles.person} src={heroImg} alt="Tanzil Ahmed" /> 
        <img className={styles.colorMode} src={themeIcon} alt="Color icon" onClick={toggleTheme} />
      </div>

      <div className={styles.info}>
        <h1> 
          Tanzil <br />
          Ahmed
        </h1> 
        <h2>Data Science Student</h2>
        <span> 
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>With a passion for machine learning and artificial intelligence.</p> 
        <a href={CV}> 
          <button className={styles.button}>
            Resume
          </button> 
        </a>
      </div>
    </section>
  );
}

export default Person;
