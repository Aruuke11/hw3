
import styles from './Description.module.css';

const Description = ({ data }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.description}>{data.description}</p>
        </div>
    );
};

export default Description;
