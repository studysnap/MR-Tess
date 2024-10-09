import React from "react"
import './Demo.css'

function Demo(){

    let x = "border-2 border-red-500 box-border"

    return(
        <>
            <div className="main flex justify-center items-center">
                <div className="dataDiv w-[70vw] h-[93vh] pl-[5vh] pt-[5vh] pb-[5vh]">
                    <div className="data bg-[rgba(240,248,255,0.097)] rounded-[18px] border border-black outline outline-red outline-2 h-full relative">
                        <div className="img absolute right-[3%] bottom-[24%]">
                            <img src="https://drive.google.com/thumbnail?id=1NaYHvXnN9483wnNFgmqYCCocoUmXmXpn&sz=w1000" alt="imgg"/>
                        </div>
                        <div className="eventName font-bold text-3xl text-[#9eec4b] m-5">
                            QUIZTER
                        </div>
                        <div className="eventDiscription m-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel soluta illum reiciendis architecto? Provident, magnam assumenda ipsum corrupti velit exercitationem atque neque voluptatibus rerum aspernatur eos ducimus distinctio nostrum omnis in! Dolor, iste suscipit! Nihil at, officia distinctio, facilis corrupti minus, pariatur nisi ea sint hic vitae odit repudiandae debitis itaque sed mollitia tempora adipisci ipsum expedita alias. Debi5is facilis blanditiis cupiditate quae enim assumenda ratione quam saepe iure consectetur similique qui numquam, ullam, perspiciatis est. Delectus temporibus fugiat et!
                        </div>
                        <div className="eventDate m-5">
                            Date : Expected 16 or 17 October
                        </div>
                        <div className="eventTime m-5">
                            Time <img className="inline h-4" src="https://drive.google.com/thumbnail?id=1TGgkU4d42gKTgRzp8Moz4UKd68ppyMnp&sz=w1000" alt="time" />: Expected to last for 3 hours
                        </div>
                        <div className="eventPlace m-5">
                            Place <img className="inline h-5" src="https://drive.google.com/thumbnail?id=1FcoYICzSzyKMwVqfANoBWpk1ujZb7wXb&sz=w1000" alt="location" />: TBA
                        </div>
                        <div className="eventEntryFee m-5">
                            Entry Fee : $$$
                        </div>
                        <div className="eventPrixeMoney m-5">
                            Prize Money : $$$
                        </div>
                        {/* <div className="eventRegiForm border-2 border-red-500 box-border m-5 h-48 flex justify-center items-center">
                            <button type="submit">Register Now</button>
                        </div> */}
                        <div className="eventRegiForm flex justify-center items-center m-5">
                            <div className="btn text-[#071f8b] text-[15px] font-medium bg-[#9eec4b] rounded-[15px] p-2">
                                <button type="button">
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