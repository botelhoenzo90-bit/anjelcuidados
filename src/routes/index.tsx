import { createFileRoute } from "@tanstack/react-router";
import { Baby, BabyIcon, CalendarCheck2, Check, ChevronDown, ChevronRight, CircleCheck, Heart, HeartHandshake, Home, Instagram, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles, Stethoscope, UserRoundCheck, UsersRound } from "lucide-react";
import { useState } from "react";

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
  { number: "1", title: "Conte o que precisa", text: "Fale pelo WhatsApp sobre a criança, o período e o tipo de apoio que sua família procura." },
  { number: "2", title: "Alinhamos os detalhes", text: "Entendemos a rotina, os cuidados necessários, data, horário e duração do atendimento." },
  { number: "3", title: "Confirmamos o atendimento", text: "Tudo fica combinado com clareza antes do profissional se deslocar até sua casa." },
  { number: "4", title: "Cuidado no seu lar", text: "O acompanhamento acontece no ambiente familiar, com presença e atenção." },
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);


  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="site-shell">
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

        </div>
      </section>

      <section className="marquee-section" aria-label="Serviços e diferenciais"><div className="marquee-track">{["Recém-nascido", "Crianças até 6 anos", "Pós-parto", "Amamentação", "Pós-operatório", "Viagens", "Acompanhamento domiciliar", "Recém-nascido"].map((item, index) => <span key={`${item}-${index}`}><Heart size={14} fill="currentColor" /> {item}</span>)}</div></section>

      <section className="section pain-section">
        <div className="container centered-story">
          <div className="pain-copy centered-copy"><div className="section-kicker">APOIO PARA A VIDA REAL</div><h2>Quando você precisa sair, <span>o cuidado continua.</span></h2><p>A rotina nem sempre permite que os pais estejam em todos os momentos. A Anjel Cuidados oferece apoio profissional no conforto da sua casa, para que você possa cumprir seus compromissos com mais tranquilidade.</p>
          <div className="check-list centered-check-list">{["Precisa sair e quer manter seu pequeno em casa?","Tem uma reunião, casamento ou viagem programada?","Está no pós-parto e precisa de apoio na rotina?","Quer contar com um profissional de enfermagem em casa?"].map((item)=><div key={item}><span><Check size={15}/></span>{item}</div>)}</div>
          <a className="button button-primary compact" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Conhecer o atendimento</a></div>
        </div>
      </section>


      <section className="section soft-section" id="servicos">
        <div className="container">
          <div className="section-heading center-heading"><div className="section-kicker">CUIDADOS PERSONALIZADOS</div><h2>Quando sua família precisa de apoio, <span>você não precisa passar por isso sozinho.</span></h2><p>Serviços pensados para trazer mais segurança, praticidade e tranquilidade para diferentes momentos da rotina familiar.</p></div>
          <div className="service-marquee" aria-label="Cuidados personalizados">
            <div className="service-track">
              {[...services, ...services].map((service, index) => { const Icon = service.icon; return <article className={"service-card tone-" + service.tone} key={service.title + "-" + index}><div className="service-icon"><Icon size={25} /></div><h3>{service.title}</h3><p>{service.description}</p><a className="service-link" href={WHATSAPP} target="_blank" rel="noreferrer">Agendar atendimento <ChevronRight size={15} /></a></article>; })}
            </div>
          </div>
          <div className="section-action"><a className="button button-primary compact" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Agendar atendimento</a></div>
        </div>
      </section>


      <section className="section feature-carousel-section">
        <div className="container">
          <div className="section-heading center-heading feature-centered-heading"><div className="section-kicker">POR QUE TER APOIO?</div><h2>Mais tranquilidade para você. <span>Mais acolhimento para quem você ama.</span></h2><p>Uma rede de apoio para preservar a rotina da criança e ajudar sua família nos momentos em que você mais precisa.</p></div>
          <div className="info-marquee" aria-label="Benefícios do atendimento">
            <div className="info-track">
              {[...infoSlides,...infoSlides].map((slide,index)=>{const Icon=slide.icon;return <article className="info-card" key={slide.title+"-"+index}><div className="info-card-icon"><Icon size={30}/></div><span>ANJEL CUIDADOS</span><h3>{slide.title}</h3><p>{slide.text}</p></article>})}
            </div>
          </div>
          <div className="section-action"><a className="button button-primary compact" href={WHATSAPP} target="_blank" rel="noreferrer"><CalendarCheck2 size={18}/> Agendar atendimento</a></div>
        </div>
      </section>


      <section className="section info-section" id="como-funciona">
        <div className="container">
          <div className="section-heading center-heading"><div className="section-kicker">COMO FUNCIONA</div><h2>Um atendimento pensado para a sua rotina.</h2><p>Você conta o que precisa, a equipe entende a rotina e combina cada detalhe antes do atendimento.</p></div>
          <div className="steps-grid">{steps.map((step) => <div className="step-card" key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div>
          <div className="section-action"><a className="button button-primary compact" href={WHATSAPP} target="_blank" rel="noreferrer"><CalendarCheck2 size={18} /> Agendar atendimento</a></div>
        </div>
      </section>


      <section className="section packages-section">
        <div className="container">
          <div className="section-heading center-heading"><div className="section-kicker">ATENDIMENTOS</div><h2>Escolha o cuidado que <span>faz sentido para sua família.</span></h2><p>Fale com a equipe para entender a disponibilidade e montar o atendimento conforme sua necessidade.</p></div>
          <div className="package-grid">{[
            {number:"01",title:"Primeiros cuidados com o RN",text:"Apoio para os primeiros dias, rotina e necessidades do recém-nascido.",icon:Baby},
            {number:"02",title:"Acompanhamento infantil",text:"Presença e suporte para crianças de 0 a 6 anos em casa.",icon:UsersRound},
            {number:"03",title:"Compromisso tranquilo",text:"Acompanhamento para reuniões, casamentos, viagens e outros compromissos.",icon:CalendarCheck2},
            {number:"04",title:"Pós-parto e amamentação",text:"Apoio para a mãe e o bebê durante uma fase de adaptação intensa.",icon:Heart},
            {number:"05",title:"Pós-operatório",text:"Acompanhamento durante a recuperação, conforme o cuidado contratado.",icon:ShieldCheck},
            {number:"06",title:"Cuidados especiais",text:"Converse com a equipe sobre uma necessidade específica da sua família.",icon:Stethoscope},
          ].map((item)=>{const Icon=item.icon;return <article className="package-card" key={item.number}><div className="package-icon-centered"><Icon size={28}/><span>{item.number}</span></div><h3>{item.title}</h3><p>{item.text}</p></article>})}</div>
          <div className="section-action"><a className="button button-primary compact" href={WHATSAPP} target="_blank" rel="noreferrer"><CalendarCheck2 size={18}/> Agendar atendimento</a></div>
        </div>
      </section>


      <section className="section about-section" id="sobre">
        <div className="container centered-about">
          <div className="about-copy centered-copy"><div className="section-kicker">QUEM SOMOS</div><h2>Anjel Cuidados: <span>presença que faz bem.</span></h2><p>A Anjel Cuidados nasceu para apoiar famílias que precisam de uma pessoa de confiança ao lado de seus pequenos em momentos da rotina em que não conseguem estar presentes.</p><p>Nosso atendimento é domiciliar, em Teresina-PI, com profissionais da área de enfermagem com experiência e uma proposta centrada em cuidado, responsabilidade e acolhimento.</p><div className="about-points centered-about-points"><div><HeartHandshake/><span><strong>Humanização</strong><small>Respeito à rotina e à individualidade da família.</small></span></div><div><ShieldCheck/><span><strong>Responsabilidade</strong><small>Atendimento com atenção aos limites e necessidades combinados.</small></span></div><div><Home/><span><strong>Conforto</strong><small>O cuidado acontece onde a criança se sente em casa.</small></span></div></div><div className="section-action"><a className="button button-primary compact" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Agendar atendimento</a></div></div>
        </div>
      </section>


      <section className="section testimonials-section">
        <div className="container">
          <div className="section-heading center-heading"><div className="section-kicker">EXPERIÊNCIAS</div><h2>Famílias que encontraram <span>apoio na rotina.</span></h2><p>Uma experiência de cuidado construída com presença, respeito e atenção.</p></div>
          <div className="testimonial-marquee" aria-label="Depoimentos">
            <div className="testimonial-track">
              {[...testimonials, ...testimonials].map((testimonial, index) => <article className="testimonial-card" key={testimonial.name + "-" + index}><div className="stars">★★★★★</div><blockquote>“{testimonial.text}”</blockquote><div className="testimonial-author"><div className="avatar">{testimonial.name.charAt(0)}</div><div><strong>{testimonial.name}</strong><small>{testimonial.role}</small></div></div></article>)}
            </div>
          </div>
          <div className="section-action"><a className="button button-primary compact" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Agendar atendimento</a></div>
          <p className="testimonial-note">Depoimentos ilustrativos para a estrutura do site. Substitua pelos depoimentos reais das famílias atendidas antes da publicação.</p>
        </div>
      </section>


      <section className="section faq-section" id="duvidas">
        <div className="container faq-grid"><div><div className="section-kicker">DÚVIDAS FREQUENTES</div><h2>Antes de chamar, <span>talvez sua dúvida já esteja aqui.</span></h2><p>Se não encontrar a resposta, fale diretamente com a Anjel pelo WhatsApp.</p><a className="button button-primary compact" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Falar com a equipe</a></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={faq.q}><button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{faq.q}</span><ChevronDown size={19} /></button>{openFaq === index && <p>{faq.a}</p>}</div>)}</div></div>
      </section>

      <section className="cta-section"><div className="container cta-inner"><div><div className="section-kicker">ANJEL CUIDADOS • TERESINA-PI</div><h2>Precisa de apoio para cuidar do seu pequeno?</h2><p>Conte para a gente o que sua família precisa. Vamos conversar sobre o atendimento.</p></div><a className="button button-white" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={20} /> Agendar atendimento</a></div></section>

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
