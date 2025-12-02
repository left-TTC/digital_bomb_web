import { useSolanaWallet } from "@/provider/useSolanaWallet";
import { useTranslation } from "react-i18next";



const GameNav = () => {
    
    const {t} = useTranslation()
    const {wallets, select, connect, connected} = useSolanaWallet()

    const connectClink = async() => {
        console.log("connect phantom")
        const phantom = wallets.find(wallet => wallet.adapter.name === "Phantom");
        
        if(!phantom){
            console.log("can't connect to Phantom")
        }else{
            try{
                select(phantom.adapter.name)
                await connect()
            }catch(err){
                console.log("connect err: ", err)
            }
        }
    }

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
                <button 
                    onClick={() => connectClink()}
                    className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#14F195] hover:text-[#14F195] transition text-sm font-semibold flex items-center gap-2"
                >
                    {connected? t("connected"):t("connect")}
                </button>
            </div>
        </nav>
    )
}

export default GameNav;
