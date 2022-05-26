import styled from 'styled-components'

const StyledNavbar = styled.ul`
  margin-right: 24px;
  @media (max-width: 1360px) {
    margin: 0 auto;
  }
`
const StyledList = styled.li`
  margin: 0 20px;
  font-size: 14px;
  color: #465773;
  display: inline-block;
  &:hover {
    cursor: pointer;
    color: #11284d;
  }
  @media (max-width: 1360px) {
    margin: 0 8px;
  }
  @media (max-width: 698px) {
    display: flex;
    flex-direction: column;
  }
`
export { StyledNavbar, StyledList }
