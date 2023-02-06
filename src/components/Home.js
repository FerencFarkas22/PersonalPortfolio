import { Instagram, YouTube, Facebook } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Home.scss'
import heroImg from '../assets/heroimage.jpg'
import { motion } from "framer-motion"
function Home() {
  var helloworld = "<Szia! Az én nevem />";

  return (


    <div className="hero">
      <div className="rounde1"></div>
      <div className="rounde2"></div>

      <div className="introdution">
        <motion.h2 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}>{helloworld}</motion.h2>
        <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 1 } }} className='name'>Farkas Ferenc</motion.h1>
        <motion.hr initial={{ opacity: 0, }} animate={{ opacity: 1, transition: { duration: 1, delay: 2 } }} />
        <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 2 } }}>Junior frontend fejlesztő!</motion.h3>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 2 } }}>
          1998.08.12.-én születtem Kistarcsán, azóta Monoron élek, középiskola óta életem szerves része Budapest.
          A programozással és azon belül a front-enddel a középiskolai érettségi után találkoztam és azóta az a célkitűzésem
          hogy ebben is dolgozhassak!
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 2 } }} className="links">
          <a target='_blank' rel="noreferrer" href="https://www.instagram.com/ferencfarkas_/"><Instagram /> </a>
          <a target='_blank' rel="noreferrer" href="https://www.youtube.com/channel/UCapmarvGOp-CYkXz9xHm6yg"><YouTube /> </a>
          <a target='_blank' rel="noreferrer" href="https://www.facebook.com/ferenc.farkas.14/"><Facebook /></a>
          <a rel="noreferrer" target='_blank' href="https://github.com/FerencFarkas22"> <GitHubIcon /></a>
          <a rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/ferenc-farkas-0a2363211/"><LinkedInIcon /></a>

        </motion.div>

      </div>

      <div className="bemutatkozas">
        <img src={heroImg} alt="" />
      </div>
      {/*<svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#f7c469" fill-opacity="1" d="M0,224L60,208C120,192,240,160,360,176C480,192,600,256,720,261.3C840,267,960,213,1080,186.7C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
    </div>



  );
}

export default Home;
