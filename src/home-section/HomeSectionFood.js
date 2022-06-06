import React, { useState, useEffect } from 'react';
import foodData from './HomeSectionFoodData';
import '../syling/homeSectionFood.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HomeSectionFood = () => {

    const [ foods, setFoods ] = useState(foodData);
    const [ index, setIndex ] = useState(0);

    useEffect(() => {
        if(index > foods.length-1){
            return setIndex(0);
        }

        if(index < 0){
            return setIndex(foods.length-1)
        }
        
    }, [index, foods]);


    // useEffect(() => {
    //       let slider = setInterval(() => {
    //         setIndex(index + 1)
    //       }, 3500);
      
    //       return () => {
    //         clearInterval(slider)
    //       }
    //     }, [index])


    return (
        <section className='food-container'>
            {foods.map((food, foodIndex) => {
                const {id, img, title, name, info} = food;

                let nextSlide = 'article-nextSlide';

                if(foodIndex === index){
                    nextSlide = 'article-activeSlide'
                }

                if(foodIndex === 0 && foodIndex === foods.length-1 || foodIndex === index-1){
                    nextSlide = 'article-lastSlide';
                }

                
                return (
                    <article key={id} className={nextSlide} >
                        <img className='food-wrapper__img' src={img} alt='foodImg'/>

                        <div className='food-wrapper__right'>
                            <h6 className='food-wrapper__title'>{title}</h6>
                            <h4 className='food-wrapper__name'>{name}</h4>
                            <p className='food-wrapper__info'>{info}</p>
                            <button className='food-wrapper__btn'>
                                <span>Read More</span>
                                <ArrowForwardIcon/>
                            </button>
                        </div>
                    </article>
                )
            })}
            <div className='food-sliders'>
                <button onClick={() => setIndex(prevIndex => (prevIndex-1))} className='food-sliders__back'>
                    <ArrowBackIcon /> <span>Prev</span>
                </button>
                <button onClick={() => setIndex(prevIndex => (prevIndex+1))} className='food-sliders__forward'>
                    <span>Next</span><ArrowForwardIcon />
                </button>
            </div>
        </section>
    )
};


export default HomeSectionFood;