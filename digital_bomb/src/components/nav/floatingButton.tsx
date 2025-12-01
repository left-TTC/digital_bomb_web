
import { 
  Settings, Activity, Menu, X
} from 'lucide-react';
import { useState } from 'react';

const FloatingButton = () => {

    const [fabOpen, setFabOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
        
            {/* 展开的菜单 */}
            <div className={`flex flex-col gap-3 transition-all duration-300 origin-bottom ${fabOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-10 pointer-events-none'}`}>
            <button className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#9945FF] hover:border-[#9945FF] shadow-lg transition">
                <Settings size={20} />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#14F195] hover:border-[#14F195] shadow-lg transition">
                <Activity size={20} />
            </button>
            </div>

            {/* 主按钮 */}
            <button 
            onClick={() => setFabOpen(!fabOpen)}
            className={`w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(153,69,255,0.3)] transition-all duration-300 group relative ${fabOpen ? 'rotate-90' : 'rotate-0'}`}
            >
            {/* 按钮背景渐变 & 动画 */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#9945FF] to-[#14F195] animate-spin-slow opacity-80 group-hover:opacity-100"></div>
            <div className="absolute inset-[3px] rounded-full bg-[#000] z-10 flex items-center justify-center">
                {fabOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
            </div>
            </button>
        </div>
    )
}

export default FloatingButton;
