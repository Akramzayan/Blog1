import React from 'react'
import { images } from '../constants'

const Header = () => {
  return (
    <section>
        <header className='container mx-auto px-5'>
            <div>
                <img src={images.Logo} alt="logo" />
            </div>
            <div>
                <ul >
                    <li >
                        <a href="/" >Home</a>
                    </li>
                    <li>
                        <a href="/">Articles</a>
                    </li>
                    <li>
                        <a href="/">Pages</a>
                    </li>
                    <li>
                        <a href="/">Pricing</a>
                    </li>
                    <li>
                        <a href="/">Faq</a>
                    </li>
                </ul>
                <button>Sign in</button>
            </div>
        </header>
    </section>
  )
}

export default Header
