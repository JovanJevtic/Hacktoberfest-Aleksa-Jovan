import React from 'react'

import Sidebar from './Sidebar'
import Feed from './Feed'

const Content = () => {
    return(
        <div className="content">
            <Sidebar />
            <Feed />
        </div>
    )
}

export default Content