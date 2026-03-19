import { useState } from 'react';

interface CardProps {
    name: string;
    role: string;
}

export default function Card({ name, role }: CardProps) {
    const [votes, setVotes] = useState(0);

    function giveVote() {
        setVotes(votes + 1);
    }

    return (
        <div className="bg-blue rounded-2xl shadow-lg p-5 m-3 max-w-sm 
        border border-gray-100 text-center">    
            <p className='font-mono font-bold text-xl p-4 '>{name}</p>
            <p className='font-mono italic p-2'>{role}</p>
            <button
            onClick={giveVote}
            className="w-full bg-blue-500 text-blue-60 font-bold 
            py-3 rounded-xl hover:bg-blue-700 flex justify-center 
            gap-1 transition-colors"
            >
            <span>Vote</span>
            <span>({votes})</span>
            </button>
        </div>


    );
}