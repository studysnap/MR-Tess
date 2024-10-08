import React from "react"
import './Quizter.css'

function Quizter() {

    return (
        <>
            <div className="flex justify-center items-center flex-row">
                <div className="h-[93vh] w-[60vw]">
                    <div className="data bg-[rgba(240,248,255,0.097)] rounded-[20px] border border-black outline outline-red outline-2">
                        <div className="eventName font-bold text-2xl text-[#9eec4b]">
                            QUIZTER
                        </div>
                        <div className="eventDiscription">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel soluta illum reiciendis architecto? Provident, magnam assumenda ipsum corrupti velit exercitationem atque neque voluptatibus rerum aspernatur eos ducimus distinctio nostrum omnis in! Dolor, iste suscipit! Nihil at, officia distinctio, facilis corrupti minus, pariatur nisi ea sint hic vitae odit repudiandae debitis itaque sed mollitia tempora adipisci ipsum expedita alias. Debi5is facilis blanditiis cupiditate quae enim assumenda ratione quam saepe iure consectetur similique qui numquam, ullam, perspiciatis est. Delectus temporibus fugiat et!
                        </div>
                        <div className="eventDate">
                            Date : Expected 16 or 17 October
                        </div>
                        <div className="eventTime">
                            Time : Expected to last for 3 hours
                        </div>
                        <div className="eventPlace">
                            Place : TBA
                        </div>
                        <div className="eventEntryFee">
                            Entry Fee : $$$
                        </div>
                        <div className="eventPrixeMoney">
                            Prize Money : $$$
                        </div>
                        {/* <div className="eventRegiForm border-2 border-red-500 box-border m-5 h-48 flex justify-center items-center">
                            <button type="submit">Register Now</button>
                        </div> */}
                        <div className="eventRegiForm flex justify-center items-center">
                            <div className="btn text-[#071f8b] text-[15px] font-medium bg-[#9eec4b] rounded-[15px] p-2">
                                <button type="button">
                                    Click here to Register
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="gdPoster w-[40vw] h-[93vh] flex justify-center items-center">
                        <div className="poster">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quizter