import React, { useState } from 'react';
import { motion } from "motion/react";
import {
  Menu, X, ArrowRight, Play, Star, ChevronDown, ChevronUp,
  MapPin, Phone, Mail, Building2, HardHat, Wrench, Paintbrush,
  Truck, DollarSign, ShieldCheck, Award, CheckCircle2, Check,
  Facebook, Twitter, Linkedin, Instagram, Youtube, TrendingUp, Quote, Home, Hammer, Clock, ClipboardCheck, Shield
} from 'lucide-react';

const Logo = ({ dark = false }: { dark?: boolean }) => (
  <div className="flex items-center gap-2">
    <div className="relative flex items-center justify-center w-8 h-8 rounded" style={{ backgroundColor: '#e6c615' }}>
      <div className="flex gap-[2px]">
        <div className="w-1.5 h-4 bg-white transform -skew-x-[20deg]" />
        <div className="w-1.5 h-5 bg-white transform -skew-x-[20deg]" />
        <div className="w-1.5 h-6 bg-white transform -skew-x-[20deg]" />
      </div>
    </div>
    <span className={`text-2xl font-bold tracking-tight ${dark ? 'text-[#1F2C35]' : 'text-white'}`}>
      Build<span className={dark ? "text-[#1F2C35]" : "text-white"}>max</span>
    </span>
  </div>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

export default function App() {
  const whatsappLink = "https://wa.me/5531998828383?text=Ol%C3%A1,%20estou%20vindo%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqs, setOpenFaqs] = useState<number[]>([0, 5]);

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const faqsLeft = [
    { q: "Quais tamanhos de cubetas vocês fabricam?", a: "Nós produzimos todos os tamanhos e dimensões disponíveis no mercado atual. Nossa grade atende rigorosamente aos padrões técnicos utilizados pelas maiores construtoras, garantindo compatibilidade total com o seu projeto de laje nervurada." },
    { q: "Vocês trabalham apenas com venda ou também com locação?", a: "Oferecemos as duas modalidades para todo o brasil. A locação é ideal para obras pontuais com foco em baixo investimento inicial, enquanto a venda atende construtoras que utilizam o sistema nervurado de forma recorrente em seus empreendimentos." },
    { q: "Onde a fábrica está localizada e como funciona a logística?", a: "Nossa unidade fabril está estrategicamente instalada na região de bauru, no interior de são paulo. Essa localização nos permite despachar pedidos com agilidade para todos os estados brasileiros, utilizando transportadoras parceiras ou frota própria dependendo da demanda." },
    { q: "As cubetas plásticas são resistentes a quantos ciclos de uso?", a: "Utilizamos polímeros de alta resistência em nossa fabricação. Com o manuseio e desforma corretos, nossas cubetas suportam dezenas de ciclos de concretagem, mantendo a integridade geométrica e o acabamento liso da laje." },
    { q: "Qual a principal vantagem da laje nervurada em relação à laje maciça?", a: "A principal vantagem é a economia real de materiais. O uso de nossas cubetas reduz o consumo de concreto e aço em até 30%, além de permitir a execução de vãos maiores com menos pilares e maior leveza estrutural." }
  ];

  const faqsRight = [
    { q: "Como solicitar um orçamento para minha obra?", a: "O processo é simples e rápido. Basta clicar no botão de whatsapp em nosso site e enviar o seu projeto ou as dimensões da laje. Nossa equipe técnica fará o cálculo exato da quantidade de cubetas necessária para o seu cronograma." },
    { q: "As cubetas de vocês são compatíveis com os modelos de outras marcas como a atex?", a: "Sim, nossas cubetas seguem as mesmas modulações e padrões de mercado. Se você já utiliza fôrmas plásticas de outros fabricantes, poderá integrar nossos produtos perfeitamente ao seu estoque ou canteiro de obras." },
    { q: "Vocês oferecem suporte técnico para o cálculo de quantidades?", a: "Sim, auxiliamos nossos clientes na definição do melhor modelo e na contagem precisa de peças para que não falte material durante a concretagem nem haja desperdício de recurso com peças ociosas." },
    { q: "Qual o prazo médio de entrega para pedidos de venda?", a: "Por sermos fabricantes, mantemos um estoque regulador constante. Para modelos padrão, o carregamento é imediato após a confirmação do pedido, variando apenas o tempo de transporte até a sua localidade." },
    { q: "É necessário usar desmoldante nas cubetas plásticas?", a: "Recomendamos o uso de um desmoldante adequado para plástico para facilitar a retirada das peças e garantir que o acabamento do concreto fique perfeitamente liso, aumentando também a vida útil do equipamento." }
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-[#E5E7EB] p-[16px] text-[16px]">
      <div className="w-full flex flex-col gap-[16px]">

        {/* Hero Section */}
        <section className="relative py-20 md:pt-32 md:pb-20 lg:min-h-[92vh] flex items-end bg-[#1A2128] rounded-2xl overflow-hidden shadow-sm">
          <div className="absolute inset-0 z-0">
            <img
              src="imagens/bg-anisio.jpg"
              alt="Construction background"
              className="w-full h-full object-cover"
              width="1920"
              height="1080"
              fetchpriority="high"
              decoding="async"
            />
            {/* Overlay for text readability - Bottom heavy */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          </div>

          <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="mb-8 inline-block overflow-hidden rounded-xl shadow-2xl border-2 border-white/10 backdrop-blur-sm">
                <img src="imagens/logo-fundo.jpg" alt="Logo Anísio Horta" className="w-[260px] h-auto block" width="260" height="75" decoding="async" />
              </div>

              <h1 className="font-heading text-[42px] font-bold text-white leading-[1.1] mb-6">
                Cubetas para lajes nervuradas com entrega rápida em todo o brasil
              </h1>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end lg:text-right">
              <div className="max-w-xs text-white/80 mb-8 border-l-2 lg:border-l-0 lg:border-r-2 border-[#e6c615] pl-4 lg:pl-0 lg:pr-4 text-left lg:text-right">
                Reduza o desperdício de materiais em sua construção usando fôrmas plásticas de alta qualidade com os melhores prazos do mercado.
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e6c615] hover:bg-[#D4B81A] text-[#1A2128] px-8 py-4 rounded font-medium flex items-center gap-2 transition-colors cursor-pointer"
              >
                Solicitar Orçamento <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 relative z-20 bg-white rounded-2xl shadow-sm">
          <div className="w-full max-w-[1240px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center px-4">
                <div className="font-heading text-[36px] font-bold text-gray-900 mb-2">5<span className="text-[#e6c615]">+</span></div>
                <div className="font-heading text-[15px] text-gray-500 font-medium">Anos de experiência</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center px-4">
                <div className="font-heading text-[36px] font-bold text-gray-900 mb-2">500<span className="text-[#e6c615]">+</span></div>
                <div className="font-heading text-[15px] text-gray-500 font-medium">Projetos atendidos</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center px-4">
                <div className="font-heading text-[36px] font-bold text-gray-900 mb-2">150<span className="text-[#e6c615]">+</span></div>
                <div className="font-heading text-[15px] text-gray-500 font-medium">Obras certificadas</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center px-4">
                <div className="font-heading text-[36px] font-bold text-gray-900 mb-2">100<span className="text-[#e6c615]">%</span></div>
                <div className="font-heading text-[15px] text-gray-500 font-medium">de satisfação</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-24 bg-white relative overflow-hidden rounded-2xl shadow-sm">
          <div className="w-full max-w-[1240px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-5">
                <div className="flex items-center gap-2 text-[#e6c615] font-bold text-sm tracking-wider uppercase mb-6">
                  <span className="w-8 h-px bg-[#e6c615]" /> SOBRE NÓS
                </div>
                <h2 className="text-gray-500 text-lg mb-8 leading-relaxed">
                  Referência nacional no mercado de construção, otimizando projetos de todos os portes.
                </h2>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-7">
                <h3 className="font-heading text-[42px] font-bold text-[#1F2C35] mb-6 leading-tight">
                  Soluções de alta performance para lajes de qualquer porte
                </h3>
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <p className="text-gray-500 leading-relaxed max-w-xl">
                    Localizada em Bauru-SP, nossa fábrica é especializada no desenvolvimento de Cubetas para laje Nervurada que otimizam o uso de concreto e aço. Atendemos todo o território nacional com modelos que seguem rigorosamente os padrões técnicos do mercado.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap border-2 border-gray-200 hover:border-[#1F2C35] text-[#1F2C35] font-semibold px-8 py-4 rounded flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    Fale Conosco <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                <img src="imagens/img3.jpg" alt="Worker" className="w-full h-full object-cover" width="667" height="500" loading="lazy" decoding="async" />

              </motion.div>

              <div className="flex flex-col gap-6 justify-center">
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-[#334A97] p-10 rounded-2xl text-white relative overflow-hidden group hover:bg-[#1A2128] transition-colors duration-500">
                  <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
                    <Building2 className="w-32 h-32" />
                  </div>
                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold">Nossa Visão</h4>
                  </div>
                  <p className="text-white/80 leading-relaxed relative z-10">
                    Ser o principal parceiro logístico e técnico de construtoras que buscam modernizar seus processos estruturais com sustentabilidade e economia.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-[#1A2128] p-10 rounded-2xl text-white relative overflow-hidden group hover:bg-[#334A97] transition-colors duration-500">
                  <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
                    <Truck className="w-32 h-32" />
                  </div>
                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Truck className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold">Nossa Missão</h4>
                  </div>
                  <p className="text-white/80 leading-relaxed relative z-10">
                    Fornecer cubetas de alta resistência para venda ou locação, garantindo que cada obra tenha acesso ao melhor sistema de lajes nervuradas do país.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white rounded-2xl shadow-sm">
          <div className="w-full max-w-[1240px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl">
                <div className="flex items-center gap-2 text-[#e6c615] font-bold text-sm tracking-wider uppercase mb-4">
                  <span className="w-8 h-px bg-[#e6c615]" /> NOSSAS SOLUÇÕES
                </div>
                <h2 className="font-heading text-[42px] font-bold text-[#1F2C35] leading-tight">
                  Tudo o que sua obra precisa em lajes nervuradas
                </h2>
              </motion.div>
              <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-gray-500 max-w-md pt-2">
                Oferecemos modelos de negócio flexíveis para atender desde pequenos projetos residenciais até grandes complexos industriais com a mesma eficiência técnica.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Locação de cubetas",
                  desc: "Solução ideal para obras com cronograma definido que buscam reduzir o investimento inicial em ativos sem abrir mão da qualidade estrutural.",
                  icon: <Building2 />,
                  img: "imagens/img2.jpg"
                },
                {
                  title: "Venda de fôrmas",
                  desc: "Para construtoras que possuem alta demanda e buscam criar seu próprio parque de equipamentos com cubetas de alta durabilidade e resistência.",
                  icon: <Home />,
                  img: "imagens/img5.jpg"
                },
                {
                  title: "Grade completa de tamanhos",
                  desc: "Fabricamos todos os modelos disponíveis no mercado, garantindo total compatibilidade com seu projeto e a máxima economia de concreto.",
                  icon: <Hammer />,
                  img: "imagens/img1.jpg"
                }
              ].map((srv, i) => (
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 group flex flex-col">
                  <div className="p-8 pb-6 flex-grow">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 bg-[#e6c615] text-white rounded-xl flex-shrink-0 flex items-center justify-center">
                        {React.cloneElement(srv.icon as React.ReactElement, { className: 'w-7 h-7' })}
                      </div>
                      <h3 className="text-xl font-bold text-[#1F2C35] leading-tight">{srv.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="rounded-xl overflow-hidden h-52">
                      <img src={srv.img} alt={srv.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" width="326" height="245" loading="lazy" decoding="async" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-[#1A2128] text-white relative rounded-2xl shadow-sm overflow-hidden">
          <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-2 text-[#e6c615] font-bold text-sm tracking-wider uppercase mb-4">
                <span className="w-8 h-px bg-[#e6c615]" /> POR QUE NOS ESCOLHER <span className="w-8 h-px bg-[#e6c615]" />
              </div>
              <h2 className="font-heading text-[42px] font-bold mb-6 text-white text-balance leading-tight">
                O que nos torna referência em lajes nervuradas
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Nossa estrutura foi desenhada para oferecer o suporte que engenheiros e construtoras precisam para manter o cronograma e a economia da obra em dia.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Clock className="w-10 h-10" />, title: "Entrega no prazo", desc: "Trabalhamos com logística ágil saindo de bauru para garantir que as cubetas cheguem ao canteiro exatamente quando você precisar." },
                { icon: <DollarSign className="w-10 h-10" />, title: "Preços de fábrica", desc: "Ao negociar diretamente com quem fabrica, você elimina intermediários e garante as melhores condições tanto na venda quanto na locação." },
                { icon: <ClipboardCheck className="w-10 h-10" />, title: "Garantia de qualidade", desc: "Nossas fôrmas plásticas são produzidas com materiais de alta resistência, suportando múltiplos ciclos de concretagem com perfeição." },
                { icon: <Shield className="w-10 h-10" />, title: "Variedade total", desc: "Disponibilizamos todos os tamanhos de cubetas do mercado para que seu projeto seja executado fielmente, sem adaptações improvisadas." }
              ].map((item, i) => (
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} key={i} className="text-left group p-8 rounded-2xl hover:bg-[#e6c615] transition-colors duration-300">
                  <div className="text-[#e6c615] group-hover:text-white mb-6 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-400 group-hover:text-white/90 transition-colors duration-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e6c615] hover:bg-[#D4B81A] text-[#1A2128] font-semibold px-8 py-4 rounded transition-colors duration-300 cursor-pointer"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-24 bg-white rounded-2xl shadow-sm">
          <div className="w-full max-w-[1240px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl">
                <div className="flex items-center gap-2 text-[#e6c615] font-bold text-sm tracking-wider uppercase mb-4">
                  <span className="w-8 h-px bg-[#e6c615]" /> NOSSOS PRODUTOS EM CAMPO
                </div>
                <h2 className="font-heading text-[42px] font-bold text-[#1F2C35] leading-tight text-balance">
                  Cubetas plásticas aplicadas em projetos reais
                </h2>
              </motion.div>
              <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-gray-500 max-w-md">
                Confira como nossas cubetas para lajes nervuradas garantem um canteiro de obras mais limpo, organizado e com um acabamento estrutural superior em cada etapa da concretagem.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                <img src="imagens/img1.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Project 1" width="584" height="438" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                <img src="imagens/img4.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Project 2" width="584" height="438" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                <img src="imagens/img3.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Project 3" width="584" height="438" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                <img src="imagens/img6.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Project 4" width="584" height="438" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
          </div>
        </section>



        {/* Commitment Section */}
        <section className="py-24 bg-[#1A2128] text-white rounded-2xl overflow-hidden shadow-sm">
          <div className="w-full max-w-[1240px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left Content */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
                <div className="w-72 h-20 rounded-2xl overflow-hidden mb-12">
                  <img src="imagens/logo-fundo.jpg" className="w-full h-full object-cover" alt="Construction workers" width="288" height="80" loading="lazy" decoding="async" />
                </div>

                <h2 className="font-heading text-[42px] font-bold leading-tight mb-6">
                  Veja na prática a facilidade das nossas cubetas
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8">
                  Entenda por que nossas cubetas são as preferidas dos profissionais de campo. O vídeo mostra a leveza do material e a agilidade que o sistema nervurado proporciona, otimizando o cronograma da sua construção de ponta a ponta.
                </p>
                <div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#e6c615] hover:bg-[#D4B81A] text-[#1A2128] px-8 py-4 rounded font-medium flex items-center gap-2 transition-colors inline-flex"
                  >
                    Solicitar orçamento <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>

              {/* Right Video Embed */}
              <div className="flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative w-full max-w-[400px] aspect-[9/16] rounded-[32px] overflow-hidden shadow-2xl bg-black border-8 border-[#1F2C35]"
                >
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://player.vimeo.com/video/1184877336?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    title="Anisio Horta - Cubetas"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                  </iframe>
                </motion.div>
              </div>

            </div>
          </div>
        </section>



        {/* FAQ */}
        <section className="py-24 bg-white rounded-2xl shadow-sm">
          <div className="w-full max-w-[1240px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl">
                <div className="flex items-center gap-2 text-[#e6c615] font-bold text-sm tracking-wider uppercase mb-4">
                  <span className="w-8 h-px bg-[#e6c615]" /> FAQS
                </div>
                <h2 className="font-heading text-[42px] font-bold text-[#1F2C35] leading-tight">
                  Dúvidas frequentes
                </h2>
              </motion.div>
              <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-gray-500 max-w-md lg:mt-10 leading-relaxed">
                Reunimos as principais dúvidas de engenheiros e gestores de obras para ajudar você a tomar a melhor decisão técnica. Se não encontrar a resposta que procura, nossa equipe está pronta para atender você via WhatsApp.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-4">
                {faqsLeft.map((faq, i) => (
                  <div key={i} className={`rounded-xl overflow-hidden ${openFaqs.includes(i) ? 'bg-[#1A2128]' : 'bg-[#F3F6F8]'} transition-all`}>
                    <button
                      className={`w-full text-left p-6 flex justify-between items-center gap-4 ${openFaqs.includes(i) ? 'text-white' : 'text-[#1F2C35]'} cursor-pointer`}
                      onClick={() => toggleFaq(i)}
                    >
                      <span className="font-semibold">{faq.q}</span>
                      {openFaqs.includes(i) ?
                        <div className="w-8 h-8 rounded bg-[#e6c615] text-white flex items-center justify-center shrink-0">
                          <ChevronUp className="w-5 h-5" />
                        </div> :
                        <div className="w-8 h-8 rounded bg-white border border-gray-100 text-gray-400 flex items-center justify-center shrink-0">
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      }
                    </button>
                    {openFaqs.includes(i) && (
                      <div className="p-6 pt-0 bg-[#1A2128] text-white/80 text-sm leading-relaxed border-t border-gray-700 mt-2">
                        <div className="pt-4">{faq.a}</div>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="space-y-4">
                {faqsRight.map((faq, i) => {
                  const index = i + faqsLeft.length;
                  return (
                    <div key={index} className={`rounded-xl overflow-hidden ${openFaqs.includes(index) ? 'bg-[#1A2128]' : 'bg-[#F3F6F8]'} transition-all`}>
                      <button
                        className={`w-full text-left p-6 flex justify-between items-center gap-4 ${openFaqs.includes(index) ? 'text-white' : 'text-[#1F2C35]'} cursor-pointer`}
                        onClick={() => toggleFaq(index)}
                      >
                        <span className="font-semibold">{faq.q}</span>
                        {openFaqs.includes(index) ?
                          <div className="w-8 h-8 rounded bg-[#e6c615] text-white flex items-center justify-center shrink-0">
                            <ChevronUp className="w-5 h-5" />
                          </div> :
                          <div className="w-8 h-8 rounded bg-white border border-gray-100 text-gray-400 flex items-center justify-center shrink-0">
                            <ChevronDown className="w-5 h-5" />
                          </div>
                        }
                      </button>
                      {openFaqs.includes(index) && (
                        <div className="p-6 pt-0 bg-[#1A2128] text-white/80 text-sm leading-relaxed border-t border-gray-700 mt-2">
                          <div className="pt-4">{faq.a}</div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1A2128] text-white pt-20 pb-10 rounded-2xl overflow-hidden shadow-sm">
          <div className="w-full max-w-[1240px] mx-auto px-6">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex justify-center mb-16">
              <img src="imagens/logo-fundo.jpg" alt="Logo" width={200} height={200} className="rounded-xl" loading="lazy" decoding="async" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <MapPin className="w-5 h-5 text-[#e6c615]" aria-hidden="true" />
                <span className="text-sm">Rodovia Cezário José de Castilho (SP-321), Km 361 Arealva - SP</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2026 — Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-4 text-gray-400">
                <a href="#" className="hover:text-white transition-colors cursor-pointer" aria-label="Siga-nos no Instagram">
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </div>
        </footer>

        {/* WhatsApp Floating Button */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale conosco pelo WhatsApp"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1, type: "spring" }}
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 flex items-center justify-center group cursor-pointer"
        >
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
          <WhatsAppIcon className="w-8 h-8 relative z-10" />
        </motion.a>

      </div>
    </div>
  );
}
