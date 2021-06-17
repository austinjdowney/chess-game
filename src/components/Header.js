
export const Header = ({title}) => {
  return (
    <header>
      <h1 style= {headingStyle}>{title}</h1>
    </header>
  )
}

Header.defaultProps={
  title:'CheckMate',
}

const headingStyle={
  fontSize: '10rem',
  textShadow: '2px  2px 10px black',
  color: '#ffff'
}

 export default Header