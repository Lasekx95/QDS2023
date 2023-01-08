import Link from "next/link";
import Image from "next/image";

const Topnav = () => {
    return (             <nav>
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded-sm dark:bg-white0">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <a href="https://www.teck.com/" className="flex items-center">
        <Image src="/teck-logo.png" width={100} height={150} alt="Teck Logo" />
    </a>
    <span className="self-center text-xl font-semibold border-2 rounded-md whitespace-nowrap mr-96">
        <input type="text" placeholder="Search.."/>
      </span>


      {/* /} add a search button here for the search bar{*/}



    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-violet-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white md:dark:bg-white dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">
            Dashboard</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Support
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Notifications
          </a>
        </li>
        <li>
          <p className="block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0">
            user@teck.com
          </p>
        </li>
      </ul>
    </div>
  </div>
</nav>
</nav>
    )} 
export default Topnav;
