import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const ImageWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #f5f9ff;
  width: 100%;
  height: 80%;
  padding-right: 2rem;
  padding-bottom: 2rem;
  @media (max-width: 960px) {
    width: 100%;
  }
`

interface ImageWrapperProps {
  source: string
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({ source }) => {
  return (
    <ImageWrapperDiv>
      <Image src={source} alt="product picture" width={240} height={240} />
    </ImageWrapperDiv>
  )
}

export default ImageWrapper
