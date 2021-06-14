
export const Header = ({title}) => {
  return (
    <header>
      <h1 style= {headingStyle}>{title}</h1>
    </header>
  )
}

Header.defaultProps={
  title:'King Me',
}

const headingStyle={
  textShadow: '2px 2px 2px black',
  
}

 export default Header