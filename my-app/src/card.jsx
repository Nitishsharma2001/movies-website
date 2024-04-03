import React from 'react'
import datas from './data'
import './card.css'
import {useNavigate } from 'react-router-dom';



console.log(datas);


function Card(props) {

    // let navigate = useNavigate();
    const navigate=useNavigate();

    return (
        <div className='parent'>
            {datas.map((data,index) => {
                const { id,ttl, tb, url, des } = data;
                return (
                    console.log(id),
                    <div className='card' key={id} onClick={()=>navigate(`/detail/${id}`)}>
                        <img src={tb} alt="Error occured" className='cardimg' />
                        <div>
                            <h2 className='heading'>{ttl}</h2>
                            <p className='content'>{des}</p>
                        </div>
                    </div>
                );
            })}
        </div>

    )
}
export default Card 