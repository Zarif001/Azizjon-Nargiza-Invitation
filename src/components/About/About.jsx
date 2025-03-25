import AnimatedSection from "../Animation/Animation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Form from "../Form/Form";

export default function About() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
  };
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
      <AnimatedSection>
        <div className="mt-10 flex flex-col justify-center items-center mb-5">
          <h2 className="text-llg font-vibes mb-10 text-center">
            To‘y o‘tkaziladigan joyga qanday borish mumkin
          </h2>
          <p className="text-m font-vibes text-center w-full md:w-[500px] mb-5">
            Siz uchun biz xarita tayyorladik. <br />
            Tadbir o‘tadigan joyni oson topishingizga umid qilamiz va sizning
            qatnashishingiz bilan xursand bo‘lamiz!
          </p>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <a
              href="https://yandex.uz/maps/org/95863422120/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: 12,
                position: "absolute",
                top: 0,
              }}
            >
              Oqshom
            </a>
            <a
              href="https://yandex.uz/maps/10335/tashkent/category/banquet_hall/184108315/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: 12,
                position: "absolute",
                top: 14,
              }}
            >
              Банкетный зал в Ташкенте
            </a>
            <a
              href="https://yandex.uz/maps/10335/tashkent/category/restaurant/184106394/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: 12,
                position: "absolute",
                top: 28,
              }}
            >
              Ресторан в Ташкенте
            </a>
            <iframe
            className="md:w-[600px] w-full h-[400px]"
              src="https://yandex.uz/map-widget/v1/?ll=69.268633%2C41.293293&mode=search&oid=95863422120&ol=biz&sctx=ZAAAAAgBEAAaKAoSCS%2FAPjp1T1FAEbgCCvX0qURAEhIJ0J1g%2F3VuxD8RGcVyS6shuT8iBgABAgMEBSgKOABAl6AGSAFqAnV6nQHNzMw9oAEAqAEAvQHrWdroggIGb3FzaG9tigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=69.268633%2C41.293293&sspn=0.109782%2C0.067555&text=oqshom&utm_source=share&z=13.58"
             
              frameBorder={1}
              allowFullScreen="true"
              style={{ position: "relative" }}
            />
          </div>
        </div>
      </AnimatedSection>
      <Form />
    </div>
  );
}
