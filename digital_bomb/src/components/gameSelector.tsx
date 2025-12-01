import { 
  Search, Zap, Activity, Trophy, Dice5,
  Gamepad2,
} from 'lucide-react';
import { useState } from "react";
import { GameCard, type GameType } from "./selector/gameCard";

// --- 模拟数据 ---
const INITIAL_GAMES: GameType[] = [
  { id: 1, title: "量子猜数 (Quantum Guess)", description: "在量子叠加态中寻找正确的数字，观察者效应将影响结果。", difficulty: "Hard", players: 1240, imageIcon: <Zap className="text-[#14F195]" /> },
  { id: 2, title: "二元追击 (Binary Hunt)", description: "经典的二分查找逻辑游戏，但在Solana链上速度极快。", difficulty: "Easy", players: 8500, imageIcon: <Gamepad2 className="text-[#9945FF]" /> },
  { id: 3, title: "神经网络 (Neural Net)", description: "对抗AI预测模型，猜出它想不到的数字。", difficulty: "Medium", players: 3200, imageIcon: <Activity className="text-cyan-400" /> },
  { id: 4, title: "加密矩阵 (Crypto Matrix)", description: "解开哈希谜题来获得猜测范围提示。", difficulty: "Hard", players: 560, imageIcon: <Dice5 className="text-pink-500" /> },
  { id: 5, title: "极速幸运 (Speed Lucky)", description: "纯粹的运气测试，每秒生成新的目标数字。", difficulty: "Easy", players: 12000, imageIcon: <Trophy className="text-yellow-400" /> },
];

const GameSelector = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const [games] = useState<GameType[]>(INITIAL_GAMES);

    const filteredGames = games.filter(g => 
        g.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <section className="animate-fade-in-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        探索游戏 <span className="text-[#14F195]">Universe</span>
                    </h2>
                    <p className="text-gray-400">发现 Solana 链上最热门的猜数字游戏。</p>
                </div>
                
                <div className="relative group w-full md:w-96">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
                    <div className="relative flex items-center bg-[#111] rounded-lg p-1">
                        <Search className="w-5 h-5 text-gray-400 ml-3" />
                        <input 
                        type="text" 
                        placeholder="搜索游戏..." 
                        className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 px-3 py-2 outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGames.length > 0 ? filteredGames.map((game) => (
                <GameCard key={game.id} game={game} />
                )) : (
                <div className="col-span-full py-12 text-center text-gray-500 border border-dashed border-gray-800 rounded-xl">
                    没有找到符合条件的游戏
                </div>
                )}
            </div>
        </section>
    )
}

export default GameSelector;
