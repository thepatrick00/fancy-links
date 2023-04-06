import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <StyledLogo to="/">
      MoneyDecent<span>.com</span>
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  font-size: 1.2rem;
  padding: 1rem;
  padding-left: 5%;
  align-self: center;
  color: hsl(206deg 39.93% 20.03%);
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;

  & > span {
    font-size: 0.7em;
  }
`

export default Logo
