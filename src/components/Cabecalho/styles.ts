import styled from 'styled-components'
import { Container } from '../../style'

export const EstiloCabecalho = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 24px 0;
`

export const ContainerCabecalho = styled(Container)`
  display: flex;
  justify-content: center; /* ou space-between se for ter menu */
  align-items: center;
`
