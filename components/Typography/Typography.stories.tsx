import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import H4 from './H4'
import Paragraph from './Paragraph'

export default {
  title: 'Typography',
}

export const DefaultTypography = () => {
  return (
    <>
      <H1>This is sample text</H1>
      <H2>This is sample text</H2>
      <H3>This is sample text</H3>
      <H4>This is sample text</H4>
      <Paragraph>This is sample text</Paragraph>
    </>
  )
}
