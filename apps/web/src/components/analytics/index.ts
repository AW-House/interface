import { InterfaceEventName } from '@uniswap/analytics-events'
import { useWeb3React } from '@web3-react/core'
import { sendAnalyticsEvent } from 'analytics'
import forkConfig from 'fork-config'
import { useEffect } from 'react'
import { UaEventOptions } from 'react-ga4/types/ga4'
import { useLocation } from 'react-router-dom'
import { isMobile } from 'uniswap/src/utils/platform'
import GoogleAnalyticsProvider from './ga'

export function outboundLink({ label }: { label: string }) {
  if (forkConfig.analytics.allowAnalytics) {
    sendAnalyticsEvent(InterfaceEventName.EXTERNAL_LINK_CLICK, {
      label,
    })
  }
}
// GA Part
const googleAnalytics = new GoogleAnalyticsProvider()

const GOOGLE_ANALYTICS_CLIENT_ID_STORAGE_KEY = 'ga_client_id'
const GOOGLE_ANALYTICS_ID: string | undefined = process.env.REACT_APP_GOOGLE_ANALYTICS_ID

const storedClientId = window.localStorage.getItem(GOOGLE_ANALYTICS_CLIENT_ID_STORAGE_KEY)

if (typeof GOOGLE_ANALYTICS_ID === 'string') {
  googleAnalytics.initialize(GOOGLE_ANALYTICS_ID, {
    gaOptions: {
      storage: 'none',
      storeGac: false,
      clientId: storedClientId ?? undefined,
    },
  })

  googleAnalytics.set({
    anonymizeIp: true,
    customBrowserType: !isMobile
      ? 'desktop'
      : 'web3' in window || 'ethereum' in window
      ? 'mobileWeb3'
      : 'mobileRegular',
  })
} else {
  googleAnalytics.initialize('test', { gtagOptions: { debug_mode: true } })
}

export function sendEvent(event: string | UaEventOptions, params?: any) {
  return googleAnalytics.sendEvent(event, params)
}

export function useAnalyticsReporter() {
  const { pathname, search } = useLocation()

  const { chainId } = useWeb3React()
  useEffect(() => {
    // cd1 - custom dimension 1 - chainId
    googleAnalytics.set({ cd1: chainId ?? 0 })
  }, [chainId])

  useEffect(() => {
    googleAnalytics.pageview(`${pathname}${search}`)
  }, [pathname, search])

  useEffect(() => {
    // typed as 'any' in react-ga4 -.-
    googleAnalytics.ga((tracker: any) => {
      if (!tracker) return

      const clientId = tracker.get('clientId')
      window.localStorage.setItem(GOOGLE_ANALYTICS_CLIENT_ID_STORAGE_KEY, clientId)
    })
  }, [])
}
