import React from 'react'
import Button from '@material-ui/core/Button';
export default function Avenger({person}) {
    console.log(person);
    return (
       
        <div>
        {person.id}  -- {person.name} -- {person.age}
        </div>
    )
}
