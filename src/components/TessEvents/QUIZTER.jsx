import Navbar from "./components/Navbar/Navbar"
// import Navigation from "./components/Navigation/Navigation"
// import Quizter from "./components/Quizter/Quizter"
import Demo from "./components/Demo/Demo"
import Data from "../tessData.json"

function QUIZTER() {

  return (
    <>
      <Navbar/>
      <Navigation/>
      {/* <Quizter/> */}
      <Demo obj={Data[0]}/>
      {/* <Demo obj={Data[1]}/> */}
      {/* <Demo obj={Data[2]}/> */}
      {/* <Demo obj={Data[3]}/> */}
      </>
  )
}

export default QUIZTER