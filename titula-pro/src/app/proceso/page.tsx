import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Timeline from "@/components/process/Timeline";

export default function ProcesoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center mb-10">
            <h1 className="text-2xl font-bold text-navy-dark">
              Proceso de titulación
            </h1>
            <p className="text-sm text-navy/50 mt-2 max-w-md mx-auto">
              Estas son las 7 etapas que debes completar para obtener tu título
              profesional en la FACEAC. Haz clic en cada una para ver los
              detalles.
            </p>
          </div>

          <Timeline />

          <div className="mt-10 p-4 rounded-xl bg-gold-soft/50 border border-gold/20 text-center">
            <p className="text-xs text-navy/60">
              Para información completa sobre cada etapa, consulta la{" "}
              <span className="font-semibold text-navy">Guía Rápida</span> o
              pregúntale a{" "}
              <a
                href="/chat"
                className="font-semibold text-gold hover:text-gold-light transition-colors"
              >
                Meta en el chatbot
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
