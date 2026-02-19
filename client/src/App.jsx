import { React,useState } from 'react'

import { Route, Routes } from 'react-router';
import Header from './comps/Header';
import Aside from './comps/Aside';
import Data from './pages/Data';





export default function App() {
  return (
    <div >
        <Header titel='Terror Data System'></Header>
        {/* <Aside></Aside> */}
        <Routes>
            <Route path="/" element={<Data />} />
            {/* <Route path="/SubmitComplaintPage" element={<SubmitComplaintPage />} /> */}
        </Routes>

    </div>
  )
}





