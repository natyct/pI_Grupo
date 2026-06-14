// ==========================================================================
// ELEMENTOS DO SISTEMA
// ==========================================================================
const icones = document.querySelectorAll(".icone");
const modal = document.querySelector(".modal");
const fechar = document.querySelector(".fechar");

const tituloModal = document.getElementById("titulo-modal");
const descricaoModal = document.getElementById("descricao-modal");
const listaModal = document.getElementById("lista-modal");
const imagemModal = document.querySelector(".modal-imagem");

const formulario = document.querySelector(".form-container form");
const anonimo = document.getElementById("anonimo");
const campoNome = document.getElementById("campoNome");
const campoEmail = document.getElementById("campoEmail");

const btnConhecer = document.querySelector(".btn-conhecer");

const itensMobile = document.querySelectorAll(".item-mobile");

const overlayModal = document.querySelector(".overlay-modal");
const fecharBtn = document.querySelector(".fechar");

// ==========================================================================
// CONTEÚDOS DINÂMICOS DOS QUADROS (ÍCONES / MENU)
// ==========================================================================
const conteudos = {
    coleta: {
        titulo: "Coleta Inteligente",
        descricao: "A transformação sustentável começa com a recuperação eficiente dos resíduos metálicos.",
        imagem: "img/coleta.png",
        itens: ["Logística Reversa", "Rastreamento de Materiais", "Redução de Descartes", "Aproveitamento Máximo"]
    },
    triagem: {
        titulo: "Triagem e Classificação",
        descricao: "Tecnologias modernas garantem maior qualidade e reaproveitamento dos metais.",
        imagem: "img/triagem.jpg",
        itens: ["Separação Magnética", "Classificação Automatizada", "Maior Pureza", "Menos Resíduos"]
    },
    circular: {
        titulo: "Economia Circular",
        descricao: "Os materiais retornam ao ciclo produtivo ao invés de se tornarem resíduos.",
        imagem: "img/economia_circular.jpg",
        itens: ["Reutilização de Sucatas", "Menor Extração Mineral", "Cadeia de Suprimentos Verde", "Produção Responsável"]
    },
    carbono: {
        titulo: "Descarbonização",
        descricao: "A reciclagem de metais reduz significativamente as emissões de gases poluentes.",
        imagem: "img/emissao_carbono.jpg",
        itens: ["Redução de CO₂", "Baixo Carbono Industrial", "Menor Consumo Energético", "Metas ESG"]
    },
    impacto: {
        titulo: "Impacto ESG",
        descricao: "Resultados práticos mensurados através de sólidos indicadores ambientais e sociais.",
        imagem: "img/esg.png",
        itens: ["Relatórios de Transparência", "Indicadores Ambientais", "Ações Sociais Integradas", "Governança Corporativa"]
    }
};

// ==========================================================================
// MECANISMO E CONTROLE DOS QUADROS (MODAL)
// ==========================================================================

function fecharModal() {
    modal.style.display = "none";
    icones.forEach(item => item.classList.remove("ativo"));
}

if (fechar) fechar.addEventListener("click", fecharModal);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharModal();
});

document.addEventListener("click", (e) => {
    if (modal.style.display === "flex" && !modal.contains(e.target)) {
        fecharModal();
    }
});

// ==========================================================================
// CONTROLE DO BOTÃO "QUERO CONTRIBUIR" (ROLA A TELA)
// ==========================================================================
if (btnConhecer) {
    btnConhecer.addEventListener("click", () => {
        const areaInterativa = document.getElementById("area-interativa");
        if (areaInterativa) {
            // Executa a rolagem suave até a segunda parte da tela
            areaInterativa.scrollIntoView({ behavior: "smooth" });
            
            // Foca o cursor no formulário após a rolagem terminar
            setTimeout(() => {
                const campoTipo = document.getElementById("tipo");
                if (campoTipo) campoTipo.focus();
            }, 800);
        }
    });
}

// ==========================================================================
// FORMULÁRIO: SUBMIT E ANONIMATO
// ==========================================================================
if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Obrigado pela sua contribuição! Sua ideia ou relato foi enviado com sucesso para a equipe EcoMetal.");
        formulario.reset();
        campoNome.style.display = "flex";
        campoEmail.style.display = "flex";
    });
}

if (anonimo) {
    anonimo.addEventListener("change", () => {
        if (anonimo.checked) {
            campoNome.style.display = "none";
            campoEmail.style.display = "none";
            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";
        } else {
            campoNome.style.display = "flex";
            campoEmail.style.display = "flex";
        }
    });
}

// ==========================================================================
// FUNÇÃO ÚNICA PARA ABRIR O MODAL
// ==========================================================================

function abrirModal(tema){

    if(!conteudos[tema]) return;

    tituloModal.textContent = conteudos[tema].titulo;
    descricaoModal.textContent = conteudos[tema].descricao;

    listaModal.innerHTML = "";

    conteudos[tema].itens.forEach(item => {

        const li = document.createElement("li");
        li.textContent = item;
        listaModal.appendChild(li);

    });

    imagemModal.style.backgroundImage =
        `url('${conteudos[tema].imagem}')`;

    modal.style.display = "flex";

    if(window.innerWidth <= 1024){
        modal.classList.add("ativo");
    }

    if(overlayModal){
        overlayModal.classList.add("ativo");
    }
}

// ==========================================================================
// DESKTOP
// ==========================================================================

icones.forEach((icone) => {

    icone.addEventListener("click", () => {

        abrirModal(icone.dataset.tema);

        icones.forEach(i => i.classList.remove("ativo"));
        icone.classList.add("ativo");

    });

});

// ==========================================================================
// MOBILE
// ==========================================================================

itensMobile.forEach((item) => {

    item.addEventListener("click", () => {

        abrirModal(item.dataset.tema);

        itensMobile.forEach(i => i.classList.remove("ativo"));
        item.classList.add("ativo");

    });

});

// ==========================================================================
// FECHAR MODAL
// ==========================================================================
function fecharModal(){

    modal.style.display = "none";
    modal.classList.remove("ativo");

    if(overlayModal){
        overlayModal.classList.remove("ativo");
    }

    icones.forEach(i => i.classList.remove("ativo"));
    itensMobile.forEach(i => i.classList.remove("ativo"));
}

if(fechar){
    fechar.addEventListener("click", fecharModal);
}

if(overlayModal){
    overlayModal.addEventListener("click", fecharModal);
}

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){
        fecharModal();
    }

});