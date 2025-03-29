// ====================expression js=========================================
// const name="himanshi"
// const age=20
// const salary=34000

// const App=()=>{
//   return(
//     <p>welcome to react i am {name} my age is {age} my salary {salary*2}</p>
//   )
// }

// export default App;
// ==================================inserting a large block of element==================================
// const subject=<ul>
//   <li>php</li>
//   <li>java</li>
//   <li>oracle</li>
//   <li>sql</li>
// </ul>
// const App=()=>{
//   return(
//     <h1>my subject :{subject}</h1>
//   )
// }
// export default App;

// =============================one top level element=====================================================

// const App=()=>{
//      return(
//       <>
//        <h1>welcome to react</h1>
//        <h1>i am developer</h1>
//       </>
//      )
//    }
//    export default App;
  //  =============================
  // const App=()=>{
  //   return(
  //    <>
  //     enter name:<input type="text"/>
  //     <br/>
  //     enter city:<input type="text"/>
  //    </>
  //   )
  // }
  // export default App;
  // ======================================
  // import Cybrom from "./cybrom";


  // const App=()=>{
  //   return(
  //    <>
  //    <h1>welcome  to cybrom</h1>
  //    < Cybrom/>           
  //    </>
  //   )
  // }
  // export default App;
  // ==================================
  // import Header from "./header";
  // import Data from "./data";
  // import Footer from "./footer";
  // const App=()=>{
  //      return(
  //      <>
  //       <h1>welcome  to cybrom</h1>
  //       < Header/>  
  //       <Data/>  
  //       <Footer/>       
  //       </>
  //      )
  //   }
  //    export default App;
    // ====================================component===================================
    // import Student from "./student"
    // const abc=()=>{
    //   return(
    //     <>
    //     <h1>welcome to react class</h1>
    //     <Student nm="himanshi" city="bhopal" sub="java"/>
      
    //     </>
    //   )
    // }
    // export default abc;
import College from "./clg";
const clg={
name:"rgpv",
 seats:45,
 fees:45000
}
const abc=()=>{
  return(
    <>
    <h1 align="center"> welcome to cybrom</h1>
    <College clgname={clg.name}  seats={clg.seats} fees={clg.fees}/>
    </>
  )
}

export default abc;
