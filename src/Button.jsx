import React from 'react';
import { useDispatch } from 'react-redux';

const Button = () => {

    const dispatch = useDispatch();
    const handlePlus = ()=>{
dispatch({
    type: 'plus',
    payload: 1
})
    };
    const handleMinus = ()=>{
        dispatch({
            type: 'minus',
            payload: 1
        })
            }
    return (
        <>
        <button onClick={handlePlus}>
            +
        </button>
         <button onClick={handleMinus}>
         -
     </button>
     </>
    );
};

export default Button;