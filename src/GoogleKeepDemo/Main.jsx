//  yaha pura addition sab hoga and function delcare bhi karenge

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNode from './CreateNode';
import Note from './Note';
import './Google.css';




const Main = () => {
    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {

        setAddItem((preData) => {
            return [...preData, note];
        });
        console.log(note);
    };
    const onDelete = (id) => {
        setAddItem((preData) => {
            return (
                preData.filter((arrElem, index) => {
                    return (index !== id)
                })
            )
        })

    }

    return (
        <>
            <div className='main'>
                <Header />
                <CreateNode
                    passNote={addNote}
                />


                {
                    addItem.map((val, index) => {
                        return (<Note
                            key={index}
                            id={index}
                            title={val.title}
                            content={val.content}
                            delete={onDelete}

                        />)
                    })
                }
                <Footer />
            </div>
        </>
    )
}

export default Main;
