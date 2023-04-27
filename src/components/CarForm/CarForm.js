import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register,handleSubmit,reset,formState:{errors,isValid}}=useForm();
    const save=(car)=>{
        console.log(car);
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text"placeholder={'brand'} {...register('brand')}/>
            <input type="text"placeholder={'price'} {...register('price')}/>
            <input type="text"placeholder={'year'} {...register('year')}/>
            <button>Save</button>

        </form>
    );
};

export {CarForm};