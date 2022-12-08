import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../common/colors';
export const HomeSectionWrapper = styled.div`
    width: 100%;
    height: 692px;
    /* background-image: url('https://www.apple.com/v/home/aw/images/heroes/iphone-14/hero_iphone14__fjmsqstr1ceq_largetall.jpg'); */
    background-image:${props => `url(${props?.url})`};
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SectionTitle = styled.h2`
    font-size: 56px;
    font-weight: 600;
    margin-top: 35px;
`
export const SubHead = styled.h3`
    font-size: 28px;
    font-weight:400;
`
export const CtaLink = styled.div`
    display: flex;
    margin-top: 12px;
    div{
        margin-right: 12px;
        margin-left: 12px;
    }
`

