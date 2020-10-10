import React from 'react'

import Sidebar from './Sideabar'
import Content from './Content'

const Main = () => {

    return(
        <div className="main">
           <Sidebar className="sidebar" /> 
            <Content className="content" />
        </div>
    );

}

export default Main