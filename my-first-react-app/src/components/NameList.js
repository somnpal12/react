import React from 'react'
import Avenger from './Avenger'


export default function NameList() {
    const avengers = [
        {
            id: 1,
            name: 'Spiderman',
            age: 100
        },
        {
            id: 2,
            name: 'Hulk',
            age: 110
        },
        {
            id: 3,
            name: 'Thor',
            age: 180
        },
    ];

    //const avengers = ['Hulk', 'Spiderman', 'Thor'];
    //const avgList =  avengers.map(name => <div>{name}</div>)
    const avengerList = avengers.map((e,index) => <Avenger key={index} person={e} />)

    return (
        <div>{avengerList}</div>
    )
}
