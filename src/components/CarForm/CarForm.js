import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";

const CarForm = ({setAllCars,carForUpdate}) => {
    const {register,handleSubmit,reset,formState:{errors,isValid},setValue}=useForm({mode:'all'});
    useEffect(() => {
        if (carForUpdate){
            setValue('brand',carForUpdate.brand,{shouldValidate:true})
            setValue('price',carForUpdate.price,{shouldValidate:true})
            setValue('year',carForUpdate.year,{shouldValidate:true})
        }
    },[carForUpdate])
    const save= async (car)=>{
        const {data}=await carService.create(car);
        setAllCars(prev=>!prev)
        reset()


    }
    const update = async (car) =>{

    }
    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text"placeholder={'brand'} {...register('brand',{
                pattern: {value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                message:'Бренд має складатися тільки з літер мін 1 і макс 20 літер'}})} />
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text"placeholder={'price'} {...register('price',{
                valueAsNumber:true,min:{value:0,message:'min 0'},max:{value:1000000}})}/>
            {errors.price&&<span>{errors.price.message}</span>}
            <input type="text"placeholder={'year'} {...register('year',{
                valueAsNumber:true})}/>

            <button>Save</button>


        </form>
    );
};

export {CarForm};