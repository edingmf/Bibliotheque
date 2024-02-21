
import './NavBar.css';

const NavBar = () => {
  return ( 
    <nav className=" flex justify-between items-center pt-2 pb-2">
    
        <input type="text" className="w-[632px] rounded-l-full rounded-r-full py-3 px-8 bg-gray-200 focus:outline-none focus:ring-0 text-[1.1rem]" placeholder="Recherche"/>

      <div className="flex">
        <img src="" alt="Image" className="rounded-full" />
      </div>
    </nav>


   );
}
 
export default NavBar;