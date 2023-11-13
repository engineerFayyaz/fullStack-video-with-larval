// Welcome.js 

import React from "react"
import Header1 from "./Header1"

export default function Welcome(){ 
	return( 
		<div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto py-2 shadow-bs1 w-full">
		
			<Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
			<h1 className="pt-4 text-center text-slate 
						font-semibold text-3xl" style={{color:"white"}}> 
				Ourbrand Tv Contact US Page 
			</h1> 
		 
		</div>
	) 
}
