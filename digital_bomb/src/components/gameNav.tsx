


const GameNav = () => {
    

    return(
        <nav className="w-full h-20 border-b border-white/10 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-40 bg-[#050505]/80">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-gradient-to-tr from-[#9945FF] to-[#14F195] flex items-center justify-center font-bold text-black">S</div>
                <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    SOL<span className="text-[#9945FF]"> GAMES</span>
                </span>
            </div>
            <div className="flex items-center gap-4">
                <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition">Docs</button>
                <button className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#14F195] hover:text-[#14F195] transition text-sm font-semibold flex items-center gap-2">
                    Connect Wallet
                </button>
            </div>
        </nav>
    )
}

export default GameNav;
