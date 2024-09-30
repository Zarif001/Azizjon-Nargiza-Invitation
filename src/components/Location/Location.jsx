import React from "react";
import AnimatedSection from "../Animation/Animation";

export default function Location() {
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="pt-32 bg-slate-100 flex flex-col items-center">
      <AnimatedSection animation={textVariants}>
        <h2
          className="text-llg font-vibes mb-10"
        >
          Как добраться?
        </h2>
      </AnimatedSection>
      <AnimatedSection animation={textVariants}>
        <p
          className="text-m font-vibes text-center w-full md:w-[500px]"
        >
          Для вашего удобства мы подготовили карту. <br /> Надеемся, что вы
          легко найдете место проведения свадьбы и порадуете нас своим
          присутствием!
        </p>
      </AnimatedSection>

      <div
        className="mt-20 w-full"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <a
          href="https://yandex.uz/maps/org/120468512829/?utm_medium=mapframe&utm_source=maps"
          style={{ color: "#eee", fontSize: 12, position: "absolute", top: 0 }}
        >
          Osiyo Grand
        </a>
        <a
          href="https://yandex.uz/maps/10335/tashkent/category/banquet_hall/184108315/?utm_medium=mapframe&utm_source=maps"
          style={{ color: "#eee", fontSize: 12, position: "absolute", top: 14 }}
        >
          Банкетный зал в Ташкенте
        </a>
        <iframe
          className="md:w-[600px] w-full h-[400px]"
          src="https://yandex.uz/map-widget/v1/?ll=69.263576%2C41.325062&mode=search&oid=120468512829&ol=biz&z=16.98"
          frameBorder={1}
          allowFullScreen={true}
          style={{ position: "relative" }}
        />
      </div>
    </div>
  );
}
