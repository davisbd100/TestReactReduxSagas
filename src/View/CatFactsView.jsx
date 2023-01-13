import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCatFact } from '../app/reducers/cats';
import { CatFact } from '../components/CatFact';
import './CatFactsView.css';

export const CatFactsView = () => {
    const dispatch = useDispatch();

    const handleNewCat = () => {
        dispatch(getCatFact());
    }

    const cats = useSelector((state) => state.cats);

    return (
        <div className='cat-facts-view-container'>
            <h1>Aprendiendo sobre gatos</h1>
            <div className='action-container'>
                <button onClick={handleNewCat}>Get another cat!</button>
            </div>
            <div className='cat-facts-container'>
                {cats && cats.catList && (cats.catList.map((fact, index) => (
                    <CatFact key={index} imageUri="https://cataas.com/cat" fact={fact} index={index}/>
                )))}
            </div>
        </div>
    )
}
