const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-heading text-2xl text-foreground mb-4">La trattoria</p>
        <p className="text-muted-foreground text-sm font-light mb-2">
          21 Av. Pasteur, 06600 Antibes
        </p>
        <a href="tel:0422109196" className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors">
          04 22 10 91 96
        </a>
        <div className="w-8 h-px bg-border mx-auto my-6" />
        <p className="text-muted-foreground text-xs font-light">
          © {new Date().getFullYear()} La trattoria. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
