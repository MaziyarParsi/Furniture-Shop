import { User, Search, ShoppingBag } from 'react-feather'
import { IconContainer, SingleIconContainer } from './styles'

const IconDiv = () => {
  return (
    <IconContainer>
      <SingleIconContainer>
        <Search size={20} color="#56728C" />
      </SingleIconContainer>
      <SingleIconContainer>
        <ShoppingBag size={20} color="#56728C" />
      </SingleIconContainer>
      <SingleIconContainer>
        <User size={20} color="#56728C" />
      </SingleIconContainer>
    </IconContainer>
  )
}

export default IconDiv
