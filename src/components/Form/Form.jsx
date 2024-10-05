import React, { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('');
  const [alcoholPreference, setAlcoholPreference] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const telegramBotToken = '6600099198:AAGyTwqp7-CMqscwdtXoQC_FvMIXr0TfEP8'; // Замените на токен вашего бота
  const chatId = '-4044044095'; // Замените на ваш chat_id

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `
      Имя и Фамилия: ${name}
      Присутствие: ${attendance}
      Предпочтения в алкоголе: ${alcoholPreference}
    `;

    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Ошибка при отправке сообщения:', error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center pt-20 bg-slate-100">
      <div className="text-center font-vibes mb-6">
        <h1 className='text-llg mb-5'>Анкета Гостей</h1>
        <p className='w-[300px] text-m'>Мы очень старались сделать праздник незабываемым, поэтому будем рады, если вы подтвердите свое присутствие до <br /> <span className='underline'>20 октября 2024 года</span></p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 font-vibes">
        <label className="block text-gray-700 text-m font-bold mb-2">Имя и Фамилия:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Введите имя и фамилию"
          required
        />

        <label className="block text-gray-700 text-sm font-bold mb-2">1. Подтвердите свое присутствие:</label>
        <div className="mb-4">
          <label className="block">
            <input
              type="radio"
              name="attendance"
              value="Обязательно буду"
              checked={attendance === 'Обязательно буду'}
              onChange={(e) => setAttendance(e.target.value)}
            />{' '}
            Обязательно буду
          </label>
          <label className="block">
            <input
              type="radio"
              name="attendance"
              value="Еще не уверен(а)"
              checked={attendance === 'Еще не уверен(а)'}
              onChange={(e) => setAttendance(e.target.value)}
            />{' '}
            Еще не уверен(а)
          </label>
          <label className="block">
            <input
              type="radio"
              name="attendance"
              value="К сожалению, у меня не получится"
              checked={attendance === 'К сожалению, у меня не получится'}
              onChange={(e) => setAttendance(e.target.value)}
            />{' '}
            К сожалению, у меня не получится
          </label>
        </div>

        <label className="block text-gray-700 text-sm font-bold mb-2">2. Предпочтения в алкоголе:</label>
        <div className="mb-4">
          <label className="block">
            <input
              type="radio"
              name="alcoholPreference"
              value="Шампанское"
              checked={alcoholPreference === 'Шампанское'}
              onChange={(e) => setAlcoholPreference(e.target.value)}
            />{' '}
            Шампанское
          </label>
          <label className="block">
            <input
              type="radio"
              name="alcoholPreference"
              value="Вино"
              checked={alcoholPreference === 'Вино'}
              onChange={(e) => setAlcoholPreference(e.target.value)}
            />{' '}
            Вино
          </label>
          <label className="block ">
            <input
              type="radio"
              name="alcoholPreference"
              value="Крепкий алкоголь"
              checked={alcoholPreference === 'Крепкий алкоголь'}
              onChange={(e) => setAlcoholPreference(e.target.value)}
            />
            
            Крепкий алкоголь
          </label>
          <label className="block">
            <input
              type="radio"
              name="alcoholPreference"
              value="Б/а напитки"
              checked={alcoholPreference === 'Б/а напитки'}
              onChange={(e) => setAlcoholPreference(e.target.value)}
            />{' '}
            Б/а напитки
          </label>
        </div>

        <button
          type="submit"
          className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Отправить
        </button>

        {isSubmitted && <p className="text-green-500 mt-4">Форма успешно отправлена!</p>}
      </form>
    </div>
  );
}
