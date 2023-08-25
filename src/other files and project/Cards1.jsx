import React from 'react';
import './index.css';
import Images1 from './Images1';
import Title1 from './Title1';
import Sname1 from './Sname1';
// import SdataMap from './SdataMap';
// import Sdata from './Sdata;'

const Card = (props) => {
    return (
        <>
            <div className='cards'>
                <div className='card'>
                    {/* <img src={props.img}  alt='myPic' className='card_img'/> */}
                    <Images1 img={props.img} />
                    <div className='card_info'>
                        {/* <h2 className='card_title'>{ props.stitle}</h2> */}
                        <Title1 stitle={props.stitle} />
                        {/* <p className='card_name'>{ props.sname}</p> */}
                        <Sname1 sname={props.sname} />
                        <a href={props.link} className='card_link' target='_'>
                            <button className='button'>Watch Now</button>
                        </a>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Card;
