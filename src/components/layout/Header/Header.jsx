import React from 'react'
import { getImagePath } from '../../../helpers/image'
import { HeaderWrapper, ItemHeader } from './headerStyle'

const Header = () => {
    return (
        <HeaderWrapper>
            <ItemHeader to="/" ><img src={getImagePath('appleIcon.svg')} alt="" /></ItemHeader>
            <ItemHeader to="/store">Store</ItemHeader>
            <ItemHeader to="/mac">Mac</ItemHeader>
            <ItemHeader to="/ipad">Ipad</ItemHeader>
            <ItemHeader to="/iphone">Iphone</ItemHeader>
            <ItemHeader to="/watch">Watch</ItemHeader>
            <ItemHeader to="/airpod">AirPods</ItemHeader>
            <ItemHeader>TV & Home</ItemHeader>
            <ItemHeader>Only on Apple</ItemHeader>
            <ItemHeader>Accessories</ItemHeader>
            <ItemHeader>Support</ItemHeader>
            <ItemHeader><img src={getImagePath("search-icon.svg")} alt="" /></ItemHeader>
            <ItemHeader><img src={getImagePath("bag-icon.svg")} alt="" /></ItemHeader>

        </HeaderWrapper>
    )
}

export default Header