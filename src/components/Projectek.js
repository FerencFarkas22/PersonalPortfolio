import React from 'react'
import '../styles/Projectek.css'
import { GitHub } from '@mui/icons-material'
import { ProjectDatas } from '../datas/ProjectDatas'


const Projectek = () => {

    return (
        <div className="projectContainer">
            <hr className='project-hr' />
            <h1>Projectek</h1>
            {ProjectDatas.map((project, index) => {
                return(
                    <div key={index}
                className="box">
                <div className="background-image"><img src={project.image} alt={project.image} /></div>
                <div className="project-description">
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                    <div className="buttons">
                        <a rel="noreferrer" target={'_blank'} href={project.githubLink}><button>GitHub <GitHub /></button></a>
                        <a rel="noreferrer" target={'_blank'} href={project.weblink}><button>Weboldal megnyitása</button></a>
                    </div>
                </div>
            </div>
                )
            })}
            
        </div>
    )
}

export default Projectek