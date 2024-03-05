import { Link } from "react-router-dom"
export default function About() {
    return (
        <div>
            <nav>
                <Link to={'/'} >Home Button</Link>
                <Link to={'/contact'} >Contact Button</Link>
                <Link to={'/info'} >Info Button</Link>
            </nav>
            <h1>About</h1>
        </div>
    )
}