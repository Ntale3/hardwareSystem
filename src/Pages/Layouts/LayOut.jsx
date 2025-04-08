import { Outlet} from "react-router-dom"
import Nav from "../../Components/Common/Nav";
import Footer from "../../Components/Common/Footer";
// import { useContext } from "react";
// import { AppContext } from "../../Context/AppContext";

const LayOut = () => {
  // const {token}=useContext(AppContext);
  // const navigate=useNavigate();
  return (
  <div>
 <Nav/>
<main>
    <Outlet/>
</main>

<Footer/>

    </div>
  )
}

export default LayOut