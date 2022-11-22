import React from 'react'
import Footer from './Partial/Footer'
import Header from './Partial/Header'

const Defaultlayout = ({children}) => {
    return (

        <div className='default-layout'>

            <div className='Header-main'>
                <Header />
            </div>
            <div className='main-main'>
                {children}
            </div>
            <div className='Footer-main'>
                <Footer />
            </div>
        </div>

    )
}

export default Defaultlayout