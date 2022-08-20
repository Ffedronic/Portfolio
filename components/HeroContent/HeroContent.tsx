import Button from "librairies/Button/Button";

function HeroContent() {
  return (
    <div className="md:w-3/4 lg:w-2/4">
      <p className="text-slate-200 font-bold mb-6 text-justify md:text-xl md:mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime a
        impedit consectetur unde obcaecati. Nesciunt necessitatibus dolores nisi
        omnis voluptate, itaque esse. Impedit fugiat iure deleniti quis quas
        atque animi?
      </p>
      <Button href="#" download={false} title="Contact Me" />
    </div>
  );
}

export default HeroContent;
