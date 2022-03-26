import Link from 'next/link'

const Navbar = (props) => {
    return (
        <ul>
            {
                props.navbarItems.map((button, index) => (
                    button.label!=='' ? <li key={button.path}><Link href={button.path}><a>{button.label}</a></Link></li> : <li key={index}>&nbsp;</li>
                ))
            }
        </ul>
    )
}

export default Navbar