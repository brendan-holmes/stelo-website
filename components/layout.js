import Navbar from './navbar'
import Footer from './footer'
import navbarItems from '../config/navbarItems'
import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <>
            <Link href="/home"><a><h1>stelo</h1></a></Link>
            <Navbar navbarItems={navbarItems} />
            <main>{children}</main>
            <Footer/>
        </>
    )
}