export default function Footer() {
  return (
    <footer className="border-t border-cream-light bg-cream-light/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-navy/40">
          TitulaPro &copy; {new Date().getFullYear()} &middot; FACEAC &middot;
          Universidad Nacional Pedro Ruiz Gallo
        </p>
        <p className="text-xs text-navy/30">
          Basado en la Guía Rápida de Titulación actualizada al 28.10.2025
        </p>
      </div>
    </footer>
  );
}
