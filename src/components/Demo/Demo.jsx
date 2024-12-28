import React from "react"
import './Demo.css'
import AdUnit from "../../Ads";

function Demo({obj}){

    function formTab(){
        const url = 'https://docs.google.com/forms/u/0/';
        window.open(url, '_blank');
    }

    return(
        <>
            <div className="main flex justify-center items-center">
                <div className="dataDiv w-[70vw] h-[93vh] pl-[5vh] pt-[5vh] pb-[5vh]">
                    <div className="data bg-[rgba(240,248,255,0.097)] rounded-[18px] border border-black outline outline-red outline-2 h-full relative">
                        <div className="img absolute right-[3%] bottom-[15%] ">
                            <img src={obj.img} alt="eventRelatedPng" />
                        </div>
                        <div className="eventName font-bold text-3xl text-[#9eec4b] m-5">
                            {obj.title}
                            <AdUnit/>
                        </div>
                        <div className="eventDiscription m-5">
                            {obj.discription}
                        </div>
                        <div className="eventDate m-5">
                            Date : {obj.date}
                        </div>
                        <div className="eventTime m-5">
                            Time <img className="inline h-4" src="https://drive.google.com/thumbnail?id=1TGgkU4d42gKTgRzp8Moz4UKd68ppyMnp&sz=w1000" alt="time" /> : {obj.time}
                        </div>
                        <div className="eventLocation m-5">
                            Location <img className="inline h-5" src="https://drive.google.com/thumbnail?id=1FcoYICzSzyKMwVqfANoBWpk1ujZb7wXb&sz=w1000" alt="location" /> : {obj.location}
                        </div>
                        <div className="eventEntryFee m-5">
                            Entry Fee : {obj.entryFees}
                        </div>
                        <div className="eventPrixeMoney m-5 ">
                            Prize Money : <div className="inline-flex flex-col">
                                <div>{obj.firstPrizeMoney}</div>
                                <div>{obj.secondPrizeMoney}</div>
                                <div>{obj.thirdPrizeMoney}</div>
                            </div>
                        </div>
                        {/* <div className="eventRegiForm border-2 border-red-500 box-border m-5 h-48 flex justify-center items-center">
                            <button type="submit">Register Now</button>
                        </div> */}
                        <div className="eventRegiForm flex justify-center items-center absolute bottom-3 left-[50%] translate-x-[-50%]">
                            <div className="btn text-[#071f8b] text-[15px] font-medium bg-[#9eec4b] rounded-[15px] p-2">
                                <button type="button" onClick={formTab}>
                                    Click here to Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="posterDiv w-[30vw] h-[93vh] flex justify-center items-center">
                    <div className="poster">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Demo