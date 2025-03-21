import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({img,slug}) {
  return (
      <Link to={`/details/${slug}`}>
       <div className="">
        <div className="">
            <img src={img} className='w-40 h-56 rounded-xl object-cover flex-grow ' alt="" />
          </div>
       </div>
      </Link>
  )
}

export default MovieCard;