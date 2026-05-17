import { motion } from "framer-motion";

export default function App() {

  const services = [
    {
      title: "Fundiário",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
      description: "Regularização fundiária, georreferenciamento e due diligence territorial.",
      items: ["Regularização fundiária", "Georreferenciamento", "Due diligence", "Servidão administrativa"]
    },
    {
      title: "Ambiental",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop",
      description: "Licenciamento ambiental e gestão de conformidade ambiental.",
      items: ["Licenciamento ambiental", "CAR", "Diagnóstico ambiental", "Recuperação de áreas"]
    },
    {
      title: "Topografia",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop",
      description: "Levantamentos topográficos com alta precisão e geotecnologia.",
      items: ["Levantamentos topográficos", "Drone e RTK", "Mapeamentos", "Geoprocessamento"]
    },
    {
      title: "Avaliações e Perícias",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      description: "Laudos técnicos, avaliações rurais e perícias especializadas.",
      items: ["Avaliações rurais", "Perícias ambientais", "Laudos técnicos", "Assistência judicial"]
    },
    {
      title: "Agronômico",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop",
      description: "Planejamento agrícola e suporte técnico rural.",
      items: ["Planejamento agrícola", "Consultoria rural", "Projetos produtivos", "Assistência técnica"]
    },
    {
      title: "Energia e Infraestrutura",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
      description: "Suporte territorial para energia e grandes projetos.",
      items: ["Energia solar", "Energia eólica", "Infraestrutura", "Implantação territorial"]
    }
  ];

  return (
    <div className="bg-[#0B0F14] text-white overflow-x-hidden">

      {/* HEADER PREMIUM */}
      <header className="bg-[#0B0F14] border-b border-white/10 sticky top-0 z-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <img
              src="/logo-territorial.png"
              className="h-12 w-auto"
              alt="Territorial Engenharia"
            />

            <div>
              <h1 className="text-xl font-bold tracking-wide">
                Territorial Engenharia
              </h1>
              <p className="text-xs text-gray-400">
                Consultoria Fundiária e Ambiental
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5587991893154?text=Olá,%20quero%20um%20atendimento"
            className="bg-green-600 hover:bg-green-700 transition px-5 py-2 rounded-xl font-semibold"
          >
            Fale com especialista
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl px-6 text-center"
        >

          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Engenharia territorial para decisões estratégicas seguras
          </h2>

          <p className="text-lg text-gray-300 mt-6">
            Consultoria fundiária, ambiental, topográfica e agronômica com foco em precisão técnica e segurança jurídica.
          </p>

          <a
            href="https://wa.me/5587991893154"
            className="mt-10 inline-block bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold"
          >
            Solicitar atendimento
          </a>

        </motion.div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-28 bg-[#111827]">

        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-black">Soluções Técnicas Especializadas</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >

              <img src={s.image} className="h-56 w-full object-cover" />

              <div className="p-6 text-left">

                <h3 className="text-2xl font-bold text-green-400">
                  {s.title}
                </h3>

                <p className="text-gray-300 mt-3">
                  {s.description}
                </p>

                <ul className="mt-5 space-y-2 text-sm text-gray-400">
                  {s.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 text-center">

        <h2 className="text-4xl font-black">
          Engenharia consultiva com visão estratégica
        </h2>

      </section>

      {/* FOOTER + MAPA */}
      <footer className="bg-black border-t border-white/10 py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-xl font-bold mb-4">Territorial Engenharia</h3>

            <p className="text-gray-400">
              Consultoria especializada em soluções fundiárias, ambientais e territoriais.
            </p>

            {/* MAPA */}
            <div className="mt-6">
              <iframe
                className="w-full h-64 rounded-xl"
                src="https://www.google.com/maps?q=Rua%20Graciliano%20Ramos%20143%20Buíque%20PE&output=embed"
              />
            </div>
          </div>

          <div className="space-y-4 text-gray-300">

            <p><strong>Telefone:</strong> 87 99189-3154</p>
            <p><strong>E-mail:</strong> rogerioandrade.agroeng@gmail.com</p>

            <p>
              <strong>Endereço:</strong><br />
              Rua Graciliano Ramos, 143, Centro<br />
              Buíque/PE - CEP: 56520-000
            </p>

          </div>

        </div>

      </footer>

      {/* WHATSAPP FIXO */}
      <a
        href="https://wa.me/5587991893154?text=Olá,%20quero%20um%20orçamento"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-full shadow-2xl font-bold z-50"
      >
        WhatsApp
      </a>

    </div>
  );
}