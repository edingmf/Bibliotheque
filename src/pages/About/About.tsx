

import {Link} from 'react-router-dom';
const About = () => {
    return ( 
      <>
        <div className="w-full max-w-[1440px] p-3">
            <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                    <Link to = "/" className="text-black">Accueil</Link>
                    <a href="#" className="text-black">À propos</a>
                    <a href="#" className="text-black">Services</a>
                </div>
                <Link to = "/Signup" className="bg-blue-500 after:bg-blue-500 text-white px-5 py-2 rounded-l-full rounded-r-full">Signup</Link>
            </div>
        </div>
        
        <div className="bg-black text-white p-6 h-[1069px] ">
          <div className="w-[350px] mt-14">
            <h1 className="text-4xl font-bold text-left">La lecture d'abord !</h1>
            <p className="mt-4 text-left">Plus d'une centaine de livres à votre disposition pour vous édifier.</p>
          </div>
        </div>
      </>
      
     );
}
 
export default About;