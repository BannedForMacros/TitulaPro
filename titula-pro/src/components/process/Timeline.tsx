"use client";

import { useState } from "react";
import {
  UserPlus,
  FileText,
  Users,
  CheckCircle,
  ClipboardList,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const ETAPAS = [
  {
    id: 1,
    nombre: "Crear usuario en SELGESTIUN",
    descripcion:
      "Enviar correo a la Unidad de Investigación con tus datos personales para obtener usuario y clave.",
    icon: UserPlus,
    seccion: 1,
    pagina: 3,
  },
  {
    id: 2,
    nombre: "Registrar proyecto de tesis",
    descripcion:
      "Ingresar a SELGESTIUN, elegir modalidad pregrado, agregar coautor si aplica, seleccionar asesor y completar el registro.",
    icon: FileText,
    seccion: 2,
    pagina: 4,
  },
  {
    id: 3,
    nombre: "Solicitar designación de jurado",
    descripcion:
      "Enviar a mesa de partes: solicitud, Formato N°01, constancia 160 créditos, voucher S/20.00 y proyecto con Turnitin.",
    icon: Users,
    seccion: 3,
    pagina: 6,
    costo: "S/ 20.00 por tesista",
  },
  {
    id: 4,
    nombre: "Aprobación de proyecto de tesis",
    descripcion:
      "Una vez designado el jurado, solicitar la aprobación formal del proyecto.",
    icon: CheckCircle,
    seccion: 6,
    pagina: 14,
  },
  {
    id: 5,
    nombre: "Informes parciales",
    descripcion:
      "Elaborar y presentar informes de avance de la investigación al jurado evaluador.",
    icon: ClipboardList,
    seccion: 8,
    pagina: 17,
  },
  {
    id: 6,
    nombre: "Revisión de informe final",
    descripcion:
      "Presentar la tesis completa para revisión del jurado. Debe pasar nuevamente por Turnitin.",
    icon: BookOpen,
    seccion: 10,
    pagina: 26,
  },
  {
    id: 7,
    nombre: "Sustentación",
    descripcion:
      "Solicitar resolución de fecha y hora de sustentación. Plazo máximo: 18 meses desde aprobación.",
    icon: GraduationCap,
    seccion: 12,
    pagina: 33,
  },
];

export default function Timeline() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-navy/20 to-gold/40 hidden sm:block" />

      <div className="space-y-4">
        {ETAPAS.map((etapa) => {
          const Icon = etapa.icon;
          const isOpen = activeId === etapa.id;

          return (
            <div key={etapa.id} className="relative flex gap-4 sm:gap-5">
              <div className="flex-shrink-0 relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? "bg-navy text-white shadow-lg shadow-navy/20"
                      : "bg-cream-light text-navy/50 border border-cream"
                  }`}
                >
                  <Icon size={18} />
                </div>
              </div>

              <button
                onClick={() => setActiveId(isOpen ? null : etapa.id)}
                className={`flex-1 text-left rounded-xl p-4 transition-all duration-300 ${
                  isOpen
                    ? "bg-white border border-gold/30 shadow-md shadow-gold/5"
                    : "bg-cream-light/50 border border-transparent hover:bg-cream-light hover:border-cream"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold text-gold bg-gold-soft px-2 py-0.5 rounded-full">
                        ETAPA {etapa.id}
                      </span>
                      {etapa.costo && (
                        <span className="text-[10px] font-medium text-navy/50 bg-blue-soft px-2 py-0.5 rounded-full">
                          {etapa.costo}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-semibold text-navy-dark mt-1.5">
                      {etapa.nombre}
                    </h3>
                  </div>

                  <svg
                    className={`w-4 h-4 text-navy/30 transition-transform duration-300 flex-shrink-0 mt-1 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {isOpen && (
                  <div className="mt-3 animate-fade-in">
                    <p className="text-sm text-navy/60 leading-relaxed">
                      {etapa.descripcion}
                    </p>
                    <p className="mt-3 text-xs text-gold font-medium">
                      Guía Rápida — Sección {etapa.seccion}, pág.{" "}
                      {etapa.pagina}
                    </p>
                  </div>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
