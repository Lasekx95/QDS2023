import Link from "next/link";
// To be seen on all pages

const SideNav = () => {
   return (
      <aside className="w-64" aria-label="Sidebar">
         <div className="px-3 py-4 overflow-y-auto rounde">
            <ul className="space-y-2">
               {/* Seperate Card */}
               <li>
                  <Link href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g className="nc-icon-wrapper" stroke-width="2" fill="#000000" stroke="#000000"><polyline points="6 13 9 7 16 12 22 3" fill="none" stroke="#000000" stroke-linecap="square" stroke-miterlimit="10"></polyline> <line x1="2" y1="21" x2="4.246" y2="16.508" fill="none" stroke="#000000" stroke-linecap="square" stroke-miterlimit="10"></line> <polyline points="2 13 6 13 16 18 22 14" fill="none" stroke-linecap="square" stroke-miterlimit="10" data-color="color-2"></polyline></g></svg>
                     <span className="ml-3">Data</span>
                  </Link>
               </li>
               <li>
                  <Link href="/vehicles" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g className="nc-icon-wrapper" stroke-width="2" fill="#000000" stroke="#000000"><path data-cap="butt" d="M21,10,19.348,2.566A2,2,0,0,0,17.4,1H6.6A2,2,0,0,0,4.652,2.566L3,10" fill="none" stroke="#000000" stroke-miterlimit="10"></path><polyline data-color="color-2" points="6 21 6 23 2 23 2 21" fill="none" stroke="inherit" stroke-linecap="square" stroke-miterlimit="10"></polyline><polyline data-color="color-2" points="22 21 22 23 18 23 18 21" fill="none" stroke="inherit" stroke-linecap="square" stroke-miterlimit="10"></polyline><path d="M23,18H1V12.828a2,2,0,0,1,.586-1.414L3,10H21l1.414,1.414A2,2,0,0,1,23,12.828Z" fill="none" stroke="#000000" stroke-linecap="square" stroke-miterlimit="10"></path><circle data-stroke="none" cx="5" cy="14" r="1" fill="#000000" stroke="none"></circle><circle data-stroke="none" cx="19" cy="14" r="1" fill="#000000" stroke="none"></circle></g></svg>
                     <span className="flex-1 ml-3 whitespace-nowrap">Vehicles</span>
                  </Link>
               </li>
               <li>
                  <Link href="/map" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                     >
                        <g
                           className="nc-icon-wrapper"
                           stroke-width="2"
                           fill="#000000"
                           stroke="#000000"
                        >
                           <polyline
                              data-cap="butt"
                              data-color="color-2"
                              points="5.11 3.425 6.722 4.75 8.367 6.506 7.963 9.246 5.369 10.558 4 11.726 4.667 12.864 5.974 14.264 6.68 16.737 4.717 18.384 4.358 19.912"
                              fill="none"
                              stroke-miterlimit="10"
                           ></polyline>
                           <polyline
                              data-cap="butt"
                              data-color="color-2"
                              points="20.32 4.805 18.843 5.643 15.843 6 13.559 4.162 12.939 2.349 12.127 1"
                              fill="none"
                              stroke-miterlimit="10"
                           ></polyline>
                           <polygon
                              data-color="color-2"
                              points="19.007 12.903 18.079 15.001 17.125 17.152 15.362 18.793 13.023 18.943 11.629 17.253 12.097 15.083 11.694 12.94 13.287 10.943 15.514 10.161 17.872 10.725 19.007 12.903"
                              fill="none"
                              stroke-linecap="square"
                              stroke-miterlimit="10"
                           ></polygon>
                           <circle
                              cx="12"
                              cy="12"
                              r="11"
                              fill="none"
                              stroke="#000000"
                              stroke-linecap="square"
                              stroke-miterlimit="10"
                           ></circle></g></svg>
                     <span className="flex-1 ml-3 whitespace-nowrap">Map</span>
                  </Link>
               </li>
               <li>
                  <Link href="/maintenance" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g className="nc-icon-wrapper" stroke-width="2" fill="#000000" stroke="#000000"><path data-color="color-2" d="M14,19l2.95,2.95A3.5,3.5,0,0,0,21.9,22l.051-.051h0A3.5,3.5,0,0,0,22,17l-.051-.051L20,15" fill="none" stroke-linecap="square" stroke-miterlimit="10"></path><polyline data-cap="butt" data-color="color-2" points="11.491 8.866 4.203 1.578 1.661 4.12 8.779 11.238" fill="none" stroke-miterlimit="10"></polyline><path d="M22.678,4.922,19.6,7.987l-3.6-3.576,3.08-3.066a4.214,4.214,0,0,0-2.259-.307,5.615,5.615,0,0,0-5.133,5.723A4.223,4.223,0,0,0,12,8.4L2.145,17.083a3.419,3.419,0,0,0-.276,4.827c.023.027.047.052.071.078h0a3.286,3.286,0,0,0,4.647.1,3.232,3.232,0,0,0,.281-.3l8.726-9.81a6.717,6.717,0,0,0,2.875.2A5.687,5.687,0,0,0,22.78,8.192,5.088,5.088,0,0,0,22.678,4.922Z" fill="none" stroke="#000000" stroke-linecap="square" stroke-miterlimit="10"></path></g></svg>
                     <span className="flex-1 ml-3 whitespace-nowrap">Vehicle Maintenance</span>
                     <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                  </Link>
               </li>
               <li>
                  <Link href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g className="nc-icon-wrapper" stroke-width="2" fill="#000000" stroke="#000000"><path d="M23,13.5v-3l-3.248-.443a7.927,7.927,0,0,0-.9-2.165l1.984-2.61L18.718,3.161l-2.61,1.984a7.927,7.927,0,0,0-2.165-.9L13.5,1h-3l-.443,3.248a7.927,7.927,0,0,0-2.165.9L5.282,3.161,3.161,5.282l1.984,2.61a7.927,7.927,0,0,0-.9,2.165L1,10.5v3l3.248.443a7.927,7.927,0,0,0,.9,2.165l-1.984,2.61,2.121,2.121,2.61-1.984a7.927,7.927,0,0,0,2.165.9L10.5,23h3l.443-3.248a7.927,7.927,0,0,0,2.165-.9l2.61,1.984,2.121-2.121-1.984-2.61a7.927,7.927,0,0,0,.9-2.165Z" fill="none" stroke="#000000" stroke-linecap="square" stroke-miterlimit="10"></path> <circle data-color="color-2" cx="12" cy="12" r="3" fill="none" stroke-linecap="square" stroke-miterlimit="10"></circle></g></svg>
                     <span className="flex-1 ml-3 whitespace-nowrap">Administration</span>
                  </Link>
               </li>
            </ul>
         </div>
      </aside>
   );
}

export default SideNav;