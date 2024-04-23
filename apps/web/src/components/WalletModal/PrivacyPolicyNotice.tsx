import forkConfig from 'fork-config'
import { Trans } from 'i18n'
import styled from 'styled-components'
import { ExternalLink, ThemedText } from 'theme/components'

const StyledLink = styled(ExternalLink)`
  font-weight: 535;
  color: ${({ theme }) => theme.neutral2};
`

export default function PrivacyPolicyNotice() {
  return forkConfig.settings.privacyPolicyPending ? (
    <ThemedText.BodySmall color="neutral2">
      Swap on Redstone is a fork based on Uniswap V3 Protocol.
    </ThemedText.BodySmall>
  ) : (
    <ThemedText.BodySmall color="neutral2">
      <Trans>By connecting a wallet, you agree to Uniswap Labs&apos;</Trans>{' '}
      <StyledLink href="https://uniswap.org/terms-of-service/">
        <Trans>Terms of Service</Trans>{' '}
      </StyledLink>
      <Trans>and consent to its</Trans>{' '}
      <StyledLink href="https://uniswap.org/privacy-policy">
        <Trans>Privacy Policy.</Trans>
      </StyledLink>
    </ThemedText.BodySmall>
  )
}
