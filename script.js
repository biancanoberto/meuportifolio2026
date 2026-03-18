const i18n = {
  pt: {
    nav_about: "Sobre",
    nav_projects: "Projetos",
    nav_skills: "Habilidades",
    nav_contact: "Contato",

    hero_role: "Designer & Desenvolvedora Digital",
    hero_line1: "Onde estratégia encontra estética e tecnologia.",
    hero_line2: "Disponível para projetos criativos, branding e soluções digitais.",
    hero_cta_projects: "Ver projetos →",
    hero_cta_contact: "Entrar em contato →",

    poster_big: "Bem-vindos\nao meu\nportfólio",
    poster_small: "(Designer & Dev)",

    about_title: "Sobre",
    about_p1: "Uno tecnologia, branding e experiência para criar soluções digitais com intenção.",
    about_p2: "Minha formação em Multimídia e Ciência da Computação me permite ir além da estética — penso em estrutura, posicionamento e impacto.",
    about_p3: "Acredito que design não é apenas visual: é estratégia, comunicação e experiência.",
    about_diff_title: "O que me diferencia",
    about_li1: "Visão estratégica + sensibilidade estética",
    about_li2: "Base técnica em desenvolvimento",
    about_li3: "Pensamento orientado à experiência do usuário",
    about_li4: "Organização e clareza na execução",

    projects_title: "Projetos",
    role_label: "Meu papel:",
    result_label: "Resultado:",
    impact_label: "Impacto:",
    deliverables_label: "Entregáveis:",

    p_hearview_tag: "Inovação & Acessibilidade",
    p_hearview_desc:
      "Projeto de um totem interativo voltado a melhorar a comunicação e a inclusão de pessoas com deficiência auditiva no ambiente corporativo.",
    p_hearview_role: "Liderança, pesquisa e inovação.",
    p_hearview_result: "Projeto vencedor em competição avaliada por especialista na área.",

    p_casarosa_tag: "Organização & Análise de Dados",
    p_casarosa_desc:
      "Estruturação e manutenção de planilhas estratégicas para controle de vendas e estoque em bazar beneficente e loja temporária.",
    p_casarosa_role: "Organização de dados e otimização de controle.",
    p_casarosa_impact: "Melhoria na visualização de resultados e apoio à tomada de decisão.",

    p_python_tag: "Educação & Tecnologia",
    p_python_desc:
      "Minicurso de introdução à programação com foco em uma linguagem acessível e prática.",
    p_python_role: "Ensino, acompanhamento e monitoramento do aprendizado.",

    p_cafe_title: "Amô & Café",
    p_cafe_tag: "Branding & Produto Digital",
    p_cafe_desc:
      "Conceito de marca de cafeteria com identidade visual, tom de voz e direção criativa (vibe parisiense / Emily in Paris), pensado para presença digital e experiência no espaço físico.",
    p_cafe_deliverables:
      "Nome, slogan, paleta, tipografia, guias de conteúdo e peças para o feed.",

    skills_title: "Bianca’s Pack",

    contact_title: "Vamos construir algo com intenção.",
    contact_sub: "Disponível para:",
    c1: "• Projetos criativos",
    c2: "• Desenvolvimento web",
    c3: "• Branding estratégico",
    c4: "• Colaborações digitais",

    wa_button: "enviar no whatsapp",
    footer_note: "© 2026 Bianca Noberto. Todos os direitos reservados.",

    letter_hint: "clique para abrir",
    contact_form_title: "entre em contato",
  },

  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",

    hero_role: "Designer & Digital Developer",
    hero_line1: "Where strategy meets aesthetics and technology.",
    hero_line2: "Available for creative projects, branding, and digital solutions.",
    hero_cta_projects: "View projects →",
    hero_cta_contact: "Get in touch →",

    poster_big: "Welcome\nto my\nportfolio",
    poster_small: "(Designer & Dev)",

    about_title: "About",
    about_p1:
      "I bring together technology, branding, and experience to build digital solutions with intention.",
    about_p2:
      "My background in Multimedia and Computer Science helps me think beyond aesthetics — I focus on structure, positioning, and impact.",
    about_p3:
      "I believe design isn’t only visual: it’s strategy, communication, and experience.",
    about_diff_title: "What sets me apart",
    about_li1: "Strategic vision + aesthetic sensitivity",
    about_li2: "Technical foundation in development",
    about_li3: "User-experience–oriented thinking",
    about_li4: "Organization and clarity in execution",

    projects_title: "Projects",
    role_label: "My role:",
    result_label: "Result:",
    impact_label: "Impact:",
    deliverables_label: "Deliverables:",

    p_hearview_tag: "Innovation & Accessibility",
    p_hearview_desc:
      "An interactive totem designed to improve communication and inclusion for deaf and hard-of-hearing people in corporate environments.",
    p_hearview_role: "Leadership, research, and innovation.",
    p_hearview_result: "Award-winning project evaluated by a field specialist.",

    p_casarosa_tag: "Organization & Data Analysis",
    p_casarosa_desc:
      "Created and maintained strategic spreadsheets for sales and inventory control in a charity bazaar and a pop-up store.",
    p_casarosa_role: "Data organization and process optimization.",
    p_casarosa_impact: "Improved results visibility and supported decision-making.",

    p_python_tag: "Education & Technology",
    p_python_desc:
      "An intro-to-programming mini course focused on accessible and practical learning.",
    p_python_role: "Teaching, guidance, and learning progress tracking.",

    p_cafe_title: "Amô & Café",
    p_cafe_tag: "Branding & Digital Product",
    p_cafe_desc:
      "A coffee shop brand concept with visual identity, tone of voice, and creative direction (Parisian vibe / Emily in Paris), designed for digital presence and the in-store experience.",
    p_cafe_deliverables:
      "Name, tagline, color palette, typography, content guidelines, and feed assets.",

    skills_title: "Bianca’s Pack",

    contact_title: "Let’s build something with intention.",
    contact_sub: "Available for:",
    c1: "• Creative projects",
    c2: "• Web development",
    c3: "• Strategic branding",
    c4: "• Digital collaborations",

    wa_button: "send on whatsapp",
    footer_note: "© 2026 Bianca Noberto. All rights reserved.",

    letter_hint: "click to open",
    contact_form_title: "get in touch",
  },
};

let currentLang = "pt";

function applyI18n(lang){
  currentLang = lang;
  document.documentElement.lang = lang === "pt" ? "pt-br" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = i18n[lang][key];
    if (!val) return;

    if (key === "poster_big") el.innerHTML = val.replaceAll("\n", "<br/>");
    else el.textContent = val;
  });

  const design = document.getElementById("skillDesign");
  const dev = document.getElementById("skillDev");
  const str = document.getElementById("skillStr");

  if (lang === "pt") {
    if (design) design.src = "./img/designpt-removebg-preview.png";
    if (dev) dev.src = "./img/desenpt-removebg-preview.png";
    if (str) str.src = "./img/estrategiapt-removebg-preview.png";
  } else {
    if (design) design.src = "./img/designeng-removebg-preview.png";
    if (dev) dev.src = "./img/deseneng-removebg-preview.png";
    if (str) str.src = "./img/estrategiaeng-removebg-preview.png";
  }
}

document.getElementById("langToggle")?.addEventListener("click", () => {
  applyI18n(currentLang === "pt" ? "en" : "pt");
});

applyI18n("pt");

/* WhatsApp form */
function enviarWhats(event) {
  event.preventDefault();

  const nome = document.getElementById("nome")?.value?.trim();
  const mensagem = document.getElementById("mensagem")?.value?.trim();
  const telefone = "5581986013538";

  const intro =
    currentLang === "pt"
      ? `Olá, Bianca! Me chamo ${nome}, vim pelo seu portfólio. `
      : `Hi Bianca! My name is ${nome}, I found you through your portfolio. `;

  const texto = `${intro}${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
  window.open(url, "_blank");
}

/* carta inline */
const stage = document.querySelector(".letter-stage");
const openBtn = document.getElementById("openLetterInline");
const closeBtn = document.getElementById("closeLetterInline");
const openWrap = document.getElementById("letterOpenWrap");

function openLetterInline(){
  if (!stage || !openWrap) return;
  stage.classList.add("is-open");
  openWrap.setAttribute("aria-hidden", "false");
}

function closeLetterInline(){
  if (!stage || !openWrap) return;
  stage.classList.remove("is-open");
  openWrap.setAttribute("aria-hidden", "true");
}

openBtn?.addEventListener("click", openLetterInline);
closeBtn?.addEventListener("click", closeLetterInline);
