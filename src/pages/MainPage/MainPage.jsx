import styles from './MainPage.module.css';
import Description from '../../components/Description/Description';

const MainPage = () => {
    const data = { title: 'Title', description: 'description' };

    return (
        <div className={styles.mainContainer}>
            <h1>Main Page</h1>
            <Description data={data} />
        </div>
    );
};

export default MainPage;
