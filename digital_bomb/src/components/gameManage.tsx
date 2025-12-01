import { useState } from "react";

import { 
  Plus, Settings, Zap, Trash2, Edit3, Target, Rocket,
} from 'lucide-react';

export interface PublishedGame {
  id: number;
  title: string;
  status: 'Active' | 'Pending';
  rewardPool: string;
}

const INITIAL_MY_GAMES: PublishedGame[] = [
  { id: 101, title: "Solana 乐透 V1", status: "Active", rewardPool: "150 SOL" },
  { id: 102, title: "周末猜猜乐", status: "Pending", rewardPool: "10 SOL" },
];

const GameManage = () => {

    const [myGames, setMyGames] = useState<PublishedGame[]>(INITIAL_MY_GAMES);
 
    const [activeTab, setActiveTab] = useState<'publish' | 'manage'>('publish');
    const [newGameTitle, setNewGameTitle] = useState('');
    const [newGamePool, setNewGamePool] = useState('');

    const handlePublish = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newGameTitle || !newGamePool) return;
        const newGame: PublishedGame = {
        id: Date.now(),
        title: newGameTitle,
        status: "Active",
        rewardPool: `${newGamePool} SOL`
        };
        setMyGames([...myGames, newGame]);
        setNewGameTitle('');
        setNewGamePool('');
        setActiveTab('manage');
    };

    const handleDelete = (id: number) => {
        setMyGames(myGames.filter(g => g.id !== id));
    };

    return (
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A]">
          {/* 装饰线条 */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#9945FF] to-transparent opacity-50"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* 左侧：控制面板 */}
            <div className="lg:col-span-4 bg-[#111111] p-8 border-r border-white/5 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Rocket className="text-[#9945FF]" /> 开发者中心
              </h3>
              
              <div className="flex flex-col gap-2 mb-8">
                <button 
                  onClick={() => setActiveTab('publish')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${activeTab === 'publish' ? 'bg-[#9945FF]/10 border border-[#9945FF]/50 text-white shadow-[0_0_15px_rgba(153,69,255,0.2)]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                >
                  <Plus size={18} />
                  发布新游戏
                </button>
                <button 
                  onClick={() => setActiveTab('manage')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${activeTab === 'manage' ? 'bg-[#14F195]/10 border border-[#14F195]/50 text-white shadow-[0_0_15px_rgba(20,241,149,0.2)]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                >
                  <Settings size={18} />
                  管理已发布
                </button>
              </div>

              <div className="mt-auto p-4 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/10">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Total Stake</p>
                <p className="text-2xl font-mono text-[#14F195]">1,240.5 SOL</p>
              </div>
            </div>

            {/* 右侧：内容区域 */}
            <div className="lg:col-span-8 p-8 bg-[#0A0A0A] relative">
              {activeTab === 'publish' ? (
                <div className="animate-fade-in space-y-6 max-w-lg">
                  <div>
                    <h4 className="text-xl font-bold mb-1">发布新猜数字游戏</h4>
                    <p className="text-gray-500 text-sm">将你的逻辑部署到 Solana 网络</p>
                  </div>
                  
                  <form onSubmit={handlePublish} className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">游戏名称</label>
                      <input 
                        type="text" 
                        value={newGameTitle}
                        onChange={e => setNewGameTitle(e.target.value)}
                        placeholder="例如: Super Guess V2"
                        className="w-full bg-[#151515] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#9945FF] transition text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">初始奖池 (SOL)</label>
                      <div className="relative">
                         <input 
                          type="number" 
                          value={newGamePool}
                          onChange={e => setNewGamePool(e.target.value)}
                          placeholder="0.00"
                          className="w-full bg-[#151515] border border-white/10 rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:border-[#9945FF] transition text-white font-mono"
                        />
                        <span className="absolute right-4 top-3 text-xs font-bold text-gray-500 pt-0.5">SOL</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-4 rounded-lg border border-white/5 bg-[#111] hover:border-[#9945FF]/30 cursor-pointer transition">
                          <div className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center mb-2">
                            <Target size={16} className="text-[#9945FF]" />
                          </div>
                          <p className="text-sm font-bold">普通模式</p>
                          <p className="text-xs text-gray-500 mt-1">标准规则</p>
                       </div>
                       <div className="p-4 rounded-lg border border-white/5 bg-[#111] hover:border-[#14F195]/30 cursor-pointer transition">
                          <div className="w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center mb-2">
                            <Zap size={16} className="text-[#14F195]" />
                          </div>
                          <p className="text-sm font-bold">极速模式</p>
                          <p className="text-xs text-gray-500 mt-1">10s 倒计时</p>
                       </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3.5 mt-4 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#7B2FFF] text-white font-bold hover:shadow-[0_0_20px_rgba(153,69,255,0.4)] transition-all transform hover:-translate-y-0.5"
                    >
                      立即部署
                    </button>
                  </form>
                </div>
              ) : (
                <div className="animate-fade-in h-full flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h4 className="text-xl font-bold">我的游戏资产</h4>
                      <p className="text-gray-500 text-sm">管理你创建的游戏实例</p>
                    </div>
                  </div>

                  <div className="space-y-3 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                    {myGames.map(game => (
                      <div key={game.id} className="group flex items-center justify-between p-4 bg-[#151515] border border-white/5 rounded-xl hover:border-white/10 transition">
                        <div className="flex items-center gap-4">
                          <div className={`w-2 h-2 rounded-full ${game.status === 'Active' ? 'bg-[#14F195] shadow-[0_0_8px_#14F195]' : 'bg-yellow-500'}`}></div>
                          <div>
                            <p className="font-bold text-white">{game.title}</p>
                            <p className="text-xs text-gray-400 font-mono mt-0.5">Pool: {game.rewardPool}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition">
                            <Edit3 size={16} />
                          </button>
                          <button 
                            onClick={() => handleDelete(game.id)}
                            className="p-2 rounded-lg hover:bg-red-500/10 text-gray-400 hover:text-red-500 transition"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                    {myGames.length === 0 && (
                      <div className="text-center py-20 text-gray-600">
                        暂无发布的游戏
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
    )
}

export default GameManage;
