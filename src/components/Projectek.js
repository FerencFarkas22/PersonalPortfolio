import React from 'react'
import '../styles/Projectek.scss'
import { GitHub } from '@mui/icons-material'
import { ProjectDatas } from '../datas/ProjectDatas'

const Projectek = () => {
    return (
        <div className="projectContainer">
            <hr className='project-hr' />
            <h1>Projectek</h1>


            {ProjectDatas.map((item) => {
                return(
                    <div key={item.id}
                    className="box">
                    <div className="background-image"><img src={item.image} alt={item.image} /></div>
                    <div className="project-description">
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <div className="buttons">
                            <a rel="noreferrer" target={'_blank'} href={item.githubLink}><button>GitHub <GitHub /></button></a>
                            <a rel="noreferrer" target={'_blank'} href={item.weblink}><button>Weboldal megnyitása</button></a>
                        </div>
                    </div>
                </div>
                )

            })}

        </div>
    )
}

export default Projectek