const SkillsItem = ({ name, image }) => {

return (
    <div className='skillItem'>
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
    </div>
  )
}

export default SkillsItem