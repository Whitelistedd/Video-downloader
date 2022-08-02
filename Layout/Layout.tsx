import styled from 'styled-components'
import { LayoutProps } from './Layout.model'

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items:center ;
  justify-content: center ;
`
