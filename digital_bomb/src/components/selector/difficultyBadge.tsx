


export function DifficultyBadge({ level }: { level: 'Easy' | 'Medium' | 'Hard' }) {
  const colors = {
    Easy: 'bg-green-500/10 text-green-400 border-green-500/20',
    Medium: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    Hard: 'bg-red-500/10 text-red-400 border-red-500/20',
  };

  return (
    <span className={`px-2.5 py-1 rounded text-xs font-mono border ${colors[level]}`}>
      {level.toUpperCase()}
    </span>
  );
}