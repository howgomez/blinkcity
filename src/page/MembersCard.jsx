const MembersCard = ({ miembro }) => {
  return (
    <section className='bg-white text-black p-2 rounded-lg shadow-3xl'>
      <article className='p-2'>
        <h1 className='text-center text-2xl font-bold my-2 rounded-md '>{miembro.name}</h1>
        <img src={miembro.image} alt={miembro.name} className='w-full h-[500px]  object-cover rounded-lg' />
      </article>
      <ul className='mt-1'>
        <li>Nombre completo: <span className='opacity-85'>{miembro.name_full}</span></li>
        <li>Edad: <span className='opacity-85'>{miembro.age}</span></li>
        <li>Pais: <span className='opacity-85'>{miembro.country}</span></li>
        <li>Fecha de nacimiento: <span className='opacity-85'>{miembro.date}</span></li>
        <li>Posición: <span className='opacity-85'>{miembro.position}</span></li>
      </ul>
    </section>
  )
}

export default MembersCard
