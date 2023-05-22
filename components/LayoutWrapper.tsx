import { Inter } from '@next/font/google'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { ReactNode } from 'react'
import Header from './Header'

interface Props {
  children: ReactNode
}

const inter = Inter({
  subsets: ['latin'],
})

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div
        // className={`${inter.className} mx-auto flex max-w-2xl flex-col px-4 sm:px-6 xl:max-w-4xl xl:px-0`}
        className={`${inter.className} container mx-auto px-10`}
      >
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
