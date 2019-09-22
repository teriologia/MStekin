import styles from '../styles/services.less';

const Services = () => {
    const info = 'I am a Web developer and React-Native developer. I also provide game development and simple 3D modelling services.'
    const infoSecond = 'I love to help those people who want a creative and modern looking website and mobile apps.'
    return (
            <div className={styles.container}>
                <p className={styles.title}> My Services </p>
                <div className={styles.line} />
                <p className={styles.info}>{info}</p>
                <br />
                <p className={styles.infoSecond}>{infoSecond}</p>
            </div>
    )
}

export default Services;