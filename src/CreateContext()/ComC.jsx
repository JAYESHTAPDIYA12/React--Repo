import React from 'react';
// import { LastName } from './ComC';
import { FirstName, LastName } from "./CcApp"

const ComC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (
                                    <h1>{fname} {lname}</h1>
                                )
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
        </>
    )
}

export default ComC;
