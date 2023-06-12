export default function Nav() {
    return(
        <header className=" absolute top-0 left-0 z-10 w-full text-white  px-40 pt-10 ">
            <nav className="flex justify-between ">
                <a href="#">Spiderman</a>
                <div className="flex  gap-8">
                    <a href="#">Download</a>
                    <a href="#">About</a>

                </div>
            </nav>
        </header>
    )
}