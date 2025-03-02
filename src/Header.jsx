import TrollFace from './assets/TrollFace.png';
const Header = () => {
    return(
        <header className="bg-gradient-to-r from-startViolet from-1.18% to-endViolet to-100% w-screen">
            <nav className="flex justify-start items-center px-10 py-7 gap-2.5">
                <img className="w-10 h-10" src={TrollFace} alt="Troll Face" />
                <h1 className="text-[1.8rem] tracking-tighter  font-karla text-white font-bold">Meme Generator</h1>
            </nav>
        </header>
    )
}

export default Header;