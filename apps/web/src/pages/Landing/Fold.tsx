import forkConfig from 'fork-config'
import { forwardRef } from 'react'
import { DirectToDefi } from './sections/DirectToDefi'
import { Footer } from './sections/Footer'
import { NewsletterEtc } from './sections/NewsletterEtc'
import { Stats } from './sections/Stats'

const Fold = forwardRef<HTMLDivElement>(function Fold(props, scrollAnchor) {
  return !forkConfig.landingPage.swapOnly ? (
    <>
      <div ref={scrollAnchor}>
        <DirectToDefi />
      </div>
      <Stats />
      <NewsletterEtc />
      <Footer />
    </>
  ) : (
    <></>
  )
})

export default Fold
