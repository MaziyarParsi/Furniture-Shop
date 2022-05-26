import styled from 'styled-components'

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 28px;
`
const SingleIconContainer = styled.div`
  margin-right: 20px;
  &:hover {
    cursor: pointer;
  }
  &:last-child {
    margin-right: 0px;
  }
`

export { IconContainer, SingleIconContainer }
