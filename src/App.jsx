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
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Layout from "./pages/layout";
// import Home from "./pages/home";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import Notfound from "./pages/notfound";
// const App=()=>{
//   return(
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout/>}>

//       <Route path="home" element={<Home/>}/>
//       <Route path="about" element={<About/>}/>
//       <Route path="contact" element={<Contact/>}/>
//       <Route path="*" element={<Notfound/>}/>

//       </Route>
//     </Routes>

//     </BrowserRouter>
//     </>
//   )
// }
// export default App;
// ====================================( styling )=================
// const Home=()=>{
//   return(
//       <>
//       <h1 style={{color:"Red", fontFamily:"arial",textDecoration:"underline"}}>welcome to home page</h1>
//       </>
//   )
// }
// export default Home;
// =====================(question of 3 div)=========================
// const Home=()=>{
//   return(
//       <>
//       <div style={{border:"1px solid black",width:"400px",height:"300px",
//         backgroundColor:"blue",color:"black",fontFamily:"arial",fontSize:"larger",borderRadius:"20px"}}>
// <div style={{border:"1px solid black",width:"340px",height:"250px",
//         backgroundColor:"yellow",color:"black",fontFamily:"arial",
//         fontSize:"larger",borderRadius:"20px",margin:"25px",
//         display:"flex" ,alignItems:"center",}}>
//           <div style={{border:"1px solid black",width:"300px",height:"200px",
//         backgroundColor:"orange",color:"black",fontFamily:"arial",
//         fontSize:"larger",borderRadius:"20px",margin:"25px",
//         display:"flex" ,textAlign:"center",lineHeight:"7",marginLeft:"30px"}}>
//           cybrom
//         </div>

//       </div>
//       </div>
//       </>
//   )
// }
// export default Home;
// ===========================================================================
// import Data from "./data";
// import Bhopal from "./bhopal";
// const APP=()=>{
//   return(
//       <>
//       <h1 id="btn">this is data file</h1>
//       <Data/>
//       <Bhopal/>
      
//       </>
//   )
// }
// export default APP;
//=======================================================================================================================================
// import EmpData from "./emp";
// import Design from "./empdesing";

// const App=()=>{
//   const ans=EmpData.map((key)=><Design 
//     no={key.empno} 
//     nm={key.name} 
//     ct={key.city} 
//     fee={key.fees}/>);

//   return(
//     <>
//     <table border="1" width="400">
//       <tr>
//         <th>Number</th>
//         <th>Name</th>
//         <th>City</th>
//         <th>Fees</th>
//       </tr>
//       {ans}
//     </table>
//     </>
//   )
// }
// export default App;
// =======================================================================

// import myimg from "./images/n1.jpeg";
// import myimg1 from "./images/n2.jpeg";
// import myimg2 from "./images/n3.jpeg";
// const APP=()=>{
//   return(
//       <>
//       <h1>this is data file</h1>
//       <img src={myimg} width="300" height="300" />
//       <img src={myimg1} width="300" height="300" />
//       <img src={myimg2} width="300" height="300" />
//       </>
    
      
    
//   )
// }
// export default APP;
// =======================================================
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Carousel from 'react-bootstrap/Carousel';
// import myimg from "./images/n1.jpeg";
// import myimg1 from "./images/n2.jpeg";
// import myimg2 from "./images/n3.jpeg";

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// const APP=()=>{
//   return(
//       <>
//       <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
      
//     <Carousel>
//       <Carousel.Item>
//       <img src={myimg} width="300" height="300" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={myimg1} width="300" height="300" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={myimg2} width="300" height="300" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>


//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

    
//       </>

//   )
// }
// export default APP;