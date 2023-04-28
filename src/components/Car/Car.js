import React from 'react';
import {carService} from "../../services/car.service";

const Car = ({car,setCarForUpdate, setChange, change }) => {
    const {id,brand,price,year} = car;

    const deleteCar = async (id) => {
        awainpmt carService.deleteById(id)
        console.log(id)
        setChange(!change)
    }


    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={() => deleteCar(id)}>delete</button>

        </div>
    );
};

export {Car} ;