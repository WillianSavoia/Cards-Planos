const OURO = [
    'Contrato de Trabalho PJ e CLT;',
    'NDA;',
    'Revisão de Documentos;',
    'Termos de Uso;',
    'Politica de Privacidade;',
    'Pacto Global da Onu;',
    'Código de Ética e Conduta;',
    'Informação Jurídica Ilimitada.',
];

const ESMERALDA = [
    'Abertura de Empresa;',
    'Contábil + Fiscal + Folha;',
    'Contrato de Trabalho PJ e CLT;',
    'NDA;',
    'Revisão de Documentos;',
    'Termos de Uso;',
    'Politica de Privacidade;',
    'Pacto Global da Onu;',
    'Código de Ética e Conduta;',
    'Informação Jurídica Ilimitada.',
];

const DIAMANTE =[
    'Abertura de Empresa;',
    'BPO + Dashboard + FP&A;',
    'Contábil + Fiscal + Folha;',
    'Contrato de Trabalho PJ e CLT;',
    'NDA;',
    'Revisão de Documentos;',
    'Termos de Uso;',
    'Politica de Privacidade;',
    'Pacto Global da Onu;',
    'Código de Ética e Conduta;',
    'Informação Jurídica Ilimitada;',
    'Revisão de Contrato;',
    'Depósito de Marca no Inpi.',
]

const Prices = [{
    
    ouro: 'R$997,00',
    esmeralda: 'R$1.397,00',
    diamante:  'R$1.997,00', 
    }
]



const list_ouro = document.querySelector('.list-mei');
const list_esmeralda = document.querySelector('.list-economic');
const list_diamante = document.querySelector('.list-basic');

const price_ouro = document.getElementById('Startups-ouro');
const price_esmeralda = document.getElementById('Startups-esmeralda');
const price_diamante = document.getElementById('Startups-diamante');

    
    list_ouro.innerHTML = OURO.map( item => 
        `<li><i class="fa fa-check-circle"></i>${item}</li>`).join('');

    list_esmeralda.innerHTML = ESMERALDA.map(item => 
        `<li><i class="fa fa-check-circle"></i>${item}</li>`).join('');

    list_diamante.innerHTML = DIAMANTE.map(item => 
        `<li><i class="fa fa-check-circle"></i>${item}</li>`).join('');




    price_ouro.innerHTML = Prices.map(item => 
        `
        <h2>OURO</h2>
        <span>a partir de </span>
        <p>${item.ouro}</p>
        <span>mensal</span>
        `).join('');

    price_esmeralda.innerHTML= Prices.map(item => 
        ` <h2>ESMERALDA</h2>
        <span>a partir de </span>
        <p>${item.esmeralda}</p>
        <span>mensal</span>`).join('');

    price_diamante.innerHTML = Prices.map(item => 
        `
        <h2>DIAMANTE</h2>
        <span>a partir de </span>
        <p>${item.diamante}</p>
        <span>mensal</span>
        `).join('');

 
        