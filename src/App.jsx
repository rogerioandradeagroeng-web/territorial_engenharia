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
      "Processo essencial para garantir segurança jurídica e conformidade territorial de imóveis e empreendimentos.",

    Georreferenciamento:
      "Levantamento técnico de alta precisão utilizado para delimitação oficial de propriedades rurais.",

    "Due diligence":
      "Análise técnica e documental para identificar riscos fundiários, ambientais e jurídicos.",

    "Servidão administrativa":
      "Procedimento aplicado em projetos de energia e infraestrutura para uso legal de áreas.",

    "Licenciamento ambiental":
      "Etapa obrigatória para viabilização ambiental de atividades e empreendimentos.",

    CAR:
      "Cadastro Ambiental Rural utilizado para regularização ambiental de imóveis rurais.",

    "Diagnóstico ambiental":
      "Avaliação técnica das condições ambientais de uma área ou empreendimento.",

    "Recuperação de áreas":
      "Projetos voltados à recomposição e recuperação ambiental de áreas degradadas.",

    "Levantamentos topográficos":
      "Mapeamento técnico do terreno com precisão para projetos e regularizações.",

    "Drone e RTK":
      "Tecnologias modernas utilizadas para medições territoriais de alta precisão.",

    Mapeamentos:
      "Produção de mapas técnicos aplicados à gestão territorial e ambiental.",

    Geoprocessamento:
      "Análise espacial e territorial com uso de sistemas geográficos digitais.",

    "Avaliações rurais":
      "Determinação técnica do valor de propriedades e ativos rurais.",

    "Perícias ambientais":
      "Análises técnicas para processos judiciais, administrativos e ambientais.",

    "Laudos técnicos":
      "Documentos especializados com análises e conclusões técnicas.",

    "Assistência judicial":
      "Apoio técnico especializado em demandas judiciais e perícias.",

    "Planejamento agrícola":
      "Estratégias técnicas voltadas à eficiência produtiva e sustentabilidade rural.",

    "Consultoria rural":
      "Suporte técnico especializado para propriedades e empreendimentos rurais.",

    "Projetos produtivos":
      "Desenvolvimento técnico de projetos voltados à produção rural.",

    "Assistência técnica":
      "Acompanhamento especializado para melhoria operacional e produtiva.",

    "Energia solar":
      "Suporte territorial e ambiental para implantação de usinas solares.",

    "Energia eólica":
      "Atuação fundiária e ambiental aplicada a projetos eólicos.",

    Infraestrutura:
      "Soluções territoriais e técnicas para implantação de grandes empreendimentos.",

    "Implantação territorial":
      "Estruturação técnica e territorial para execução de projetos complexos.",
  };

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <header className="bg-black text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img
              src="/logo-territorial.png"
              alt="Territorial Engenharia"
              className="h-30 w-auto"
            />

            <div>
              </h1>

              <p className="text-gray-400 text-sm mt-1">
                Consultoria Fundiária, Ambiental e Territorial
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5587991893154"
            className="bg-green-700 hover:bg-green-800 transition px-6 py-3 rounded-2xl font-bold"
          >
            Fale conosco
          </a>
        </div>
      </header>

      <section className="relative min-h-[85vh] bg-black text-white flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
            alt=""
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

            <p className="text-xl text-gray-300 mt-8 leading-relaxed">
              Atuação especializada em regularização fundiária,
              consultoria ambiental, topografia, avaliações,
              perícias e suporte técnico para empreendimentos
              rurais, energéticos e de infraestrutura.
            </p>

            <div className="mt-12">
              <a
                href="https://wa.me/5587991893154"
                className="bg-green-700 hover:bg-green-800 transition px-8 py-4 rounded-2xl font-bold text-lg inline-block"
              >
                Solicitar atendimento
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="servicos"
        className="py-28 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="uppercase tracking-[0.3em] text-green-700 text-sm font-semibold">
              Serviços
            </span>

            <h2 className="text-5xl font-black mt-6">
              Soluções completas para o território e o meio rural
            </h2>

            <p className="text-xl text-gray-600 mt-8 leading-relaxed">
              Engenharia consultiva aplicada ao agronegócio,
              energia, infraestrutura e gestão territorial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] shadow-2xl overflow-visible relative"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-t-[2rem]"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-black text-green-700">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mt-6 text-lg">
                    {service.description}
                  </p>

                  <ul className="mt-8 space-y-4">
                    {service.items.map((item, i) => (
                      <li
                        key={i}
                        className="relative group cursor-pointer"
                      >
                        <div className="flex items-center gap-3 hover:text-green-700 transition">
                          <span className="text-green-700 font-bold">
                            •
                          </span>

                          <span className="font-medium text-gray-700">
                            {item}
                          </span>

                          <span className="bg-green-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            i
                          </span>
                        </div>

                        <div className="absolute left-0 bottom-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
                          <div className="bg-black text-white text-sm leading-relaxed p-4 rounded-2xl shadow-2xl w-72">
                            {descriptions[item]}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="uppercase tracking-[0.3em] text-green-500 text-sm font-semibold">
            Diferenciais
          </span>

          <h2 className="text-5xl font-black mt-6">
            Engenharia consultiva com visão estratégica
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-20">
            {[
              "Atendimento técnico especializado",
              "Experiência territorial multidisciplinar",
              "Foco em soluções para empresas e produtores",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-10"
              >
                <h3 className="text-2xl font-bold leading-relaxed">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>

            </h3>

            <p className="text-gray-400 mt-8 leading-relaxed text-lg">
              Consultoria especializada em soluções fundiárias,
              ambientais, agronômicas, topográficas e territoriais.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-gray-400 uppercase tracking-[0.2em] text-sm">
                Contato
              </p>

              <p className="text-3xl font-bold mt-3">
                87 99189-3154
              </p>
            </div>

            <div>
              <p className="text-gray-400 uppercase tracking-[0.2em] text-sm">
                E-mail
              </p>

              <p className="text-xl mt-3 break-all">
                rogerioandrade.agroeng@gmail.com
              </p>
            </div>

            <div>
              <p className="text-gray-400 uppercase tracking-[0.2em] text-sm">
                Localização
              </p>

              <p className="text-xl mt-3">
                Rua Graciliano Ramos, 143, Centro. Buíque/PE. CEP: 56520-000
              </p>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/5587991893154"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 transition text-white px-6 py-4 rounded-full shadow-2xl font-bold z-50"
      >
        WhatsApp
      </a>
    </div>
  );
}