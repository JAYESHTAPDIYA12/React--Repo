import React from 'react'
import { incNumber, decNumber, clearAll, mul, div } from './Actions/Actions';
import { useSelector, useDispatch } from 'react-redux';

const CountByRedux = () => {
    const myState = useSelector((state) => state.ChangeNumber);
    const myState1 = useSelector((state1) => state1.Mul);

    const dispatch = useDispatch();

    return (
        <>
            <div className=' container'>
                <div className=' text-center mt-5 p-5'>
                    <h1>Increment / Decrement Counter</h1>
                    <h4>By Using Redux</h4>
                </div>

                <div className=' '>
                    <div className='d-flex  justify-content-center  '>


                        <button onClick={() => { dispatch(incNumber()) }} >Increment</button>
                        <input type="text" value={myState} />
                        <button onClick={() => { dispatch(decNumber()) }} >Decrement</button>
                        <button onClick={() => { dispatch(clearAll()) }} >Clear All</button>

                    </div>
                </div>


                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className=' '>
                    <h1 className=' text-center mt-5 p-5'>mul / div Counter</h1>

                    <div className='d-flex  justify-content-center  '>


                        <button onClick={() => { dispatch(mul(5)) }} >multilcation</button>
                        <input type="text" value={myState1} />
                        <button onClick={() => { dispatch(div(5)) }} >division</button>
                        <button onClick={() => { dispatch(clearAll()) }} >Clear All</button>

                    </div>
                </div>


            </div>

        </>
    )
}

export default CountByRedux;
