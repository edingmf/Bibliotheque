import BookCardDetail from "../../components/BookCardDetail/BookCardDetail";
import Card from "../../components/Card/Card";
import NavBar from "../../components/NavBar/Navbar";
import SideBar from "../../components/SideBar/Sidebar";

const Bibliotheque = () => {
    return ( 
       <>
          <div className="flex  h-screen ">
       <SideBar />
       <div className="flex-1">
       <NavBar/>
       <div className="flex-1">
        <BookCardDetail />
       </div>
       <div className="grid mt-8 grid-cols-3 gap-6 w-full  items-center">
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />

       </div>
       </div>

       </div>
       
       </>
     );
}
 
export default Bibliotheque;