import React from 'react'
import Dictional from '../common/Dictional/Dictional'
import { CtaLink, HomeSectionWrapper, SectionTitle, SubHead } from './homeSectionStyle'

const HomeSection = () => {
  return (
    <HomeSectionWrapper>
      <SectionTitle>iPhone 14</SectionTitle>
      <SubHead>Big and bigger</SubHead>
      <CtaLink>
        <Dictional text="Learn more" />
        <Dictional text="Buy"/>
      </CtaLink>

    </HomeSectionWrapper>
  )
}

export default HomeSection