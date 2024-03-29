import SkillsItem from './SkillsTile';
import {SkillList, WantToLearnBetter, Hobbies} from '../datas/SkillList';
import '../styles/Skills.scss'

const Skill = () => {
  return (
    <div  className='skill'>
      <h1 className='title'>Technológiák amiket tudok</h1>
      <div className="menuList">
        {SkillList.map((skill)=>{
          return(
            <SkillsItem 
            name={skill.name}
            image={skill.image}
            />   
          )
        })}
      </div>
      <h2 className='title'>Technológiák amiket fejleszteni szeretnék a közel jövőben</h2>
      <div className="menuList">
        {WantToLearnBetter.map((skill)=>{
          return(
            <SkillsItem 
            name={skill.name}
            image={skill.image}
            />   
          )
        })}
      </div>
      <h2 className='title'>Amikkel szívesen töltöm a szabadidőm</h2>
      <div className="menuList">
        {Hobbies.map((skill)=>{
          return(
            <SkillsItem 
            name={skill.name}
            image={skill.image}
            />
          )})}
      </div>
    </div>
  )
}

export default Skill