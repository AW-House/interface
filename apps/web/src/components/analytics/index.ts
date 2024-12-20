import { InterfaceEventName } from '@uniswap/analytics-events'
import { sendAnalyticsEvent } from 'analytics'
import forkConfig from 'fork-config'

export function outboundLink({ label }: { label: string }) {
  if (forkConfig.analytics.allowAnalytics) {
    sendAnalyticsEvent(InterfaceEventName.EXTERNAL_LINK_CLICK, {
      label,
    })
  }
}
