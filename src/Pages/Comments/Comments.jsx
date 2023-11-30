// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Comu from "./Comu";

const Comments = () => {
    const comments = useLoaderData()
    // console.log(comments)
    return (
        <div className=" w-4/5 mx-auto text-center text-xl mt-16">

            {
                comments.map(com => <Comu key={com._id} com={com}></Comu>)
            }
            
        </div>
    );
};

export default Comments;