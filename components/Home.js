import { Fragment } from 'react';
import Dots from 'react-svg-loader!../static/Dots.svg';

const Home = () => {
    return (
        <Fragment>
            <div className='container'>
                <Dots className='dots' />
                <hr className='line' />
                <ul className='links'>
                    <li className='link'>link</li>
                    <li className='link'>link</li>
                    <li className='link'>link</li>
                    <li className='link'>link</li>
                </ul>
                <div className='content' style={{ width: '100%'}}>
                    <div className='menu'>
                        <ul className='list'>
                            <li className='item active'>Home</li>
                            <li className='item'>Home</li>
                            <li className='item'>Home</li>
                            <li className='item'>Home</li>
                            <li className='item'>Home</li>
                        </ul>
                    </div>
                    <div className='content'>
                        <div className='hi'>
                            <p className='hello'>Hello, I am</p>
                            <p className='name'>Mehmet Serdar Tekin</p>
                            <p className='web'>Web, Mobile and Game Developer</p>
                            <button class='button'>
                                Contact Me
                            </button>
                        </div>
                        <img src='/static/lastestPP.png' className='image' />
                    </div>
                </div>
            </div>
            <style scoped>{`
            .container {
                width: 100%;
                display: flex;
                height: 100vh;
                background: #0E0C38;
            }
            .line {
                border: 1px solid #d1d1d1;
                margin-left: 70px;
            }
            .dots {
                position: absolute;
                left: 300px;
            }
            .menu {
                color: white;
                width: 100%; 
                height: 70px;
                display: flex;
                justify-content: flex-end;
                position: absolute;
                top: 0;
            }
            .list {
                display: flex;
                flex-direction: row;
                padding-right: 100px;
            }
            .item {
                display: flex;
                align-items: flex-end;
                padding: 20px; 
            }
            .active {
                background: #FF0513;
                font-weight: bold;
            }
            .item:Hover {
                background: rgba(255,05,13,0.5);
            }
            .content {
                display: flex;
                flex-grow: 1;
                justify-content: flex-end;
                align-items: flex-end;
                padding-right: 100px;
            }
            .image {
                width: 480px;
                height: auto;
            }
            .hi {
                display: flex;
                width: 50%;
                height: 60vh;
                flex-direction: column;
            }
            .hello {
                color: white;
                letter-spacing: 0.5;
                font-size: 20px;
                letter-spacing: 0.5;
            }
            .name {
                font-size: 60px;
                color: white;
                margin-top: 20px;
                margin-bottom: 15px;
            }
            .web {
                font-size: 20px;
                color: white;
                letter-spacing: 0.5;
            }
            .links {
                position: absolute;
                bottom: 20vh;
                left: 60px;
                background: #0E0C38;
            }
            .link {
                padding-top: 30px;
                padding-bottom: 30px;
                color: white;
            }
            .button {
                background: #FF0513;
                display: block;
                border: 0px;
                margin-top: 60px;
                width: 160px;
                height: 60px;
                border-radius: 6px;
                color: #FFF;
                font-size: 20px;
                transition: .4s ease;
            }
            .button:hover{
                background-color:white;
                color:#FF0513;
            }
            `}</style>
        </Fragment>
    )
}

export default Home