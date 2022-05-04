import React from 'react';


function SimpleCard(props) {
    return (
        <div className='section__card card'>
            <div className='card__image'>
                <img src={props.data.img_url} className='img-responsive' alt=''/>
            </div>
            <div className='card__data'>
                <div className='data-items-comtainer'>
                    <div className='card__item'>
                        <span className='title'>Номер:</span>
                        <span>{props.data.number}</span>
                    </div>
                    <div className='card__item'>
                    <span className='title'>Ссылка на ресурс:</span>
                        <span><a href={props.data.reference} target="_blank" rel="noreferrer">Перейти</a></span>
                    </div>
                    <div className='card__item'>
                    <span className='title'>Время:</span>
                        <span>{props.data.date}</span>
                    </div>
                </div>
                <div className='button_container'>

                
                <button className='delete_button'>
                    Удалить
                </button>
                </div>
            </div>
            
        </div>
    );
    }

export default SimpleCard;