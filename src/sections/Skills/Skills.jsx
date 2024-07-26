import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle"> Skills </h1> 
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML"  />
        <SkillList src={checkMarkIcon} skill="CSS"  />
        <SkillList src={checkMarkIcon} skill="Javascript" />
        <SkillList src={checkMarkIcon} skill="Java"  />
        <SkillList src={checkMarkIcon} skill="Python " />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Pandas"  />
        <SkillList src={checkMarkIcon} skill="Scikit-learn"  />
        <SkillList src={checkMarkIcon} skill="PyTorch"  />
        <SkillList src={checkMarkIcon} skill="NumPy" />
        <SkillList src={checkMarkIcon} skill="OpenCV" />
      </div>
      <hr />
    </section>
    
  );
}

export default Skills;
