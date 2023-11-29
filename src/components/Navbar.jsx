import { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'
import { Links } from '../data'
export default function Navbar() {
  const [nav, setNav] = useState(false)

  const handleClick = () => {
    setNav(!nav)
  }
  return (
    <nav className="bg-emerald-100 ">
      <div className="align-element py-4 flex justify-between items-center h-24 max-w-[1240px] mx-auto">
        <h2 className="text-3xl font-bold">
          Web<span className="text-emerald-600">Dev</span>
        </h2>
        <ul className="hidden md:flex ">
          {Links.map((item) => {
            const { id, href, text } = item
            return (
              <li key={id} className="p-4 hover:text-[#00df9a]">
                <a href={href}>{text}</a>
              </li>
            )
          })}
        </ul>
        <div
          onClick={handleClick}
          className="block md:hidden p-5 bg-emerald-600 text-white rounded-md px-3 py-2  text-sm font-medium"
          aria-current="page"
        >
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
        <ul
          className={
            nav
              ? 'fixed left-0 md:hidden block top-0 w-[60%]  h-[100vh]  bg-[#000300] ease-in-out duration-500 text-white'
              : 'fixed left-[-100%] md:hidden block top-0 w-[60%]  h-[100vh]  bg-[#000300] ease-in-out duration-500 text-white '
          }
        >
          <h2 className="text-3xl font-bold py-8 pl-4">
            Web<span className="text-emerald-600">Dev</span>
          </h2>
          {Links.map((item) => {
            const { id, href, text } = item
            return (
              <li key={id} className="p-4">
                <a href={href}>{text}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
