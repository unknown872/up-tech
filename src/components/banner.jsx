import React from 'react'

function Banner() {
    return (
        <div className="bg-indigo-600">
            <div className="max-w-screen-xl mx-auto px-4 py-3 text-white sm:text-center md:px-8">
                <p className="font-medium">
                    We just launched a new version of our library! <a href="javascript:(0)" className="font-semibold underline duration-150 hover:text-indigo-100 inline-flex items-center gap-x-1">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                        </svg>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Banner
