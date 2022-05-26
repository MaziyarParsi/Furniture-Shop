import styled from 'styled-components'

const BreadCrumbDiv = styled.div`
  background-color: 'red';
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 1rem;
  & p {
    font-size: 13px;
    color: #6f86a0;
  }
  & p.productName {
    font-size: 12px;
    color: #00234d;
    font-weight: bold;
  }
`

interface BreadCrumbProps {
  children: string
  name: string
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ children, name }) => {
  return (
    <BreadCrumbDiv>
      <p>{children}</p>
      <p className="productName">{name}</p>
    </BreadCrumbDiv>
  )
}

export default BreadCrumb
