import { Link,Outlet} from "react-router-dom";
const Layout=()=>{
    return(
        <>
       <Link to="home">Home</Link>
       <Link to="about">ABOUT</Link>
       <Link to="contact">CONTACT</Link>
       {/* <Link to="*">NOTFOUND</Link> */}
       <hr size="4" color="red" />
       <Outlet/>
       <hr size="4" color="red"/>
       www.mycompany.com al right reserved
        </>
    )
}
export default Layout;