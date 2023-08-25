import React, { createContext } from 'react';
import ComA from './ComA';

const FirstName = createContext();
const LastName = createContext();

const CcApp = () => {

    return (
        <>

            <FirstName.Provider value={prompt()}>
                <LastName.Provider value={prompt()}>
                    <ComA />
                </LastName.Provider>
            </FirstName.Provider>

        </>
    )
}

export default CcApp;

export { FirstName, LastName };
