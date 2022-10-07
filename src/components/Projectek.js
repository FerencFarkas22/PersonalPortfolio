import React from 'react'
import '../styles/Projectek.css'
import Pizza from '../assets/PizzaReact.jpg'
import KockaJatek from '../assets/KockaJatek.png'
import harryPotter from '../assets/HarryPotter.png'
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
                        <a rel="noreferrer" target={'_blank'} href="https://github.com/FerencFarkas22/react-pizza/tree/30cbd4158a4662b1093304a9da8df7fcde5d0b55"><button>GitHub <GitHub /></button></a>
                       <a rel="noreferrer" target={'_blank'} href="https://ferencfarkas22.github.io/react-pizza/#/"><button>Weboldal megnyitása</button></a> 
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="project-description">
                    <h1>Kocka Játék Javascriptel</h1>
                    <p>Kocka játék javascriptben! Ha egyest dobsz a pontod nullázódik</p>
                    <div className="buttons">
                        <a rel="noreferrer" target={'_blank'} href="https://github.com/FerencFarkas22/kockajatek"><button>GitHub <GitHub /></button></a>
                        <a rel="noreferrer" target={'_blank'} href="https://ferencfarkas22.github.io/kockajatek/"><button>Weboldal megnyitása</button></a>
                    </div>
                </div>
                <div className="background-image"><img src={KockaJatek} alt="" /></div>
            </div>
            <div className="box">
                <div className="background-image"><img src={harryPotter} alt="" /></div>
                <div className="project-description">
                    <h1>Harry Potter karakter kereső apiból</h1>
                    <p>Harry Potter api használatával kereshető ki karakter</p>
                    <div className="buttons">
                        <a rel="noreferrer" target={'_blank'} href="https://github.com/FerencFarkas22/Harry-Potter-searcher"><button>GitHub <GitHub /></button></a>
                        <a rel="noreferrer" target={'_blank'} href="https://ferencfarkas22.github.io/Harry-Potter-searcher/"><button>Weboldal megnyitása</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projectek