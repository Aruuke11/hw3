

import styles from './AboutPage.module.css';
import Description from '../../components/Description/Description';

const AboutPage = () => {
    const data = { title: 'Title 2', description: 'description 2' };

    return (
        <div className={styles.aboutContainer}>
            <h1>About Page</h1>
            <Description data={data} />
        </div>
    );
};

export default AboutPage;
