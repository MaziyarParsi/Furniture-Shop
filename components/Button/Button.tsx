import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: #00234d;
  transition-duration: 500ms;
  color: white;
  font-family: poppins;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 2.5rem;
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
    background-color: #0b4c9a;
    transition-duration: 500ms;
    transform: scale(1.05);
  }
`
interface IButtonProps {
  children: string
  type: 'submit' | 'button' | 'reset'
  handleClick?: () => void
}

const Button: React.FC<IButtonProps> = ({
  children,
  type = 'submit',
  handleClick = () => {},
}) => {
  return (
    <StyledButton type={type} onClick={handleClick}>
      {children}
    </StyledButton>
  )
}

export default Button
