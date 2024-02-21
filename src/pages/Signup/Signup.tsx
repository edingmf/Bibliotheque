import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <>
            <section className="bg-white w-screen h-screen">
                <div className="flex items-center justify-center h-full">
                    <div className="w-[331px] h-[516px] border left-[555px] top-[254px] flex justify-center items-center">
                    <form className="space-y-4 md:space-y-6" action="#">
                      <div className="w-[252px] h-10">
                          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full" placeholder="Username" required />
                      </div>
                      <div className="w-[252px] h-10">
                          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full" placeholder="Username" required />
                      </div>
                      <div className="w-[252px] h-10">
                          <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full" required />
                      </div>
                      <div className="w-[252px] h-10">
                          <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirme Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full" required />
                      </div>
                      <button type="submit" className="w-[252px] h-10 text-white text-xl font-medium leading-6 tracking-normal text-center font-family: Inter bg-[linear-gradient(92.08deg,#02B9E1_50%,#01CAF7_85.26%)] rounded-full flex justify-center items-center">signup</button>
                      <p className="text-base font-normal leading-[19px] text-[#7A7A7A] tracking-normal text-center font-family: Inter">you have already an account?</p>
                      <Link to = "/Login" className="text-base font-normal leading-[19px] tracking-normal text-center font-family: Inter text-[linear-gradient(87.46deg,#970176_0%,#10D0FB_143.76%)]">Login</Link>
                    </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Signup;
