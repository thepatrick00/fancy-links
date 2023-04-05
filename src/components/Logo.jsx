import styled from 'styled-components'

function Logo() {
  return (
    <StyledLogo>
      MoneyDecent<span>.com</span>
    </StyledLogo>
  )
}

const StyledLogo = styled.h3`
  font-size: 1.2rem;
  padding: 1rem;
  padding-left: 5%;
  align-self: center;

  & > span {
    font-size: .7em;
  }
`

export default Logo
