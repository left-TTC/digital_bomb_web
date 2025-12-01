import { DifficultyBadge } from "./difficultyBadge";


// --- 类型定义 ---
export interface GameType {
  id: number;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  players: number;
  imageIcon: React.ReactNode;
}

export function GameCard({ game }: { game: GameType }) {
    return (
        <div className="group relative bg-[#111111] border border-white/5 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(153,69,255,0.2)] overflow-hidden">
            {/* 悬停时的边框高亮 */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#9945FF]/30 rounded-2xl transition-colors pointer-events-none"></div>
            
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/5 rounded-xl text-2xl group-hover:scale-110 transition-transform duration-300">
                {game.imageIcon}
                </div>
                <DifficultyBadge level={game.difficulty} />
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#14F195] transition-colors">{game.title}</h3>
            <p className="text-gray-400 text-sm mb-6 line-clamp-2">{game.description}</p>

            <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                    <div className="w-2 h-2 bg-[#14F195] rounded-full animate-pulse"></div>
                    {game.players.toLocaleString()} 在线
                </div>
                <button className="px-4 py-2 bg-white text-black text-sm font-bold rounded-lg hover:bg-[#14F195] hover:text-black transition-colors transform active:scale-95">
                    PLAY
                </button>
            </div>
        </div>
    );
}