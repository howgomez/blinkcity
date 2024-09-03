import { Link } from 'react-router-dom'
import { menu } from '../data/menu'
const MenuCard = () => {
  return (
    <div className='flex flex-col animate__backInUp h-screen'>
      <div>
        <ul className='flex flex-col gap-3 text-sm mt-2 font-semibold'>
          {
            menu.map((item) => (
              <div key={item.id}>
                <ul>
                  <div className='flex flex-col '>
                    <h1 className='text-xl font-bold mb-2'>{item.id}</h1>
                    {
                      item.artistas?.map((artista) => (
                        <li key={artista.name}>
                          <Link to={`/artistas/${artista.path}`} className='font-bold opacity-80'>
                            {artista.name}
                          </Link>
                        </li>
                      ))
                    }
                  </div>
                  <div className='flex flex-col gap-1'>
                    {
                      item.entretenimiento?.map((entretenimiento) => (
                        <li key={entretenimiento.name}>
                          <a href={entretenimiento.url} className='font-bold opacity-80' rel='noreferrer' target='_blank'>
                            {entretenimiento.name}
                          </a>
                        </li>
                      ))
                    }
                  </div>
                  <div className='flex flex-col gap-1'>
                    {
                      item.eventos?.map((evento) => (
                        <li key={evento.name}>
                          <a href={evento.url} className='font-bold opacity-80' rel='noreferrer' target='_blank'>
                            {evento.name}
                          </a>
                        </li>
                      ))
                    }
                  </div>

                </ul>
              </div>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default MenuCard
