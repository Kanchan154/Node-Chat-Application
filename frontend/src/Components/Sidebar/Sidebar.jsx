import React from 'react'
import Searchbar from './Searchbar'
import Logout from './Logout'
import Conversations from './Conversations'

const Sidebar = () => {
    return (
        <div className='border-r border-slate-600 p-4 flex flex-col'>
            <Searchbar />
            <div className='divider px-3'></div>
            <Conversations />
            <div className='divider px-3'></div>
            <Logout />
        </div>
    )
}

export default Sidebar