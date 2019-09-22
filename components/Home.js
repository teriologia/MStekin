import { Fragment } from 'react';
import Dots from 'react-svg-loader!../static/Dots.svg';
import styles from '../styles/home.less';

const Home = () => {
    return (
        <Fragment>
            <div className={styles.container}>
                <Dots className={styles.dots} />
                <hr className={styles.line} />
                <ul className={styles.links}>
                    <li className={styles.link}>link</li>
                    <li className={styles.link}>link</li>
                    <li className={styles.link}>link</li>
                    <li className={styles.link}>link</li>
                </ul>
                <div className={styles.content} style={{ width: '100%'}}>
                    <div className={styles.menu}>
                        <ul className={styles.list}>
                            <li className={[styles.item, styles.active].join(" ")}>Home</li>
                            <li className={styles.item}>Home</li>
                            <li className={styles.item}>Home</li>
                            <li className={styles.item}>Home</li>
                            <li className={styles.item}>Home</li>
                        </ul>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.hi}>
                            <p className={styles.hello}>Hello, I am</p>
                            <p className={styles.name}>Mehmet Serdar Tekin</p>
                            <p className={styles.web}>Web, Mobile and Game Developer</p>
                            <button class={styles.button}>
                                Contact Me
                            </button>
                        </div>
                        <img src='/static/lastestPP.png' className={styles.image} />
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
}

export default Home