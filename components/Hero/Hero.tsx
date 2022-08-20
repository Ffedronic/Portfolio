import HeroTitle from "../HeroTitle/HeroTitle";
import HeroContent from "../HeroContent/HeroContent";

function Hero() {
  return (
    <section className="pt-20 text-center md:flex md:flex-col md:justify-center md:items-center md:pt-40">
      <HeroTitle/>
      <HeroContent/>
    </section>
  );
}

export default Hero;
