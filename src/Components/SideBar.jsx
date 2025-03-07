import React from 'react'

const SideBar = () => {
  return (
   <>
   <div className="fixed inset-y-0 left-0 bg-gray-900 w-64 p-4 z-50 text-gray-300  rounded-sm" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center gap-8  border-b-[1px] pb-8 justify-center">
                            <p><RxCross2 size={30} onClick={sideBarToggle}/></p>
                            <span className="text-2xl font-bold">LOGO</span>
                        </div>
                        <div className="pt-6 border-b-[1px]">
                           <h2 className="font-semibold">Navigation</h2> 
                           <div className="pb-6">
                            <ul className="flex flex-col gap-2">
                                {
                                    pages.map((items,index)=>{
                                        return <li key={index}className="pl-4">
                                            <p>{items.name}</p>
                                        </li>
                                    })
                                }
                            </ul>
                           </div>
                        </div>

                        <div className="pt-6 border-b-[1px]">
                           <h2 className="font-semibold">Our Categories</h2> 
                           <div className="pb-6" >
                            <ul className="flex flex-col gap-2">
                                {
                                    Categ.map((items,index)=>{
                                        return <li key={index}className="pl-4">
                                            <p>{items.title}</p>
                                        </li>
                                    })
                                }
                            </ul>
                           </div>
                        </div>

                        <div className="pt-6 ">
                           <h2 className="font-semibold">Account</h2> 
                           <div className="pb-6" >
                            <ul className="flex flex-col gap-2">
                                {
                                    user.map((items,index)=>{
                                        return <li key={index}className="pl-4">
                                            <p>{items.item}</p>
                                        </li>
                                    })
                                }
                            </ul>
                           </div>
                        </div>



                      </div>
                    
   </>
  )
}

export default SideBar