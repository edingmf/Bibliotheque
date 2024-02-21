import './SideBar.css'
import {Link} from 'react-router-dom';
const SideBar = () => {
    return ( 
        <aside className=" h-screen bg-white transition-transform -translate-x-full sm:translate-x-0 w-[320px]" aria-label="Sidebar">
              <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
                  <ul className="space-y-2 font-medium  mt-20">
                    <li className='text-center'>
                        <Link to = "/" className=" flex items-center  p-2 px-5 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full">
                         <span className="relative left-[76px]">Acceuil</span>
                        </Link>
                    </li>


                    <li>
                        <Link to = "/Bibliotheque" className="flex items-center  p-2 px-5 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                          <span className=" whitespace-nowrap relative left-[76px]">Bibliothèque</span>
                        </Link>
                    </li>

                    <li>
                        <Link to = "/Profil" className="flex items-center  p-2 px-5 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                         <span className=" whitespace-nowrap relative left-[76px]">Profil</span>
                        </Link>
                    </li>


                    <li>
                        <Link to = "/About" className="flex items-center p-2 px-5 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span className=" whitespace-nowrap relative left-[76px]">A propos</span>
                        </Link>
                    </li>
                    
                  </ul>
              </div>
            </aside>
     );
}
 
export default SideBar;