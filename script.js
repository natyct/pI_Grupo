const icones = document.querySelectorAll('.icone');
const modal = document.querySelector('.modal');
const fechar = document.querySelector('.fechar');

const titulo = document.getElementById('titulo-modal');
const descricao = document.getElementById('descricao-modal');
const lista = document.getElementById('lista-modal');
const imagem = document.querySelector('.imagem-modal');

const dados = {

    renovavel: {
        titulo: 'Geração Renovável',
        descricao: 'Produção de energia limpa utilizando fontes sustentáveis.',
        imagem: 'img/renovavel.jpg',
        itens: [
            'Energia Solar',
            'Energia Eólica',
            'Biomassa',
            'Redução de emissões'
        ]
    },

    eficiencia: {
        titulo: 'Eficiência Energética',
        descricao: 'Redução de desperdícios e otimização do consumo.',
        imagem: 'img/eficiencia.jpg',
        itens: [
            'Diagnóstico energético',
            'Automação industrial',
            'Controle de perdas',
            'Economia de custos'
        ]
    },

    monitoramento: {
        titulo: 'Monitoramento Inteligente',
        descricao: 'Acompanhamento em tempo real dos indicadores.',
        imagem: 'img/monitoramento.jpg',
        itens: [
            'Dashboards',
            'Sensores IoT',
            'Alertas automáticos',
            'Análise de desempenho'
        ]
    },

    consumo: {
        titulo: 'Gestão de Consumo',
        descricao: 'Controle completo do uso de energia da indústria.',
        imagem: 'img/consumo.jpg',
        itens: [
            'Relatórios',
            'Metas de consumo',
            'Indicadores',
            'Economia operacional'
        ]
    },

    sustentabilidade: {
        titulo: 'Sustentabilidade e Impacto',
        descricao: 'Projetos voltados para ESG e redução ambiental.',
        imagem: 'img/sustentabilidade.jpg',
        itens: [
            'Créditos de carbono',
            'ESG',
            'Responsabilidade ambiental',
            'Impacto positivo'
        ]
    }

};

icones.forEach(icone => {

    icone.addEventListener('click', () => {

        icones.forEach(item => {
            item.classList.remove('ativo');
        });

        icone.classList.add('ativo');

        const tema = icone.dataset.tema;

        titulo.textContent = dados[tema].titulo;
        descricao.textContent = dados[tema].descricao;

        imagem.style.backgroundImage =
            `url('${dados[tema].imagem}')`;

        lista.innerHTML = '';

        dados[tema].itens.forEach(item => {

            const li = document.createElement('li');
            li.textContent = item;

            lista.appendChild(li);

        });

        modal.style.display = 'flex';

    });

});

fechar.addEventListener('click', () => {

    modal.style.display = 'none';

    icones.forEach(item => {
        item.classList.remove('ativo');
    });

});