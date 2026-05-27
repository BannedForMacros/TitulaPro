import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  MessageCircle,
  ListChecks,
  BookOpen,
  GraduationCap,
  ArrowRight,
  Clock,
  DollarSign,
  Shield,
} from "lucide-react";

const FEATURES = [
  {
    icon: MessageCircle,
    title: "Chatbot inteligente",
    description:
      "Pregunta lo que necesites sobre tu proceso de titulación y recibe respuestas claras al instante.",
  },
  {
    icon: ListChecks,
    title: "Paso a paso",
    description:
      "Cada etapa explicada de forma simple con los requisitos exactos que necesitas cumplir.",
  },
  {
    icon: BookOpen,
    title: "Basado en la Guía oficial",
    description:
      "Toda la información proviene de la Guía Rápida institucional de la FACEAC actualizada al 2025.",
  },
];

const QUICK_INFO = [
  {
    icon: Clock,
    label: "Plazo máximo",
    value: "18 meses",
    sublabel: "+6 meses de ampliación",
  },
  {
    icon: DollarSign,
    label: "Costo proyecto",
    value: "S/ 20.00",
    sublabel: "por tesista",
  },
  {
    icon: Shield,
    label: "Turnitin",
    value: "Máx. 20%",
    sublabel: "de similitud",
  },
  {
    icon: GraduationCap,
    label: "Requisito",
    value: "160 créditos",
    sublabel: "aprobados",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cream-light/60 to-white" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1 text-center lg:text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-soft border border-gold/20 text-xs font-medium text-navy/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  FACEAC &middot; UNPRG
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-dark leading-tight tracking-tight">
                  Tu guía inteligente{" "}
                  <span className="text-gold">hacia el título profesional</span>
                </h1>

                <p className="text-base text-navy/50 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Meta te acompaña paso a paso en tu proceso de titulación.
                  Resuelve tus dudas, conoce los requisitos y avanza con
                  confianza.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link
                    href="/chat"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy text-white text-sm font-medium hover:bg-navy-light active:scale-[0.98] transition-all duration-200 shadow-lg shadow-navy/15"
                  >
                    Hablar con Meta
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/proceso"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-navy text-sm font-medium border border-cream hover:border-gold/30 hover:bg-cream-light transition-all duration-200"
                  >
                    Ver el proceso
                  </Link>
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-gold/10 to-pink/10 rounded-full blur-2xl" />
                  <Image
                    src="/meta-avatar.jpeg"
                    alt="Meta - Asistente de TitulaPro"
                    width={320}
                    height={320}
                    className="relative rounded-2xl shadow-xl shadow-navy/10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-2 mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {QUICK_INFO.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="p-4 rounded-xl bg-white border border-cream hover:border-gold/30 hover:shadow-md hover:shadow-gold/5 transition-all duration-300 group"
                >
                  <Icon
                    size={18}
                    className="text-gold mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-lg font-bold text-navy-dark">
                    {info.value}
                  </p>
                  <p className="text-xs text-navy/50 mt-0.5">
                    {info.label}
                  </p>
                  <p className="text-[10px] text-navy/30">{info.sublabel}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          <div className="text-center mb-10">
            <h2 className="text-xl font-bold text-navy-dark">
              ¿Cómo te ayuda TitulaPro?
            </h2>
            <p className="text-sm text-navy/40 mt-2">
              Simplificamos lo complejo para que te enfoques en lo importante.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl bg-cream-light/40 border border-transparent hover:bg-white hover:border-cream hover:shadow-md hover:shadow-navy/5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-soft flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors duration-300">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="text-sm font-semibold text-navy-dark mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-navy/50 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 text-center">
            <h2 className="text-xl font-bold text-white mb-2">
              ¿Listo para empezar?
            </h2>
            <p className="text-sm text-white/50 mb-6 max-w-md mx-auto">
              Meta está disponible las 24 horas para resolver tus dudas sobre el
              proceso de titulación.
            </p>
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold text-navy-dark text-sm font-semibold hover:bg-gold-light active:scale-[0.98] transition-all duration-200"
            >
              Iniciar conversación
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
