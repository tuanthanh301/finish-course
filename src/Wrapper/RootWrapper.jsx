import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/layout/Header/Header'
import AirPodsPage from '../pages/AirPodsPage/AirPodsPage'
import HomePage from '../pages/HomePage/HomePage'
import IPadPage from '../pages/IPadPage/IPadPage'
import IPhonePage from '../pages/IPhonePage/IPhonePage'
import MacPage from '../pages/MacPage/MacPage'
import StorePage from '../pages/StorePage/StorePage'
import WatchPage from '../pages/WatchPage/WatchPage'

const RootWrapper = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/mac" element={<MacPage />} />
        <Route path="/ipad" element={<IPadPage />} />
        <Route path="/iphone" element={<IPhonePage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/airpods" element={<AirPodsPage />} />
      </Routes>
    </BrowserRouter >
  )
}

export default RootWrapper