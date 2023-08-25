import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GitHubApiFetch = () => {

    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState([]);

    const getData = async () => {
        try {
            const res = await axios.get("https://api.github.com/users");
            console.log(res)
            setUser(res.data);
            setLoading(false)
        }
        catch (error) {
            setLoading(true);
            console.log(error)

        }
    }

    useEffect(() => {
        getData();
    }, [])

    if (loading) {
        return (
            <h1>loading...</h1>)
    }

    return (
        <>
            <h1>hello</h1>
            <div className=' container-fluid mt-5'>
                <div className=' text-center row'>

                    {user.map((res1) => {
                        return (
                            <div className='main_frame col-10  col-md-4 mt-5' key={res1.id}>
                                <div className='card p-2'>
                                    <div className='image d-flex align-items-center '>
                                        <img src={res1.avatar_url} alt='hello' style={{ height: 150, width: 150 }} />
                                        <h4 className=' mb-0 mt-0 textleft'>
                                            {res1.login}

                                        </h4>
                                        {/* is part ko sahi karna hai */}

                                        {/* <div>
                                            {res1.type}
                                        </div>

                                        <div className=' d-flex flex-column'>
                                            <span className='  articles'> 38</span>
                                        </div>

                                        <div className=' d-flex flex-column'>
                                            <span className='  articles'> 38</span>

                                        </div> 
                                        <div className=' d-flex flex-column'>
                                            <span className=' rating'> 38</span>
                                        </div> */}

                                    </div>


                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div >
        </>
    )
}

export default GitHubApiFetch;

