
import GameNav from '../components/gameNav';
import GameSelector from '../components/gameSelector';
import GameManage from '../components/gameManage';
import FloatingButton from '../components/nav/floatingButton';


export default function Index() {
  
  

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#9945FF] selection:text-white pb-24 relative overflow-x-hidden">
      
        <div className="fixed bg-[#050505] top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#9945FF] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#14F195] rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
        </div>

      <GameNav />

      <main className="max-w-6xl mx-auto px-4 pt-12 flex flex-col gap-16">
        <GameSelector />
        <GameManage />
      </main>

      <FloatingButton />

    </div>
  );
}


