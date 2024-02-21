import NavBar from "../../components/NavBar/Navbar";
import SideBar from "../../components/SideBar/Sidebar";

const Profil = () => {
    return ( 
       <>
          <div className="flex  h-screen ">
       <SideBar />
       <div className="flex-1">
       <NavBar/>
       <div className="flex-1">
        
       </div>
       </div>

       </div>
       </>
       
  
     );
}
 
export default Profil;