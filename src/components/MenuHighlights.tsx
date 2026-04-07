import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const categories = [
  {
    title: "Entrées",
    items: [
      { name: "Soupe à l'oignon gratinée", price: "9,50" },
      { name: "Salade de chèvre chaud, miel et noix", price: "12,00" },
      { name: "Pâté de campagne maison et ses cornichons", price: "10,50" },
    ],
  },
  {
    title: "Plats",
    items: [
      { name: "Bœuf Bourguignon, pommes de terre grenailles", price: "22,50" },
      { name: "Confit de canard, pommes de terre sarladaises", price: "24,00" },
      { name: "Poisson du marché, légumes de saison, sauce beurre blanc", price: "26,00" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Crème brûlée à la vanille", price: "8,00" },
      { name: "Mousse au chocolat maison", price: "8,50" },
      { name: "Tarte Tatin, boule de glace vanille", price: "9,50" },
    ],
  },
];

const MenuCategory = ({ cat, index }: { cat: typeof categories[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="font-heading text-xl text-center text-foreground mb-8 tracking-wide italic">
        {cat.title}
      </h3>
      <div className="space-y-6">
        {cat.items.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-baseline gap-4 group cursor-default"
          >
            <div className="flex-1">
              <p className="font-body font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                {item.name}
              </p>
            </div>
            {item.price && (
              <span className="font-heading text-primary text-lg shrink-0 group-hover:text-terracotta transition-colors duration-300">
                {item.price} €
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="w-12 h-px bg-border mx-auto mt-8" />
    </div>
  );
};

const MenuHighlights = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            La Carte
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Notre Menu
          </h2>
          <p className="text-muted-foreground font-light text-sm">
            Cuisine italienne · Déjeuner & Dîner · Fait maison
          </p>
        </div>
        <div className="space-y-14">
          {categories.map((cat, i) => (
            <MenuCategory key={cat.title + i} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
