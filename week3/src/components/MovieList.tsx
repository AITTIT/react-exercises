import { useMovieStore } from "../store/useMovieStore";
import { useState } from "react";

export function MovieList() {
    const movies = useMovieStore((state) => state.movies);
    const toggleWatched = useMovieStore((state) => state.toggleWatched);
    const [filterType, setFilter] = useState<'all' | 'watched' | 'unwatched'>('all');

    const displayedMovies = filterType === 'all'
        ? movies
        : movies.filter(m => {
            let filterBool = true;
            if (filterType === 'unwatched') {
                filterBool = false;
            }
            return m.watched === filterBool;
        });    

    return (
        <div className="mt-4 p-6 border-2 border-dashed border-gray-200 rounded-2xl bg-white">
            <div className="flex gap-2 mb-6">
                <button onClick={() => setFilter('all')} className={`px-3 py-1 rounded border ${filterType === 'all' ? 'bg-zinc-800 text-white' : 'bg-white'}`}>All movies</button>
                <button onClick={() => setFilter('watched')} className={`px-3 py-1 rounded border text-red-500 ${filterType === 'watched' ? 'bg-red-50' : 'bg-white'}`}>Watched</button>
                <button onClick={() => setFilter('unwatched')} className={`px-3 py-1 rounded border text-green-600 ${filterType === 'unwatched' ? 'bg-green-50' : 'bg-white'}`}>Not finished</button>
            </div>
      
      <div className="flex flex-col gap-2 min-h-[50px]">
        {displayedMovies.map(m => (
          <span key={m.id} className="text-xl flex gap-6 ">
            {m.title} {m.watched === true
                            ? "✅ Watched"
                            : "⏳ Unwatched"}
            <button className='px-3 py-1 rounded border bg-zinc-800 text-white' onClick={() => toggleWatched(m.id)}>Change State</button>
          </span>
          
        ))}
      </div>
    </div>
    );
}