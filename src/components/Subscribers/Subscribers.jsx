import React, { useEffect, useState } from 'react'
import assets from '../../assets/assets'
import Sidebar from '../global/Sidebar';
import MobileSidebar from '../global/MobileSidebar';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const Subscribers = () => {

    const [openSidebar, setOpenSidebar] = useState(false);
    const [subscribers, setSubscribers] = useState([]);

    const fetchSubscribers = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'subscriptions'));
            const subscribersList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setSubscribers(subscribersList);
            console.log(subscribersList);

        } catch (error) {
            console.log(error);
        }
    }

    const convertToDate = (timestamp) => {
        const milliseconds = timestamp.seconds * 1000;
        const date = new Date(milliseconds);
        return date.toString().slice(0, 15)
    }

    useEffect(() => {
        fetchSubscribers();
    }, [])
    return (
        <div className="flex w-screen h-screen bg-white">
            <Sidebar />
            <div className="relative p-4 overflow-x-scroll bg-white dashboard-content">
                {openSidebar && <MobileSidebar />}
                <div className={`w-full h-20 flex items-center justify-between`}>
                    <img
                        src={assets.Img.Menu_Icon}
                        alt="icon"
                        className="object-contain opacity-100 w-7 h-7 lg:opacity-0"
                        onClick={() => setOpenSidebar(true)}
                    />
                    <div className="flex items-center h-full gap-4 w-fit">
                        <img
                            src={assets.Img.Bg}
                            alt="icon"
                            className="object-cover rounded-full w-7 h-7"
                        />
                        <p className="text-[1.2rem] font-semibold text-blue-600">
                            Test User
                        </p>
                    </div>
                </div>
                <div className={`w-full h-12 flex items-center justify-between`}>
                    <div className="h-full w-fit">
                        <h1 className="font-bold text-[1.5rem]">Subscribers</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className={`w-full h-[calc(100%-3rem)] bg-white mt-4 p-2`}>
                    <div className="flex flex-wrap items-center justify-between w-full h-10 gap-4 mt-8 md:mt-0">
                        <div className="bg-[#edededde] w-[20rem] h-[90%] px-2 flex items-center gap-1 border rounded-md text-white border-blue-200">
                            <img
                                src={assets.Img.Search}
                                alt="search"
                                className="object-contain w-4 h-4"
                            />
                            <input
                                type="text"
                                placeholder="Find"
                                className="flex-1 pl-2 placeholder-gray-400 bg-transparent border-none outline-none text-black"
                            />
                        </div>
                    </div>
                    <div className="min-w-fit w-full h-[calc(100%-4rem)] bg-gray-50 mt-16 md:mt-4 rounded-lg flex flex-col gap-4">
                        <div className="w-full h-10 flex  gap-40 bg-[#f4f4f4] px-4 rounded-t-md">
                            <div className="w-[2rem] h-full flex gap-2 items-center text-black font-medium">
                                <p>SI.No</p>
                            </div>
                            <div className="w-[10rem] h-full flex gap-2 items-center text-black font-medium">
                                <p>Email</p>
                            </div>
                            <div className="w-[10rem] h-full flex gap-2 items-center text-black font-medium">
                                <p>Date</p>
                            </div>
                        </div>
                        {subscribers.map((subscriber, index) => (
                            <div
                                key={subscriber.id}
                                className="flex items-center gap-40 w-full h-12 px-4"
                            >
                                <div className="w-[2rem] h-fit flex gap-2 items-center text-gray-500">
                                    <p>{index + 1}</p>
                                </div>
                                <div className="w-[8rem] h-fit flex gap-2 items-center text-gray-500">
                                    <p>{subscriber.email}</p>
                                </div>
                                <div className="w-[8rem] h-fit flex gap-2 items-center text-gray-500">
                                    <p>{convertToDate(subscriber?.timestamp)}</p>
                                </div>
                                {/* <div className="w-[10rem] h-fit flex gap-2 items-center text-gray-500">
                  <p className="w-full h-full text-[14px] text-justify">
                    {subscriber.title}
                  </p>
                </div>
                <div className="w-[30rem] h-full overflow-hidden flex gap-4 items-center text-gray-500">
                  <p className="w-full h-full text-[12px] text-justify">
                    {subscriber.description}
                  </p>
                </div>
                <div className="w-[8rem] h-full flex gap-2 items-center text-gray-500">
                  <img
                    src={subscriber.authorPicture}
                    alt="icon"
                    className="w-full h-[90%] object-cover rounded-md"
                  />
                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribers