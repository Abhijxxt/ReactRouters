import { Link } from "react-router-dom"
export default function Info() {
    return (
        <div>
            <nav>
                <Link to={'/about'} >About Button</Link>
                <Link to={'/contact'} >Contact Button</Link>
                <Link to={'/'} >Home Button</Link>
            </nav>
            <h1>Information page</h1>
        </div>
    )
}