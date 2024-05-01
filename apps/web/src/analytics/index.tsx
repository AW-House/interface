import {
  TraceEvent as AnalyticsEvent,
  Trace as AnalyticsTrace,
  sendAnalyticsEvent as sendAnalyticsTraceEvent,
} from '@uniswap/analytics'
import forkConfig from 'fork-config'
import { atomWithStorage } from 'jotai/utils'
import { memo } from 'react'

export {
  OriginApplication,
  getDeviceId,
  initializeAnalytics,
  useTrace,
  user,
  type ITraceContext,
} from '@uniswap/analytics'

const allowAnalyticsAtomKey = 'allow_analytics'
export const allowAnalyticsAtom = atomWithStorage<boolean>(allowAnalyticsAtomKey, false)

export const Trace = memo((props: React.ComponentProps<typeof AnalyticsTrace>) => {
  if (forkConfig.analytics.allowAnalytics) {
    const allowAnalytics = /*useAtomValue(allowAnalyticsAtom)*/ false
    const shouldLogImpression = allowAnalytics ? props.shouldLogImpression : false

    return <AnalyticsTrace {...props} shouldLogImpression={shouldLogImpression} />
  }
  return <>{props.children}</>
})

Trace.displayName = 'Trace'

export const TraceEvent = memo((props: React.ComponentProps<typeof AnalyticsEvent>) => {
  if (forkConfig.analytics.allowAnalytics) {
    const allowAnalytics = /*useAtomValue(allowAnalyticsAtom)*/ false
    const shouldLogImpression =
      allowAnalytics && forkConfig.analytics.allowAnalytics ? props.shouldLogImpression : false
    return <AnalyticsEvent {...props} shouldLogImpression={shouldLogImpression} />
  }
  return <>{props.children}</>
})

TraceEvent.displayName = 'TraceEvent'

export const sendAnalyticsEvent: typeof sendAnalyticsTraceEvent = (event, properties) => {
  let allowAnalytics = false

  try {
    const value = localStorage.getItem(allowAnalyticsAtomKey)

    if (typeof value === 'string') {
      allowAnalytics = JSON.parse(value)
    }
    // eslint-disable-next-line no-empty
  } catch {}

  if (allowAnalytics && forkConfig.analytics.allowAnalytics) {
    sendAnalyticsTraceEvent(event, properties)
  }
}

// This is only used for initial page load so we can get the user's country
export const sendInitializationEvent: typeof sendAnalyticsTraceEvent = (event, properties) => {
  sendAnalyticsTraceEvent(event, properties)
}
