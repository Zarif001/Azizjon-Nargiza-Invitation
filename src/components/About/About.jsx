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
        <h2 className="">Something</h2>
        <img
          className="w-full h-[350px] object-cover"
          src="/images/bg.png"
          alt="picture"
        />
      </AnimatedSection>

      <AnimatedSection animation={textLeft} className="grid grid-cols-2 items-center h-[350px]">
        <img
          className="w-full h-[350px] object-cover"
          src="/images/image1.png"
          alt="picture-1"
        />
        <h2>Something</h2>
      </AnimatedSection>
      <AnimatedSection animation={textRight} className="grid grid-cols-2 items-center h-[350px]">
        <h2>Something</h2>
        <img
          className="w-full h-[350px] object-cover"
          src="/images/image2.png"
          alt="picture-2"
        />
      </AnimatedSection>
    </div>
  );
}
