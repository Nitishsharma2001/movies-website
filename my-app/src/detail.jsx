import React from 'react';
import { useParams } from 'react-router-dom';
import datas from './data';
import './detail.css'
function Detail() {
    const { id } = useParams();
    const selectedItem = datas.find(item => item.id === parseInt(id));
    // console.log(selectedItem);
    const { ttl, tb, url, des } = selectedItem;
    return (
        <div>
            <h1 className='dttl'>{ttl}</h1>
            {/* <video src={url}></video> */}
            <div className='dvideo'>
                <iframe src={url}  allow="autoplay" allowFullScreen="allowFullScreen"></iframe>
            </div>
            <h2 className='dttl2'>Description:-</h2>
            <p className='ddes'>{des}</p>
        </div>
    );
}

export default Detail;
