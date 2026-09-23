import { createFileRoute } from "@tanstack/react-router";
import { Baby, BabyIcon, CalendarCheck2, Check, ChevronDown, ChevronLeft, ChevronRight, CircleCheck, Heart, HeartHandshake, Home, Instagram, MapPin, Menu, MessageCircle, Phone, ShieldCheck, Sparkles, Stethoscope, UserRoundCheck, UsersRound, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const WHATSAPP = "https://wa.me/558681932631?text=Ol%C3%A1%20Anjel%20Cuidados!%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20domiciliar.";

const services = [
  { title: "Cuidados com RN", description: "Apoio nos primeiros dias do recém-nascido, com cuidado, atenção e orientação à família.", icon: Baby, tone: "pink" },
  { title: "Acompanhamento infantil", description: "Cuidados para crianças de 0 a 6 anos quando os pais precisam de apoio em sua rotina.", icon: HeartHandshake, tone: "lilac" },
  { title: "Acompanhamento domiciliar", description: "Um profissional vai até sua casa para oferecer presença e suporte no ambiente familiar.", icon: Home, tone: "cream" },
  { title: "Pós-parto e amamentação", description: "Suporte no período pós-parto e acolhimento para tornar essa nova fase mais tranquila.", icon: Heart, tone: "rose" },
  { title: "Pós-operatório", description: "Acompanhamento e apoio durante a recuperação, de acordo com as necessidades da família.", icon: ShieldCheck, tone: "blue" },
  { title: "Acompanhamento em viagens", description: "Mais tranquilidade para reuniões, casamentos, viagens e outros compromissos.", icon: MapPin, tone: "mint" },
];

const steps = [
  { number: "01", title: "Você entra em contato", text: "Conte o que sua família precisa, o período e o tipo de acompanhamento desejado." },
  { number: "02", title: "Entendemos a rotina", text: "Conversamos sobre a criança, os cuidados necessários e como podemos ajudar." },
  { number: "03", title: "Definimos o atendimento", text: "Combinamos data, horário, duração e todos os detalhes do acompanhamento." },
  { number: "04", title: "Cuidado no seu lar", text: "Um técnico de enfermagem com experiência realiza o acompanhamento combinado." },
];

const testimonials = [
  { name: "Mariana S.", role: "Mãe de recém-nascido", text: "Ter alguém experiente ao nosso lado nos primeiros dias fez toda a diferença. Me senti muito mais segura e acolhida." },
  { name: "Juliana A.", role: "Mãe de criança", text: "Precisávamos sair por algumas horas e ficamos tranquilos sabendo que nosso filho estaria em casa e acompanhado." },
  { name: "Camila R.", role: "Pós-parto", text: "O atendimento foi cuidadoso, respeitoso e muito humano. Foi exatamente o apoio que nossa família precisava." },
];

const infoSlides = [
  { title: "Seu bebê continua em casa", text: "Você não precisa mudar toda a rotina para ter apoio. O atendimento acontece no ambiente familiar, com conforto e proximidade.", icon: Home },
  { title: "Apoio para momentos especiais", text: "Reunião, casamento, compromisso profissional ou viagem: conte com suporte para cuidar do seu pequeno enquanto você resolve o que precisa.", icon: CalendarCheck2 },
  { title: "Primeiros cuidados com o RN", text: "O começo pode trazer muitas dúvidas. O acompanhamento ajuda a família a atravessar essa fase com mais organização e acolhimento.", icon: BabyIcon },
  { title: "Cuidado que respeita a família", text: "Cada atendimento é combinado de acordo com a rotina e as necessidades apresentadas pela família.", icon: HeartHandshake },
];

const faqs = [
  { q: "Onde o atendimento é realizado?", a: "O atendimento é domiciliar, em Teresina-PI. A equipe vai até a residência da família conforme o serviço e o período combinado." },
  { q: "Quem realiza os cuidados?", a: "O serviço é realizado por técnico de enfermagem com experiência, conforme as necessidades e o escopo do acompanhamento contratado." },
  { q: "Para quais idades vocês atendem?", a: "O foco da Anjel Cuidados é o acompanhamento de recém-nascidos e crianças de 0 a 6 anos." },
  { q: "Posso contratar para uma ocasião específica?", a: "Sim. Você pode consultar a disponibilidade para compromissos como reuniões, casamentos, viagens e outros períodos em que precise de apoio." },
  { q: "Vocês acompanham o bebê no pós-parto?", a: "Sim. A Anjel Cuidados oferece acompanhamento no pós-parto e apoio relacionado aos primeiros cuidados com o recém-nascido e à amamentação." },
  { q: "Como faço para saber valores e disponibilidade?", a: "Entre em contato pelo WhatsApp. A equipe pode entender sua necessidade e informar as opções de atendimento disponíveis." },
];

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [infoIndex, setInfoIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const visibleServices = useMemo(() => [0, 1, 2].map((offset) => services[(serviceIndex + offset) % services.length]), [serviceIndex]);

  useEffect(() => {
    const timer = window.setInterval(() => setInfoIndex((current) => (current + 1) % infoSlides.length), 4800);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setTestimonialIndex((current) => (current + 1) % testimonials.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <button className="brand" onClick={() => goTo("inicio")} aria-label="Ir para o início">
            <span className="brand-mark"><Heart size={18} fill="currentColor" /></span>
            <span><strong>Anjel</strong><small>Cuidados</small></span>
          </button>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <button onClick={() => goTo("servicos")}>Cuidados</button>
            <button onClick={() => goTo("como-funciona")}>Como funciona</button>
            <button onClick={() => goTo("sobre")}>Quem somos</button>
            <button onClick={() => goTo("duvidas")}>Dúvidas</button>
          </nav>
          <a className="nav-cta" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Falar no WhatsApp</a>
          <button className="menu-button" onClick={() => setMobileOpen((value) => !value)} aria-label="Abrir menu">{mobileOpen ? <X /> : <Menu />}</button>
        </div>
        {mobileOpen && <div className="mobile-menu">
          <button onClick={() => goTo("servicos")}>Cuidados</button>
          <button onClick={() => goTo("como-funciona")}>Como funciona</button>
          <button onClick={() => goTo("sobre")}>Quem somos</button>
          <button onClick={() => goTo("duvidas")}>Dúvidas</button>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">Falar no WhatsApp</a>
        </div>}
      </header>

      <section id="inicio" className="hero-section">
        <div className="hero-blur hero-blur-one" /><div className="hero-blur hero-blur-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> Cuidado domiciliar em Teresina-PI</div>
            <h1>Seu filho cuidado com carinho, <em>mesmo quando você precisa sair.</em></h1>
            <p className="hero-subtitle">A Anjel Cuidados leva até sua casa um técnico de enfermagem com experiência para acompanhar recém-nascidos e crianças de 0 a 6 anos.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Quero conversar pelo WhatsApp</a>
              <button className="button button-ghost" onClick={() => goTo("como-funciona")}>Entenda como funciona <ChevronRight size={18} /></button>
            </div>
            <div className="hero-trust">
              <span><CircleCheck size={17} /> Atendimento domiciliar</span><span><CircleCheck size={17} /> Profissional experiente</span><span><CircleCheck size={17} /> Cuidado humanizado</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo-frame">
              <img src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1000&q=88" alt="Mãe segurando seu bebê com carinho" />
              <div className="hero-photo-overlay" />
              <div className="floating-card floating-card-top"><span className="mini-icon pink"><Heart size={17} fill="currentColor" /></span><div><strong>Cuidado que acolhe</strong><small>Presença para sua família</small></div></div>
              <div className="floating-card floating-card-bottom"><span className="mini-icon lilac"><ShieldCheck size={17} /></span><div><strong>Na sua casa</strong><small>Teresina • atendimento domiciliar</small></div></div>
            </div>
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          </div>
        </div>
      </section>

      <section className="marquee-section" aria-label="Serviços e diferenciais"><div className="marquee-track">{["Recém-nascido", "Crianças até 6 anos", "Pós-parto", "Amamentação", "Pós-operatório", "Viagens", "Acompanhamento domiciliar", "Recém-nascido"].map((item, index) => <span key={`${item}-${index}`}><Heart size={14} fill="currentColor" /> {item}</span>)}</div></section>

      <section className="section soft-section" id="servicos">
        <div className="container">
          <div className="section-heading center-heading"><div className="section-kicker">CUIDADOS PERSONALIZADOS</div><h2>Quando sua família precisa de apoio, <span>você não precisa passar por isso sozinho.</span></h2><p>Serviços pensados para trazer mais segurança, praticidade e tranquilidade para diferentes momentos da rotina familiar.</p></div>
          <div className="service-carousel">
            <button className="round-arrow" onClick={() => setServiceIndex((current) => (current - 1 + services.length) % services.length)} aria-label="Serviços anteriores"><ChevronLeft /></button>
            <div className="service-grid">{visibleServices.map((service) => { const Icon = service.icon; return <article className={`service-card tone-${service.tone}`} key={service.title}><div className="service-icon"><Icon size={25} /></div><h3>{service.title}</h3><p>{service.description}</p><span className="service-link">Saiba mais <ChevronRight size={15} /></span></article>; })}</div>
            <button className="round-arrow" onClick={() => setServiceIndex((current) => (current + 1) % services.length)} aria-label="Próximos serviços"><ChevronRight /></button>
          </div>
          <div className="carousel-dots">{services.map((_, index) => <button key={index} className={index === serviceIndex ? "active" : ""} onClick={() => setServiceIndex(index)} aria-label={`Ir para serviço ${index + 1}`} />)}</div>
        </div>
      </section>

      <section className="section pain-section">
        <div className="container pain-grid">
          <div className="pain-image-wrap"><img src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1000&q=88" alt="Família reunida em casa" /><div className="image-caption"><Heart size={17} fill="currentColor" /> Mais tranquilidade para a família</div></div>
          <div className="pain-copy"><div className="section-kicker">FEITO PARA A VIDA REAL</div><h2>Você ama estar presente. <span>Mas nem sempre consegue estar.</span></h2><p>Tem dias em que você precisa trabalhar, resolver algo, viajar, participar de uma reunião ou simplesmente ter um momento para você. E isso não diminui o seu cuidado com seu filho.</p><div className="check-list">{["Precisa sair e não quer deixar seu bebê com qualquer pessoa?", "Vai viajar ou participar de um compromisso importante?", "Está no pós-parto e precisa de apoio com a rotina do bebê?", "Quer ter suporte profissional dentro da sua própria casa?"].map((item) => <div key={item}><span><Check size={15} /></span>{item}</div>)}</div><a className="button button-primary compact" href={WHATSAPP} target="_blank" rel="noreferrer">Conversar com a Anjel <ChevronRight size={18} /></a></div>
        </div>
      </section>

      <section className="section info-section" id="como-funciona">
        <div className="container">
          <div className="section-heading center-heading"><div className="section-kicker">COMO FUNCIONA</div><h2>Seu cuidado começa com uma conversa.</h2><p>Do primeiro contato ao atendimento, tudo é combinado com clareza e atenção.</p></div>
          <div className="steps-grid">{steps.map((step) => <div className="step-card" key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div>
        </div>
      </section>

      <section className="section feature-carousel-section">
        <div className="container feature-panel">
          <div className="feature-copy"><div className="section-kicker">POR QUE TER APOIO?</div><h2>Mais tranquilidade para você. <span>Mais acolhimento para quem você ama.</span></h2><p>O atendimento domiciliar foi pensado para preservar a rotina da criança e oferecer à família uma rede de apoio quando ela mais precisa.</p><div className="feature-bullets"><span><UserRoundCheck size={17} /> Profissional com experiência</span><span><Home size={17} /> Atendimento no ambiente familiar</span><span><HeartHandshake size={17} /> Olhar humano e individualizado</span></div><a className="text-link" href={WHATSAPP} target="_blank" rel="noreferrer">Tirar dúvidas no WhatsApp <ChevronRight size={17} /></a></div>
          <div className="feature-slider"><div className="feature-slide">{(() => { const Icon = infoSlides[infoIndex].icon; return <div className="feature-icon"><Icon size={32} /></div>; })()}<span className="slide-count">0{infoIndex + 1} / 0{infoSlides.length}</span><h3>{infoSlides[infoIndex].title}</h3><p>{infoSlides[infoIndex].text}</p><div className="feature-controls"><button onClick={() => setInfoIndex((current) => (current - 1 + infoSlides.length) % infoSlides.length)} aria-label="Anterior"><ChevronLeft /></button><button onClick={() => setInfoIndex((current) => (current + 1) % infoSlides.length)} aria-label="Próximo"><ChevronRight /></button></div></div></div>
        </div>
      </section>

      <section className="section packages-section">
        <div className="container">
          <div className="section-heading center-heading"><div className="section-kicker">ATENDIMENTOS</div><h2>Escolha o cuidado que <span>faz sentido para sua família.</span></h2><p>Fale com a equipe para entender a disponibilidade e montar o atendimento conforme sua necessidade.</p></div>
          <div className="package-grid">{[
            { number: "01", title: "Primeiros cuidados com o RN", text: "Apoio para os primeiros dias, rotina e necessidades do recém-nascido.", icon: Baby },
            { number: "02", title: "Acompanhamento infantil", text: "Presença e suporte para crianças de 0 a 6 anos em casa.", icon: UsersRound },
            { number: "03", title: "Compromisso tranquilo", text: "Acompanhamento para reuniões, casamentos, viagens e outros compromissos.", icon: CalendarCheck2 },
            { number: "04", title: "Pós-parto e amamentação", text: "Apoio para a mãe e o bebê durante uma fase de adaptação intensa.", icon: Heart },
            { number: "05", title: "Pós-operatório", text: "Acompanhamento durante a recuperação, conforme o cuidado contratado.", icon: ShieldCheck },
            { number: "06", title: "Cuidados especiais", text: "Converse com a equipe sobre uma necessidade específica da sua família.", icon: Stethoscope },
          ].map((item) => { const Icon = item.icon; return <article className="package-card" key={item.number}><div className="package-top"><span>{item.number}</span><Icon size={25} /></div><h3>{item.title}</h3><p>{item.text}</p><a href={WHATSAPP} target="_blank" rel="noreferrer">Consultar atendimento <ChevronRight size={15} /></a></article>; })}</div>
        </div>
      </section>

      <section className="section about-section" id="sobre">
        <div className="container about-grid">
          <div className="about-photo"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=88" alt="Profissional de enfermagem em atendimento" /><div className="about-badge"><ShieldCheck size={18} /><strong>Cuidado profissional</strong><small>com acolhimento e respeito</small></div></div>
          <div className="about-copy"><div className="section-kicker">QUEM SOMOS</div><h2>Anjel Cuidados: <span>presença que faz bem.</span></h2><p>A Anjel Cuidados nasceu para apoiar famílias que precisam de uma pessoa de confiança ao lado de seus pequenos em momentos da rotina em que não conseguem estar presentes.</p><p>Nosso atendimento é domiciliar, em Teresina-PI, com profissionais da área de enfermagem com experiência e uma proposta centrada em cuidado, responsabilidade e acolhimento.</p><div className="about-points"><div><HeartHandshake /><span><strong>Humanização</strong><small>Respeito à rotina e à individualidade da família.</small></span></div><div><ShieldCheck /><span><strong>Responsabilidade</strong><small>Atendimento com atenção aos limites e necessidades combinados.</small></span></div><div><Home /><span><strong>Conforto</strong><small>O cuidado acontece onde a criança se sente em casa.</small></span></div></div></div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-heading center-heading"><div className="section-kicker">EXPERIÊNCIAS</div><h2>Famílias que encontraram <span>apoio na rotina.</span></h2></div>
          <div className="testimonial-carousel"><button className="round-arrow" onClick={() => setTestimonialIndex((current) => (current - 1 + testimonials.length) % testimonials.length)} aria-label="Avaliação anterior"><ChevronLeft /></button><article className="testimonial-card"><div className="stars">★★★★★</div><blockquote>“{testimonials[testimonialIndex].text}”</blockquote><div className="testimonial-author"><div className="avatar">{testimonials[testimonialIndex].name.charAt(0)}</div><div><strong>{testimonials[testimonialIndex].name}</strong><small>{testimonials[testimonialIndex].role}</small></div></div></article><button className="round-arrow" onClick={() => setTestimonialIndex((current) => (current + 1) % testimonials.length)} aria-label="Próxima avaliação"><ChevronRight /></button></div>
          <div className="carousel-dots">{testimonials.map((_, index) => <button key={index} className={index === testimonialIndex ? "active" : ""} onClick={() => setTestimonialIndex(index)} aria-label={`Avaliação ${index + 1}`} />)}</div>
          <p className="testimonial-note">Depoimentos ilustrativos para a estrutura do site. Substitua pelos depoimentos reais das famílias atendidas antes da publicação.</p>
        </div>
      </section>

      <section className="section faq-section" id="duvidas">
        <div className="container faq-grid"><div><div className="section-kicker">DÚVIDAS FREQUENTES</div><h2>Antes de chamar, <span>talvez sua dúvida já esteja aqui.</span></h2><p>Se não encontrar a resposta, fale diretamente com a Anjel pelo WhatsApp.</p><a className="button button-primary compact" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Falar com a equipe</a></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={faq.q}><button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{faq.q}</span><ChevronDown size={19} /></button>{openFaq === index && <p>{faq.a}</p>}</div>)}</div></div>
      </section>

      <section className="cta-section"><div className="container cta-inner"><div><div className="section-kicker">ANJEL CUIDADOS • TERESINA-PI</div><h2>Precisa de apoio para cuidar do seu pequeno?</h2><p>Conte para a gente o que sua família precisa. Vamos conversar sobre o atendimento.</p></div><a className="button button-white" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={20} /> Quero falar pelo WhatsApp</a></div></section>

      <footer className="site-footer"><div className="container footer-grid"><div><div className="brand footer-brand"><span className="brand-mark"><Heart size={18} fill="currentColor" /></span><span><strong>Anjel</strong><small>Cuidados</small></span></div><p>Cuidado que acolhe. Presença que faz bem.</p></div><div><h4>Atendimento</h4><span><MapPin size={15} /> Teresina • Piauí</span><a href={WHATSAPP} target="_blank" rel="noreferrer"><Phone size={15} /> (86) 98193-2631</a></div><div><h4>Conecte-se</h4><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Anjel Cuidados. Todos os direitos reservados.</span><span>Atendimento humanizado e profissional.</span></div></footer>

      <a className="floating-whatsapp" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com a Anjel Cuidados pelo WhatsApp"><MessageCircle size={27} /></a>
    </main>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anjel Cuidados | Cuidado domiciliar em Teresina" },
      { name: "description", content: "Acompanhamento domiciliar para recém-nascidos e crianças de 0 a 6 anos em Teresina-PI. Cuidado profissional, humanizado e acolhedor." },
      { property: "og:title", content: "Anjel Cuidados | Cuidado que acolhe" },
      { property: "og:description", content: "Acompanhamento domiciliar para sua família em Teresina-PI." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});
