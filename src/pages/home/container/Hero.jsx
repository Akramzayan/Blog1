import React from 'react'
import { images } from '../../../constants'

const Hero = () => {
  return (
    <section>
      <div>
        <h1>Read The Most intereresting articles</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nam sapiente minus explicabo optio facilis odit possimus impedit veritatis dolores, ducimus eaque quibusdam mollitia rem porro eveniet nihil officia modi?</p>
      </div>
      <div>
        <div>
            <input type="text" />
        </div>
        <button>Search</button>
      </div>
      <div>
        <span>Popular Taggs:</span>
        <ul>
            <li>Design</li>
            <li>User Experience</li>
            <li>User Interfaces</li>
        </ul>
      </div>
      <div>
        <img src={images} alt="users are reading articles" />
      </div>
    </section>
  )
}

export default Hero
