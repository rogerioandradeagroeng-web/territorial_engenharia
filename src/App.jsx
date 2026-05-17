import { motion } from "framer-motion";

export default function App() {
  const services = [
    {
      title: "Fundiário",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
      description:
        "Atuação estratégica em regularização fundiária, georreferenciamento, cadastro territorial, due diligence e suporte técnico para empreendimentos.",
      items: [
        "Regularização fundiária",
        "Georreferenciamento",
        "Due diligence",
        "Servidão administrativa",
      ],
    },
    {
      title: "Ambiental",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop",
      description:
        "Consultoria ambiental aplicada ao licenciamento, CAR, recuperação de áreas e gestão ambiental de propriedades e empreendimentos.",
      items: [
        "Licenciamento ambiental",
        "CAR",
        "Diagnóstico ambiental",
        "Recuperação de áreas",
      ],
    },
    {
      title: "Topografia",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop",
      description:
        "Levantamentos topográficos de alta precisão utilizando RTK, drone e geotecnologias aplicadas ao território.",
      items: [
        "Levantamentos topográficos",
        "Drone e RTK",
        "Mapeamentos",
        "Geoprocessamento",
      ],
    },
    {
      title: "Avaliações e Perícias",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      description:
        "Elaboração de laudos, avaliações rurais, pareceres técnicos e perícias ambientais e agronômicas.",
      items: [
        "Avaliações rurais",
        "Perícias ambientais",
        "Laudos técnicos",
        "Assistência judicial",
      ],
    },
    {
      title: "Agronômico",
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop",
      description:
        "Assistência técnica e planejamento agrícola voltado à eficiência produtiva e sustentabilidade rural.",
      items: [
        "Planejamento agrícola",
        "Consultoria rural",
        "Projetos produtivos",
        "Assistência técnica",
      ],
    },
    {
      title: "Energia e Infraestrutura",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
      description:
        "Suporte territorial e ambiental para projetos de energia renovável, linhas de transmissão e infraestrutura.",
      items: [
        "Energia solar",
        "Energia eólica",
        "Infraestrutura",
        "Implantação territorial",
      ],
    },
  ];

  const descriptions = {
    "Regularização fundiária":
      "Processo essencial para garantir segurança jurídica e conformidade territorial.",
    Georreferenciamento:
      "Levantamento técnico de alta precisão para delimitação de propriedades.",
    "Due diligence":
      "Análise técnica e documental de riscos fundiários e ambientais.",
    "Servidão administrativa":
      "Uso legal de áreas para projetos de infraestrutura.",
    "Licenciamento ambiental":
      "Autorização obrigatória para atividades com impacto ambiental.",
    CAR:
      "Cadastro Ambiental Rural para regularização ambiental.",
    "Diagnóstico ambiental":
      "Avaliação das condições ambientais de uma área.",
    "Recuperação de áreas":
      "Projetos de recuperação de áreas degradadas.",
    "Levantamentos topográficos":
      "Mapeamento preciso do terreno.",
    "Drone e RTK":
      "Tecnologias de alta precisão para medições territoriais.",
    Mapeamentos:
      "Criação de mapas técnicos.",
    Geoprocessamento:
      "Análise espacial com sistemas digitais.",
    "Avaliações rurais":
      "Avaliação de valor de propriedades rurais.",
    "Perícias ambientais":
      "Análises técnicas para processos judiciais.",
    "Laudos técnicos":
      "Documentos técnicos especializados.",
    "Assistência judicial":
      "Apoio técnico em processos judiciais.",
    "Planejamento agrícola":
      "Estratégias para produção rural.",
    "Consultoria rural":
      "Suporte técnico para propriedades rurais.",
    "Projetos produtivos":
      "Desenvolvimento de projetos agrícolas.",
    "Assistência técnica":
      "Acompanhamento técnico especializado.",
    "Energia solar":
      "Suporte para projetos solares.",
    "Energia eólica":
      "Suporte para projetos eólicos.",
    Infraestrutura:
      "Projetos de grande porte.",
    "Implantação territorial":
      "Estruturação de projetos complexos.",
  };

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">

      {/* HEADER */}
      <header className="bg-black text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center text-center gap-3">

          <img
            src="/logo-territorial.png"
            alt="Territorial Engenharia"
            className="h-16 w-auto"
          />

          <h1 className="text-4xl font-black tracking-wide">
            Territorial Engenharia
          </h1>

          <p className="text-gray-400 text-sm">
            Consultoria Fundiária, Ambiental e Territorial
          </p>

          <a
            href="https://wa.me/5587991893154"
            className="mt-4 bg-green-700 hover:bg-green-800 transition px-6 py-3 rounded-2xl font-bold"
          >
            Fale conosco
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[85vh] bg-black text-white flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <span className="uppercase tracking-[0.3em] text-green-500 text-sm font-semibold">
              Engenharia Territorial Estratégica
            </span>

            <h2 className="text-6xl leading-tight font-black mt-8">
              Soluções técnicas para território, meio ambiente e agronegócio
            </h2>

            <p className="text-xl text-gray-300 mt-8">
              Atuação especializada em regularização fundiária, ambiental,
              topografia, perícias e infraestrutura.
            </p>

            <a
              href="https://wa.me/5587991893154"
              className="mt-10 inline-block bg-green-700 hover:bg-green-800 px-8 py-4 rounded-2xl font-bold"
            >
              Solicitar atendimento
            </a>
          </motion.div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl font-black">
              Soluções completas para o território
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] shadow-2xl overflow-hidden"
              >
                <img
                  src={service.image}
                  className="w-full h-64 object-cover"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-black text-green-700">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mt-6">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-gray-700">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-28 bg-black text-white text-center">
        <h2 className="text-5xl font-black">
          Engenharia consultiva estratégica
        </h2>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          <div>
            <p className="text-gray-400 text-lg">
              Consultoria especializada em soluções territoriais.
            </p>
          </div>

          <div className="space-y-6">

            <p>87 99189-3154</p>
            <p>rogerioandrade.agroeng@gmail.com</p>

            <p>
              Rua Graciliano Ramos, 143, Centro. Buíque/PE.
            </p>

          </div>

        </div>
      </footer>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/5587991893154"
        className="fixed bottom-6 right-6 bg-green-600 px-6 py-4 rounded-full text-white font-bold"
      >
        WhatsApp
      </a>

    </div>
  );
}