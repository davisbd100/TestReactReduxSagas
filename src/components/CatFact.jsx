import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCatFact } from '../app/reducers/cats';
import './CatFact.css'

export const CatFact = ({imageUri, fact, index}) => {
    const dispatch = useDispatch();

    const handleRemoveCat = () => {
        dispatch(removeCatFact(index));
    }
    
    return (
        <div className='cat-fact-container'>
            <img className='cat-fact-image' src={imageUri} />
            <h4 className='cat-fact-title'>{fact}</h4>
            <button onClick={handleRemoveCat}>Remove this cat</button>
        </div>
    )
}
