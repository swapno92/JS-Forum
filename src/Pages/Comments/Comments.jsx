// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Comu from "./Comu";
import DashboardNav from "../../Dashboard/DashboardNav/DashboardNav";

const Comments = () => {
    const comments = useLoaderData()
    console.log(comments)

    return (
        <>
        <DashboardNav></DashboardNav>
            <div className=" w-4/5 mx-auto text-center text-xl mt-16">

                {
                    comments.map(com => <Comu key={com._id} com={com}></Comu>)
                }

            </div>
            <div className={`${comments.length > 1 ? 'hidden ' : 'block'} text-5xl text-center text-red-600`}>
                No Posts Comment
            </div>

        </>
    );
};

export default Comments;