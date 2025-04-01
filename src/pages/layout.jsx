import { Link,outlet} from "react-router-dom";
const Layout=()=>{
    return(
        <>
       <Link to="Home">home</Link>
       <Link to="about"></Link>
       <Link to="contact">CONTACT</Link>
       <hr size="4" color="red" />
       <outlet/>
       <hr size="4" color="red"/>
       www.mycompany.com al right reserved
        </>
    )
}
export default Layout;