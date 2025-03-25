import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [alcoholPreference, setAlcoholPreference] = useState("");
  const [comments, setComments] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const telegramBotToken = "6600099198:AAGyTwqp7-CMqscwdtXoQC_FvMIXr0TfEP8"; // Замените на токен вашего бота
  const chatId = "-4044044095"; // Замените на ваш chat_id

  const handleSubmit = (event) => {
    event.preventDefault();

    setTimeout(() => {
      window.location.reload();
    }, 2000);

    const message = `
      Имя и Фамилия: ${name}
      Присутствие: ${attendance}
      Предпочтения в алкоголе: ${alcoholPreference}
      Пожелания: ${comments}
    `;

    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
        console.error("Ошибка при отправке сообщения:", error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center pt-20 bg-slate-100">
      <div className="text-center font-vibes mb-6">
        <h1 className="text-llg mb-5">Mehmonlar Anketasi</h1>
        <p className="w-[300px] text-m">
          Bayramni unutilmas qilish uchun biz juda harakat qildik, shuning uchun
          <span className="underline"> 1 may 2025 года</span> ishtirokingizni
          tasdiqlashingizni iltimos qilamiz.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 font-vibes"
      >
        <label className="block text-gray-700 text-m font-bold mb-2">
          Ism va familiya:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-sm mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Ism va familiya"
          required
        />
        <label className="block text-gray-700 text-m font-bold mb-2">
          1.Ishtirokingizni tasdiqlang:
        </label>
        <div className="mb-4">
          <label className=" flex items-center">
            <input
              type="radio"
              name="attendance"
              value="Albatta boraman"
              checked={attendance === "Albatta boraman"}
              onChange={(e) => setAttendance(e.target.value)}
              className="hidden peer"
            />
            <div className="w-4 h-4 rounded-full border-2 border-orange-400 flex items-center justify-center peer-checked:bg-orange-400 m-0">
              <div className="w-2 h-2 rounded-full bg-white peer-checked:bg-orange-400"></div>
            </div>
            <span className="text-gray-700 ml-2 text-sm">Albatta boraman</span>
          </label>

          <label className=" flex items-center">
            <input
              type="radio"
              name="attendance"
              value="Hali aniq emas"
              checked={attendance === "Hali aniq emas"}
              onChange={(e) => setAttendance(e.target.value)}
              className="hidden peer"
            />
            <div className="w-4 h-4 rounded-full border-2 border-orange-400 flex items-center justify-center peer-checked:bg-orange-400 m-0">
              <div className="w-2 h-2 rounded-full bg-white peer-checked:bg-orange-400"></div>
            </div>
            <span className="text-gray-700 ml-2 text-sm">Hali aniq emas</span>
          </label>

          <label className=" flex items-center">
            <input
              type="radio"
              name="attendance"
              value="Afsuski, bora olmayman"
              checked={attendance === "Afsuski, bora olmayman"}
              onChange={(e) => setAttendance(e.target.value)}
              className="hidden peer"
            />
            <div className="w-4 h-4 rounded-full border-2 border-orange-400 flex items-center justify-center peer-checked:bg-orange-400 m-0">
              <div className="w-2 h-2 rounded-full bg-white peer-checked:bg-orange-400"></div>
            </div>
            <span className="text-gray-700 ml-2 text-sm">
            Afsuski, bora olmayman
            </span>
          </label>
        </div>

        {/* Ваши пожелания */}
        <label className="block text-gray-700 text-m font-bold mb-2">
        Sizning tilaklaringiz:
        </label>
        <input
          type="text"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className=" text-sm mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Sizning tilaklaringiz"
          required
        />

        <button
          type="submit"
          className="text-m bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Yuborish
        </button>

        {isSubmitted && (
          <p className="text-green-500 mt-4 text-sm">
            Forma muvaffaqiyatli yuborildi!
          </p>
        )}
      </form>
    </div>
  );
}
