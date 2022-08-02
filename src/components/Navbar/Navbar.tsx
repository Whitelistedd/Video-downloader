import Link from 'next/link'
import styled from 'styled-components'
import { HighlightedText } from '../HighlightedText/HighlightedText'

const NavItems = ['Youtube', 'TikTok', 'Reddit', 'Twitter']

export const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo>
        <HighlightedText text="Video Downloader" />
      </Logo>
      <NavList>
        {NavItems.map((navItem) => (
          <Link key={navItem} href={navItem.toLocaleLowerCase()}>
            <NavItem>{navItem}</NavItem>
          </Link>
        ))}
      </NavList>
    </Container>
  )
}

const Logo = styled.p`
  font-weight: 800;
  margin-right: -145px;
`

const NavItem = styled.li`
  font-weight: 500;
  color: grey;
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1em;
  margin: 0px auto;
`

const Container = styled.nav`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid grey;
  height: 80px;
`
