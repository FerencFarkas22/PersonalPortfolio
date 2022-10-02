import React from 'react'
import '../styles/Projectek.css'
import Pizza from '../assets/PizzaReact.jpg'
import KockaJatek from '../assets/KockaJatek.png'
import Pokemon from '../assets/Pokemon.png'
import { GitHub } from '@mui/icons-material'
const Projectek = () => {
    return (
        <div className="projectContainer">
            <hr className='project-hr' />
            <h1>Projectek</h1>
            <div className="box">
                <div className="background-image"><img src={Pizza} alt="" /></div>
                <div className="project-description">
                    <h1>DonCorleone Pizza Reactban</h1>
                    <p>Ez egy több oldalas, Routerrel megoldott React weboldal ami egy pizzázó weboldal felületét jeleníti meg</p>
                    <div className="buttons">
                        <button>GitHub <GitHub /></button><button>Weboldal megnyitása</button>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="project-description">
                    <h1>Kocka Játék Javascriptel</h1>
                    <p>Kocka játék javascriptben! Ha egyest dobsz a pontod nullázódik</p>
                    <div className="buttons">
                        <button>GitHub <GitHub /></button><button>Weboldal megnyitása</button>
                    </div>
                </div>
                <div className="background-image"><img src={KockaJatek} alt="" /></div>
            </div>
            <div className="box">
                <div className="background-image"><img src={Pokemon} alt="" /></div>
                <div className="project-description">
                    <h1>Pokémon kereső apiból</h1>
                    <p>Pokémon api használatával kereshető ki karakter</p>
                    <div className="buttons">
                        <button>GitHub <GitHub /></button><button>Weboldal megnyitása</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projectek