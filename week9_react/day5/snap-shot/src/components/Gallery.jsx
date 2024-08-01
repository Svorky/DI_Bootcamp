import React from 'react';
import pexel from '../config/pexel.js'
import { useState } from 'react';
import Image from './Image.jsx';
import { useEffect } from 'react';

const Gallery = (props) => {
    const { title } = props;
    const [images, setimages] = useState([])
    const [next, setNext] = useState('')

    useEffect(()=>{
        getPhotos(title)
    },[title])

    const getPhotos = async (title) => {
        if(title){
            const images = await pexel.get(title)
            setimages(images.photos)
            setNext(images.next_page)
        } else {
            setimages([])
            setNext('')
        }
    }

    const nextPage = async () => {
        const page = await pexel.nextPage(next)
        setimages(images.concat(page.photos))
        setNext(page.next_page)
    }

    return (<section>
        <h2>{ title } Pictures</h2>
        <div className='photos'>
            {
                images.map(
                    img => <Image key={img.id} {...img} />
                )
            }
        </div>
        {next && <button className='next-button' onClick={nextPage}>Show more</button>}
    </section>
    );
};

export default Gallery;