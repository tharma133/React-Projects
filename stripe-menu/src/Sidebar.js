import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <section
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <aside className='sidebar'>
        <button className='btn close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-container'>
          {sublinks.map((link, index) => {
            const { links, page } = link
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link, index) => {
                    return (
                      <a key={index} href={link.url}>
                        {link.icon}
                        {link.label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </section>
  )
}

export default Sidebar
