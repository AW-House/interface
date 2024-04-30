const forkConfig = {
  localRouting: true,
  graphqlAPISupported: false,
  settings: {
    multipleLanguages: false,
    privacyPolicyPending: true,
    socials: false,
    currencyConversion: false,
    showRouting: true,
  },
  landingPage: {
    swapOnly: true,
    tokenCloud: false,
  },
  uniWalletSupported: false,
  analytics: {
    internalExplore: false,
    allowAnalytics: false,
  },
  navbar: {
    showSearchBar: false,
  },
  modal: {
    showBanner: false,
    showFiatModal: false,
    showPrivacyModal: false,
  },
  swapHeader: {
    buy: false,
  },
}

export default forkConfig
