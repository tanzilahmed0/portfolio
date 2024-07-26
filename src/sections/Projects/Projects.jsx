import styles from './ProjectStyles.module.css';
import basketball from '../../assets/hoop.png';
import ProjectCard from '../../common/ProjectCard';
import headstarter from '../../assets/headstarter.jpeg';
import object from '../../assets/object.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={headstarter} 
        link='https://www.linkedin.com/company/headstarterai/mycompany/' 
        h3="Headstarter AI" 
        p = "Software Engineer Fellow" />
        <ProjectCard src={basketball} 
        link='https://github.com/tanzilahmed0/nbapredictor' 
        h3="NBA Game Predictor" 
        p = "Predicts winner of NBA games" />
        <ProjectCard src={object} 
        link='https://github.com/tanzilahmed0/VCU' 
        h3="Object Detection Model" 
        p = "Detect objects in images" />
      </div>
    </section>
  );
}

export default Projects;
