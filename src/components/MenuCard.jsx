const MenuCard = ({ id, title }) => {
  return (
    <div className='flex flex-col '>
      <h3 className='font-semibold text-xl text-black/50 border-b-2 mt-2'>{title}</h3>
      <div>
        <ul className='flex flex-col gap-3 text-sm mt-2 font-semibold'>
          {id.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MenuCard
