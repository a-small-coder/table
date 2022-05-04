import React from 'react';
import SimpleCard from './SimpleCard';
import './SimpleCard.scss';
import img from '../img/img.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';

function TablePage(props) {

    const data = [
        {
            id: 1,
            img_url: img,
            number: '599777702',
            reference: 'ttps://ss.ge/ru/%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C/%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%D0%B4%D0%B0%D1%87%D0%B0-%D0%B1%D0%B0%D0%BA%D1%83%D1%80%D0%B8%D0%B0%D0%BD%D0%B8-4508715',
            date: '01.05.22 10:10'
        },
        {
            id: 2,
            img_url: img2,
            number: '599777702',
            reference: 'https://ss.ge/ru/%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C/%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F-1-%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%BD%D0%B0%D1%8F-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0-%D0%B1%D0%B0%D0%BA%D1%83%D1%80%D0%B8%D0%B0%D0%BD%D0%B8-4676736',
            date: '01.05.22 10:11'
        },
        {
            id: 3,
            img_url: img3,
            number: '599777704',
            reference: 'https://ss.ge/ru/%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C/%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%D0%B4%D0%B0%D1%87%D0%B0-%D0%B1%D0%B0%D0%BA%D1%83%D1%80%D0%B8%D0%B0%D0%BD%D0%B8-4508758',
            date: '01.05.22 10:13'
        },
        {
            id: 4,
            img_url: img4,
            number: '599763702',
            reference: 'https://ss.ge/ru/%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C/%D0%B0%D1%80%D0%B5%D0%BD%D0%B4%D0%B0--%D0%B7%D0%B0-%D0%B4%D0%B5%D0%BD%D1%8C-%D0%B4%D0%BE%D0%BC-%D0%B1%D0%BE%D1%80%D0%B6%D0%BE%D0%BC%D0%B8-4974075',
            date: '01.05.22 10:13'
        },
        {
            id: 5,
            img_url: img4,
            number: '594627702',
            reference: 'https://ss.ge/ru/%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C/%D0%B0%D1%80%D0%B5%D0%BD%D0%B4%D0%B0--%D0%B7%D0%B0-%D0%B4%D0%B5%D0%BD%D1%8C-%D0%B4%D0%B0%D1%87%D0%B0-%D1%86%D0%B5%D0%BC%D0%B8-4973967',
            date: '01.05.22 10:14'
        },
    ]

    const cards = data.map( el => (
        <SimpleCard key={el.id} data={el}/>
    ))

    return (
        <div className='page _purple'>
            <section className="section">

                <div className='__container'>
                    {cards}
                </div>

            </section>
        </div>
    );
    }

export default TablePage;