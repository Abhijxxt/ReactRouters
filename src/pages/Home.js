import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <nav className="bg-slate-800 p-8">
                <Link to={'/about'} className=" m-2 p-2 bg-fuchsia-300">About Button</Link>
                <Link to={'/contact'} className=" m-2 p-2 bg-fuchsia-300">Contact Button</Link>
                <Link to={'/info'} className=" m-2 p-2 bg-fuchsia-300">Info Button</Link>
            </nav>
            <h1 className="text-3xl text-center font-bold my-8">Home</h1>
        </div>
    )
}