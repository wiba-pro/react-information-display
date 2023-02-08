import { useState } from 'react'
import './Display.css'

export default function Display() {
    const [user, setUSer] = useState(
        [
            {
                id: '1',
                name: 'john poul',
                interest: ['singing', 'coding', 'cooking'],
                profession: 'catere',
                number: '0809489979'
            },
            {
                id: 2,
                name: 'joy poul',
                interest: ['singing', 'coding', 'cooking'],
                profession: 'catere',
                number: '0809489979'
            },
            {
                id: 3,
                name: 'perry poul',
                interest: ['singing', 'coding', 'cooking'],
                profession: 'catere',
                number: '0809489979'
            },
            {
                id: 4,
                name: ' poul',
                interest: ['singing', 'coding', 'cooking'],
                profession: 'catere',
                number: '0809489979'
            },
            {
                id: 5,
                name: 'john poul',
                interest: ['singing', 'coding', 'cooking'],
                profession: 'catere',
                number: '0809489979'
            },
            {
                id: 6,
                name: 'john poul',
                interest: ['singing', 'coding', 'cooking'],
                profession: 'catere',
                number: '0809489979'
            }
        ]
    )
    function adduser(use) {
        return (
            <div className='dd' key={use.id}>
                <img src={`https://robohash.org/${use.id}`} alt={user.name} />
                <h2>identiry num{use.id}</h2>
                <h2>Full name: {use.name}</h2>
                <p>profession: {use.profession}</p>
                <p>Hubby: {use.interest.join(',')}</p>
            </div>
        )
    }
    return (
        <div className='dis'>
            {user.map(adduser)}
        </div>
    )
}

