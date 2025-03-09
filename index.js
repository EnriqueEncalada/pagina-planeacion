import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Info } from "lucide-react";

export default function Home() {
  const [selectedSection, setSelectedSection] = useState(null);
  const sectionColors = [
    "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-purple-200",
    "bg-indigo-200", "bg-pink-200", "bg-teal-200", "bg-orange-200", "bg-gray-200", "bg-lime-200"
  ];

  const sections = [
    { title: "Plan Municipal de Desarrollo 2024-2027", file: "PMD_2024-2027.pdf", content: "Información detallada sobre el Plan Municipal de Desarrollo 2024-2027." },
    { title: "Programas derivados del PMD 2025-2027", file: "Programas_PMD_2025-2027.pdf", content: "Listado y descripción de los programas derivados del PMD 2025-2027." },
    { title: "Matrices de Indicadores para Resultados (MIR) 2025-2027", file: "MIR_2025-2027.pdf", content: "Matrices de indicadores para evaluar los resultados de los programas municipales." },
    { title: "Programas Presupuestarios Anuales (PPA)", file: "PPA_2025.pdf", content: "Información sobre los programas presupuestarios anuales del municipio." },
    { title: "Formato de Programación y Seguimiento del PMD (FSPM)", file: "FSPM.pdf", content: "Formato utilizado para la programación y seguimiento del PMD." },
    { title: "Formato de Programación y Seguimiento de PPA (FSPP)", file: "FSPP.pdf", content: "Formato utilizado para el seguimiento de los programas presupuestarios." },
    { title: "Fichas de Indicadores de Desempeño (FID)", file: "FID.pdf", content: "Fichas utilizadas para medir el desempeño de los programas municipales." },
    { title: "Cédula de Avance en cumplimiento de Metas y Objetivos (CACMO)", file: "CACMO.pdf", content: "Documento de seguimiento del avance en el cumplimiento de metas y objetivos." },
    { title: "Metodología del Marco Lógico (MML)", file: "MML.pdf", content: "Guía sobre la metodología del Marco Lógico utilizada en la planificación municipal." },
    { title: "Evaluación PbR-SED", file: "Evaluacion_PbR-SED.pdf", content: "Proceso de evaluación del presupuesto basado en resultados." },
    { title: "Guía de Desempeño 2025-2027", file: "Guia_Desempeno_2025-2027.pdf", content: "Guía para evaluar el desempeño de los programas municipales." },
    { title: "COPLADEMUN", file: "COPLADEMUN.pdf", content: "Información sobre el Comité de Planeación para el Desarrollo Municipal." },
    { title: "Sesiones Trimestrales del COPLADEMUN", file: "Sesiones_COPLADEMUN.pdf", content: "Registro y seguimiento de las sesiones trimestrales del COPLADEMUN." },
    { title: "Artículos y Bibliografía sobre Gestión para Resultados y Políticas Públicas", file: "Articulos_GpR_Politicas_Publicas.pdf", content: "Recopilación de artículos y bibliografía relevante sobre Gestión para Resultados y Políticas Públicas." },
    { title: "Información Estadística", file: "Informacion_Estadistica.pdf", content: "Datos estadísticos clave para la planeación y evaluación municipal." }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Dirección de Planeación, Programación y Evaluación</h1>
        <div>
          <Button variant="outline" className="text-white border-white">Contacto</Button>
        </div>
      </nav>

      {/* Inicio */}
      <section className="py-10 px-6 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold">Bienvenidos</h2>
        <p className="mt-4 text-gray-700">
          La Dirección de Planeación del Municipio de Benito Juárez pone a disposición de todas y todos los funcionarios municipales, 
          estatales, federales, asociaciones civiles, cuerpos colegiados, academia y para todo el pueblo Benito Juarense toda la información de 
          Planeación, Programación, Seguimiento, Evaluación y Rendición de Cuentas en las que participan y generan todas las dependencias y 
          entidades municipales seguros de que les será de gran ayuda. Bienvenidos todas y todos.
        </p>
      </section>

      {/* Hero Section */}
      <header className="text-center py-16 bg-blue-600 text-white">
        <h2 className="text-3xl font-bold">Transparencia y Evaluación para el Desarrollo Municipal</h2>
        <p className="mt-2 text-lg">Seguimiento y Evaluación del Plan Municipal de Desarrollo 2024-2027</p>
      </header>

      {/* Secciones */}
      <section className="py-10 px-4">
        <h3 className="text-2xl font-semibold text-center">Secciones Principales</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Card key={index} className={sectionColors[index % sectionColors.length]}>
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold">{section.title}</h4>
                <Button variant="outline" className="mt-2" onClick={() => setSelectedSection(section)}>
                  <Info className="mr-2" /> Ver Información
                </Button>
                <a href={`/downloads/${section.file}`} download>
                  <Button variant="outline" className="mt-2">
                    <Download className="mr-2" /> Descargar
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
