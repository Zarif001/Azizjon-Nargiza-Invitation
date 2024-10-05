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
      <AnimatedSection
        animation={textRight}
        className="grid grid-cols-2 items-center h-[350px]"
      >
        <p className="text-sm font-vibes text-center">
          {" "}
          <span className="text-m mb-[1px] block ">
            <b>Navkar and Fotixa Toy</b>
          </span>{" "}
          <br /> <span className="text-m font-bold">Тайминг</span> <br />
          12:00 - Начало помолвки, <br />
          обмен дарами, <br />
          14:00 - Приветсвие невесты <br />с мамой жениха, <br />
          15:00 "Домод Салом" приветствие жениха с родственниками невесты,{" "}
          <br /> 16:00 национальные танцы,
          <br /> продолжение банкета <br />
        </p>
        <img
          className="w-full h-[350px] object-cover"
          src="/images/1.webp"
          alt="picture"
        />
      </AnimatedSection>

      <AnimatedSection
        animation={textLeft}
        className="grid grid-cols-2 items-center h-[350px]"
      >
        <img
          className="w-full h-[350px] object-cover"
          src="/images/1.webp"
          alt="picture-1"
        />
        <p className="text-sm font-vibes text-center">
          {" "}
          <span className="text-m mb-[1px] block ">
            <b>
              Dress Code: <br />
              Arabian Cocktail{" "}
            </b>
          </span>{" "}
          <br />{" "}
          <span className="text-sm">
            Мы будем рады, если вы поддержите тематику помолвки
          </span>{" "}
          <br /> <b>Леди: </b> <br /> Яркие платья, брючные и юбочные костюмы{" "}
          <br />
          <b>Джентельмены:</b> <br /> Желательно отдать предпочтение
          классическим образам: костюм, <br />
          брюки с рубашкой{" "}
        </p>
      </AnimatedSection>
      <AnimatedSection>
        <div className="mt-10 flex flex-col justify-center items-center">
          <h2 className="text-llg font-vibes mb-10">Как добраться?</h2>
          <p className="text-m font-vibes text-center w-full md:w-[500px] mb-5">
            Для вашего удобства мы подготовили карту. <br /> Надеемся, что вы
            легко найдете место проведения свадьбы и порадуете нас своим
            присутствием!
          </p>
          <div className="w-full" style={{ position: "relative", overflow: "hidden" }}>
            <a
              href="https://yandex.uz/maps/101726/gazalkent/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: 12,
                position: "absolute",
                top: 0,
              }}
            >
              Газалкент
            </a>
            <a
              href="https://yandex.uz/maps/101726/gazalkent/geo/5053510916/?ll=69.770275%2C41.567090&utm_medium=mapframe&utm_source=maps&z=17.56"
              style={{
                color: "#eee",
                fontSize: 12,
                position: "absolute",
                top: 14,
              }}
            >
              Улица Гагарина — Яндекс&nbsp;Карты
            </a>
            <iframe className="md:w-[600px] w-full h-[400px]"
              src="https://yandex.uz/map-widget/v1/?ll=69.770275%2C41.567090&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo1MDUzNTEwOTE2ElFPyrt6YmVraXN0b24sIFRvc2hrZW50IHZpbG95YXRpLCBCb8q7c3RvbmxpcSB0dW1hbmksIEfKu2F6YWxrZW50LCB1bGl0c2EgR2FnYXJpbmEiCg0_iotCFd9EJkI%2C&z=17.56"
              frameBorder={1}
              allowFullScreen="true"
              style={{ position: "relative" }}
            />
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection
        animation={textRight}
        className="grid grid-cols-2 items-center h-[350px]"
      >
        <p className="text-sm font-vibes text-center">
          {" "}
          <span className="text-m mb-[1px] block  font-bold">
            Свадебное торжество{" "}
          </span>{" "}
          <br /> <span className="text-m font-bold">Тайминг</span> <br />
          10:00 - Сбор в загородном доме невесты, <br /> 10:30 - Прибытие
          свадебного кортежа <br />
          11:30 - Церемония прощания невесты с семьей
          <br /> 13:00 - 16:00 - фотосессия в "InterContinental" г.Ташкент{" "}
          <br /> 17:00 - Сбор гостей в ресторане "Osiyo Grand" <br />
        </p>
        <img
          className="w-full h-[350px] object-cover"
          src="/images/1.webp"
          alt="picture-2"
        />
      </AnimatedSection>
      <AnimatedSection
        animation={textLeft}
        className="grid grid-cols-2 items-center h-[350px]"
      >
        <img
          className="w-full h-[350px] object-cover"
          src="/images/1.webp"
          alt="picture-1"
        />
        <p className="text-sm font-vibes text-center">
          {" "}
          <span className="text-m mb-[1px] block ">
            <b>
              Dress Code: <br />
              Black Tie
            </b>
          </span>{" "}
          <br />{" "}
          <span className="text-sm">
            Мы будем рады, если вы поддержите тематику свадебного дня
          </span>{" "}
          <br /> <b>Леди: </b> <br />
          Длинные вечерние платья и костюмы, выбор ткани может варьироваться, но
          главное сохранить элегатность и изысканность
          <br />
          <b>Джентельмены:</b> <br /> Классический костюм/строгий образ в черном
          или в темно-синим цвете{" "}
        </p>
      </AnimatedSection>
    </div>
  );
}
