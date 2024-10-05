import React from 'react';

export default function WeddingOrganizer() {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-100 py-10">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center">
        <h2 className="text-llg font-bold mb-4 font-vibes">Свадебный Организатор</h2>
        <p className="text-gray-700 text-sm mb-4 font-vibes">
          По всем вопросам Вы можете обращаться к нашему свадебному организатору.
        </p>
        <div className="font-bold  text-llg font-vibes">Юсуф</div>
        <a
          href="https://t.me/mirusmanovv"
          target="_blank"
          rel="noopener noreferrer" 
          className="text-orange-400 hover:text-orange-500 font-vibes"
        >
          @mirusmanovv
        </a>
      </div>
    </div>
  );
}
