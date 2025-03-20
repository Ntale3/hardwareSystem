import { Outlet } from "react-router-dom"
import Nav from "../../Components/Common/Nav";
import Footer from "../../Components/Common/Footer";

const LayOut = () => {
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