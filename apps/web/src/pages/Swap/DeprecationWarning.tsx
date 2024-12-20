import styled from 'styled-components'
import { ExternalLink } from 'theme/components'

const StyledParagraph = styled.p`
  padding: 16px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.accent2};
  color: ${(props) => props.theme.text};
  font-size: 1.1em;
`

export default function DeprecationWarningBanner() {
  return (
    <StyledParagraph>
      Important notice. Redswap interface will be available until the end of 2024. Swaps on Redstone and Garnet networks
      will be available at{' '}
      <ExternalLink href="https://swap.reservoir.tools/?chain=redstone">Reservoir App</ExternalLink>. Be sure to save
      the new link for future access.
    </StyledParagraph>
  )
}
