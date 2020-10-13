import React from 'react'
import Moment from 'react-moment'

const Meme = ({ title, description, memeImage, date }) => {

    return(
        <div className="meme">
            <div className="memeHeading">
                <div className="memeTitleWrapp">
                    <h1 className="memeTitle">
                        { title }
                    </h1>
                </div>
                <div className="memeDateWrapp">
                    <Moment className="memeDate" format="DD/MM/YYYY" >
                        { date }
                    </Moment>
                </div>
            </div>
            <div className="memeImageWrapp">
                <img src={ memeImage } />
            </div>
            <div className="memeFooter">
                <p className="memeDescription">
                    { description }
                </p>
            </div>
        </div>
    )
}

export default Meme