import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Pokemon = () => {

    const [num, setNum] = useState(1);
    const [name, setName] = useState();
    const [moves, setMoves] = useState();
    // const [data, setData] = useState({});

    const getData = async () => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);


        console.log(res.data)

        setName(res.data.name)
        setMoves(res.data.moves.length)

    }
    useEffect(() => {

        getData();
    }, [num]);

    return (
        <>
            <h1>Pokemon</h1>
            <h3>You Have selected {num} value</h3>
            <h3>You Have pokemon {name} value</h3>
            <h3>You Have selected {moves} value</h3>


            <select value={num} onChange={(event) => {
                setNum(event.target.value)
            }}>
                <option value='1'>1</option>
                <option value='25'>25</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'> 5</option>

            </select>

        </>
    )
}

export default Pokemon;
