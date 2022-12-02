import { HighlightedText } from '../Elements/HighlightedText/HighlightedText'
import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/img/logo.png'
import styled from 'styled-components'

export const Navbar: React.FC = () => {
  return (
    <Container>
      <Wrap>
        <Logo>
          <StyledImage src={logo} layout="responsive" />
        </Logo>
      </Wrap>
    </Container>
  )
}

const StyledImage = styled(Image)``

const Logo = styled.p`
  font-weight: 800;
  width: 45px;
`

const NavItem = styled.li`
  font-weight: 500;
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1em;
`

const Wrap = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 80px;
  padding: 1em;
  width: 100%;
  max-width: 1200px;
`

const Container = styled.nav`
  background-color: #050505e4;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
