import React from 'react'
import './SubNavbar.css'

function SubNavbar() {
  return (
    <nav className='sub-navbar'>
        <div className='navbar'>

            <ul className='sub-navbar__boards'>
                <li className='sub-navbar__list__board active'>
                    <img src='src\assets\board.svg' width={16} height={15} />
                    <div>
                        <p>Sheet</p>
                        <img src='src\assets\group.svg' />
                    </div>
                </li>

                <li className='sub-navbar__list__board'>
                    <img src='src\assets\white-board.svg'/>
                    <div>
                        <p>Table # 2</p>
                        <img src='src\assets\white-group.svg'/>
                    </div>
                </li>

                <li className='sub-navbar__list__board plus'>
                    <p>+</p>
                </li>
            </ul>

            <ul className='sub-navbar__right-side'>
                <li className='sub-navbar__list__item selected'>
                    <img src='src\assets\table.svg' />
                    <p>Table</p>
                </li>
                <li className='sub-navbar__list__item'>
                    <img src='src\assets\filter.svg' />
                    <p>Filter</p>
                </li>
                <li className='sub-navbar__list__item'>
                    <img src='src\assets\group-right-side.svg' />
                    <p>Group</p>
                </li>
                <li className='sub-navbar__list__item selected'>
                    <img src='src\assets\sort.svg' />
                    <p>Sort</p>
                </li>
                <li className='sub-navbar__list__item'>
                    <img src='src\assets\customize.svg' />
                    <p>Customize</p>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default SubNavbar