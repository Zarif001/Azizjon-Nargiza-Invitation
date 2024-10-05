import AnimatedSection from "../Animation/Animation";
export default function About() {
  const textRight = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const textLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="bg-slate-100 pt-24">
      <AnimatedSection animation={textRight} className="grid grid-cols-2 items-center h-[350px]" >
        <p className="text-sm font-vibes text-center"> <span className="text-m mb-[1px] block ">Navkar and Fotixa Toy</span> <br /> <span className="text-m">Тайминг</span> <br />12:00 - Начало помолвки, <br />обмен дарами, <br />14:00 - Приветсвие невесты <br />с мамой жениха, <br />15:00 "Домод Салом" приветствие жениха с родственниками невесты, <br /> 16:00 национальные танцы,<br />  продолжение банкета <br /> <span className="underline">Dress Code: свободный </span></p> 
        <img
          className="w-full h-[350px] object-cover"
          src="/images/1.webp"
          alt="picture"
        />
      </AnimatedSection>

      <AnimatedSection animation={textLeft} className="grid grid-cols-2 items-center h-[350px]">
        <img
          className="w-full h-[350px] object-cover"
          src="/images/1.webp"
          alt="picture-1"
        />
          <p className="text-sm font-vibes text-center"> <span className="text-m mb-[1px] block "><b>Dress Code: <br />Arabian Cocktail </b></span> <br /> <span className="text-sm">Мы будем рады, если вы поддержите тематику помолвки</span> <br /> <b>Леди: </b> <br /> Яркие платья, брючные и юбочные костюмы <br /><b>Джентельмены:</b> Желательно отдать предпочтение классическим образам: костюм, <br />брюки с рубашкой  </p>
            
      </AnimatedSection>
      <AnimatedSection animation={textRight} className="grid grid-cols-2 items-center h-[350px]">
      <p className="text-sm font-vibes text-center"> <span className="text-m mb-[1px] block ">Свадебное торжество </span> <br /> <span className="text-m">Тайминг</span> <br />10:00 - Сбор в загородном доме невесты,  <br /> 10:30 - Прибытие свадебного кортежа  <br />11:30 - Церемония прощания невесты с семьей<br /> 13:00 - 16:00 - фотосессия в "InterContinental" г.Ташкент <br /> 17:00 - Сбор гостей в ресторане "Osiyo Grand"  <br /> <span className="underline">Dress Code: Вечерний </span></p>
        <img
          className="w-full h-[350px] object-cover"
          src="/images/1.webp"
          alt="picture-2"
        />
      </AnimatedSection>
    </div>
  );
}
