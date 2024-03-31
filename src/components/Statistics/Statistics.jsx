import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

    function generateRandomColor(){
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal; 
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);   
        return `#${randColor.toUpperCase()}`
    }
    console.log(generateRandomColor()); 

    function Statistics({title, stats}) {
        return (
            <section className={styles.statistics}>
                {title && <h2 className={styles.title}>{title}</h2>}
                <ul className={styles.statList}>
                    {stats.map(stat => (
                        <li key={stat.id} className={styles.item} style={{backgroundColor: generateRandomColor()}}>
                            <span className={styles.label}>{stat.label}</span>
                            <span className={styles.percentage}>{stat.percentage}%</span>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }    

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
};

export default Statistics;