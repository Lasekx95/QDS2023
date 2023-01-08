export default function Notify() {
    return (
        <>
            <div id="toast-message-cta" className="w-full max-w-xs p-4 my-5 text-gray-500 bg-white rounded-lg shadow " role="alert">
                <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g className="nc-icon-wrapper" stroke-width="1" fill="#000000" stroke="#000000"><circle data-color="color-2" cx="8" cy="3.5" r="3" fill="none" stroke-linecap="round" stroke-linejoin="round"></circle><path d="M8,9a6.5,6.5,0,0,0-6.5,6.5h13A6.5,6.5,0,0,0,8,9Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                    <div className="ml-3 text-sm font-normal">
                        <span className="mb-1 text-sm font-semibold text-gray-900 ">System</span>
                        <div className="mb-2 text-sm font-normal">
                            Vehicle ID#006 is scheduled for maintenance on 01/06/2023
                        </div>
                        <a href="#" className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Close</a>
                    </div>
                    <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500" data-dismiss-target="#toast-message-cta" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
        </>
    )
}