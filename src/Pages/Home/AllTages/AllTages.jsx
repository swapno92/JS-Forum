// import React from 'react';

const AllTages = () => {
    return (
        <div className="mx-auto w-[95%] rounded-lg bg-yellow-50 pt-6 pb-12 border border-yellow-500">
            <div className="flex justify-center "><button className="btn px-12 bg-indigo-300 border-b-4 border-b-orange-600 mb-8">All Tags Hear</button></div>
            <div className=" rounded-lg flex flex-wrap text-center gap-x-20 lg:gap-y-14 lg:w-2/3 md:gap-y-8 gap-y-4 justify-center mx-auto">
                <div className="border border-teal-700 px-16 py-3 rounded-full bg-teal-100 font-bold">
                    arrow-function
                </div>
                <div className="border border-teal-700 px-16 py-3 rounded-full bg-teal-100 font-bold">
                    async-await
                </div>
                <div className="border border-teal-700 px-16 py-3 rounded-full bg-teal-100 font-bold">
                    fetch-api
                </div>
                <div className="border border-teal-700 px-16 py-3 rounded-full bg-teal-100 font-bold">
                    variable-declarations
                </div>
                <div className="border border-teal-700 px-16 py-3 rounded-full bg-teal-100 font-bold">
                    event-loop
                </div>
            </div>
        </div>

    );
};

export default AllTages;