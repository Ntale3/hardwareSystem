
const CategoryComp = ({name,icon}) => {
  return (
    <div 
            
            className={` border-black border rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition hover:scale-105 duration-300 ease-in-out 
                aspect-square hover:bg-red-800 hover:border-none`}
          >
            <div className="text-5xl text-black ">{icon}</div>
            <h3 className="text-lg font-semibold text-black ">
              {name}
            </h3>
          </div>
  )
}

export default CategoryComp