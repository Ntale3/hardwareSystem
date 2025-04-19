

const ItemCheck = ({item}) => {
  return (
    <div className="justify-between  shadow-sm">
       <div className='flex gap-4 items-center justify-between'>        
            <img src={item?.image} alt={item?.name} className="w-16 h-16 rounded-xl" />
                <div><p>{item?.title}</p></div>
                <div>{item?.price}</div>
            </div>
            </div>
            
  )
}

export default ItemCheck