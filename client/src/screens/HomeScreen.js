import React, { useEffect, useState } from 'react'

import Meme from '../components/Api/Meme'

const HomeScreen = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetchHome();
    }, [])

    const fetchHome = async () => {
        const data = await fetch(`/api/posts`)
        const items = await data.json()
        setItems(items)
        console.log(items)
    }

    return(
        <div className="feedRoute">
            { items.map(item => (
                <Meme 
                    title = { item.title }
                    memeImage = { item.memeImage }
                    description = { item.description }
                    date = { item.date }
                />
            ))}
        </div>
    )
}

export default HomeScreen