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
// import College from "./clg";
// const clg={
// name:"rgpv",
//  seats:45,
//  fees:45000
// }
// const abc=()=>{
//   return(
//     <>
//     <h1 align="center"> welcome to cybrom</h1>
//     <College clgname={clg.name}  seats={clg.seats} fees={clg.fees}/>
//     </>
//   )
// }

// export default abc;
// =================================map=============================================
// const App=()=>{
//   const student=["ramu","sanju","manju","ranju","tanju"];
//   const ans=student.map((key)=>{
//     return(
//       <>
//       <h1>{key}</h1>
//       </>
//     )
//   });
//   return(
// <>

// <h1 align="center"> welcome to cybrom</h1>
// {ans}
// </>
//   )
// }
// export default App;
// =========================================
// const App=()=>{
//   const student=["ramu","sanju","manju","ranju","tanju"];
//   const ans=student.map((key)=>{
//     return(
//       <>
//       <option>{key}</option>
//       </>
//     )
//   });
//   return(
// <>

// <h1 align="center"> welcome to cybrom</h1>
// <select>{ans}</select>
// </>
//   )
// }
// export default App;
// ============================
// const App=()=>{
//   const student=[{
//     "rollno":101,
//     "name":"himanshi",
//     "city":"bhopal",
//     "fees":45000
//   },
//   {
//     "rollno":102,
//     "name":"sanjay",
//     "city":"bhopal",
//     "fees":45000
//   },
//   {
//     "rollno":103,
//     "name":"manisha",
//     "city":"indore",
//     "fees":45000
//   },
//   {
//     "rollno":104,
//     "name":"anmol",
//     "city":"pune",
//     "fees":35000
//   },
//   {
//     "rollno":105,
//     "name":"shivani",
//     "city":"kolar",
//     "fees":55000
//   }
// ];
//   const ans=student.map((key)=>{
//     return(
//       <>
//       <tr>
//         <td>{key.rollno}</td>
//         <td>{key.name}</td>
//         <td>{key.city}</td>
//         <td>{key.fees}</td>
//       </tr>
//       </>
//     )
//   });
//   return(
// <>

// <h1 align="center"> welcome to cybrom</h1>
// <hr/>
// <table border='1' width="400">
//   <tr>
//     <th>rollno</th>
//     <th>name</th>
//     <th>city</th>
//     <th>fees</th>
//   </tr>
//   {ans}
// </table>

// </>
//   )
// }
// export default App;
// ====================================================================================
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Home/>}>
      <Route path="/" element={<About/>}>
      <Route path="/" element={<Contact/>}>
      

      </Route>
    </Routes>

    </BrowserRouter>
    </>
  )
}
export default App;