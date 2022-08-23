import ContactButton from "librairies/ContactButton/ContactButton";

function HeroContent() {
  return (
    <div className="p-2 md:w-3/4 lg:w-2/4">
      <p className="text-slate-200 font-bold mb-6 text-justify md:text-xl md:mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime a
        impedit consectetur unde obcaecati. Nesciunt necessitatibus dolores nisi
        omnis voluptate, itaque esse. Impedit fugiat iure deleniti quis quas
        atque animi?
      </p>
      <ContactButton />
    </div>
  );
}

export default HeroContent;
