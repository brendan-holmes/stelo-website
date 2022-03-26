import Navbar from './navbar'
import Footer from './footer'
import navbarItems from '../config/navbarItems'
import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <div className='page-container'>
            <div className='brand-title'>
                <Link href="/home"><a><h1>stelo</h1></a></Link>
            </div>
            <div className='main-container'>
                <div className='navbar-area'>
                    <Navbar navbarItems={navbarItems} />
                </div>
                <div className="main-area">
                    <main>{children}</main>
                </div>
            </div>
            <div className='footer'>
                <Footer className='footer'/>
            </div>
        </div>
    )
}