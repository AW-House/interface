const forkConfig = {
  localRouting: true,
  graphqlAPISupported: false,
  support: false, //pending URL
  settings: {
    multipleLanguages: false,
    privacyPolicyPending: true,
    socials: true,
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
