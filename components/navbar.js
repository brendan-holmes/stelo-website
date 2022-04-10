import Link from 'next/link'
import { useRouter } from 'next/router'
import navbarItems from '../config/navbarItems'

const PageName = () => {
    let router = useRouter()
    let route = router.pathname
    console.log('route: ', route)
    let navbarItem = navbarItems.find(i => i.path === route)
    let pageName = ''
    if (navbarItem) {
        pageName = navbarItems.find(i => i.path === route).label
    }

    return <h1>{pageName}</h1>
}

const Navbar = (props) => {

    return (
        <>
            <PageName />
            <ul>
                {
                    props.navbarItems.map((button, index) => (
                        button.label!=='' ? <li key={button.path}><Link href={button.path}><a>{button.label}</a></Link></li> : <li key={index}>&nbsp;</li>
                    ))
                }
            </ul>
        </>
    )
}

export default Navbar