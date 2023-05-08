const MEI = [
    'Informação Jurídica',
    'Dúvidas Empresariais',
    'Emissão de DAS e Notas Fiscais',
    'Regime MEI',
    'Faturamento até R$ 6750,00 / mês',
    '1 folha de pagamento',
    'Armazenamento de Documentos',
    'Abertura e Regularização de MEI',
    'Alteração Cadastral',
    'Declaração Anual',
    'Liberação na Prefeitura',
    '100% Online',
];

const Prices = [{
    
    mei_anual1: 'R$67,00',
    mei_anual2: 'R$67,00',

 
    mei_semestral1: 'R$87,00',
    mei_semestral2: 'R$87,00',
 
 
    mei_trimestral1:  'R$107,00',
    mei_trimestral2: 'R$107,00',
 
 
    }
]



const list_mei_anual = document.querySelector('.list-mei');
const list_mei_semestral = document.querySelector('.list-economic');
const list_mei_trimestral = document.querySelector('.list-basic');


const list_mei_industries_anual = document.querySelector('.list-mei_industries');
const list_mei_industries_semestral = document.querySelector('.list-economic_industries');
const list_mei_industries_trimestral = document.querySelector('.list-basic_industries');


const price_mei_anual = document.getElementById('mei-anual');
const price_mei_semestral = document.getElementById('mei-semestral');
const price_mei_trimestral = document.getElementById('mei-trimestral');

const price_mei_industries_anual = document.getElementById('mei_industries-anual');
const price_mei_industries_semestral = document.getElementById('mei_industries-semestral');
const price_mei_industries_trimestral = document.getElementById('mei_industries-trimestral');


const first_Container = document.querySelector('.container');
const second_Container = document.querySelector('.container-two');

const li_Services = document.querySelector('.services');
const li_industries = document.querySelector('.industries');

const Services_anchor = document.querySelector('.active');
const Industries_anchor = document.querySelector('.industriesA');

Services_anchor.addEventListener('click', function openServices() {

    Industries_anchor.classList.remove('active');

    Services_anchor.classList.remove('servicesA');
    Services_anchor.classList.add('active');

    if(Services_anchor.className === 'active'){
        first_Container.style.display = "flex";
        second_Container.style.display = "none";
        Services_anchor.style.color = "#fff";
    }
    if(Industries_anchor.className === ''){
        Industries_anchor.style.color= "#000";
    }
})


Industries_anchor.addEventListener('click', function openIndustries(){
    Services_anchor.classList.remove('active');

    Industries_anchor.classList.remove('industriesA');
    Industries_anchor.classList.add('active');

    if(Industries_anchor.className === 'active'){
        first_Container.style.display = "none";
        second_Container.style.display = "flex";
        Industries_anchor.style.color = "#fff";
    }

    if(Services_anchor.className === '') {
        Services_anchor.style.color = "#000"
    }
})
    
    list_mei_anual.innerHTML = MEI.map( item => 
        `<li><i class="fa fa-check-circle"></i>${item}</li>`).join('');

    list_mei_semestral.innerHTML = MEI.map(item => 
        `<li><i class="fa fa-check-circle"></i>${item}</li>`).join('');

    list_mei_trimestral.innerHTML = MEI.map(item => 
        `<li><i class="fa fa-check-circle"></i>${item}</li>`).join('');




    price_mei_anual.innerHTML = Prices.map(item => 
        `
        <h2>MEI</h2>
        <span>a partir de </span>
        <p>${item.mei_anual1}</p>
        <span>mensal no plano anual</span>
        `).join('');

    price_mei_semestral.innerHTML= Prices.map(item => 
        ` <h2>MEI</h2>
        <span>a partir de</span>
        <p>${item.mei_semestral1}</p>
        <span>mensal no plano semestral</span>`).join('');

    price_mei_trimestral.innerHTML = Prices.map(item => 
        `
        <h2>MEI</h2>
        <span>a partir de</span>
        <p>${item.mei_trimestral1}</p>
        <span>mensal no plano trimestral</span>
        `).join('');

        
        
        list_mei_industries_anual.innerHTML = MEI.map( item => 
            `<li><i class="fa fa-check-circle"></i>${item}</li>`).join('');
        
        list_mei_industries_semestral.innerHTML = MEI.map( item => 
            `<li><i class="fa fa-check-circle"></i>${item}</li>`).join('');

        list_mei_industries_trimestral.innerHTML = MEI.map( item => 
            `<li><i class="fa fa-check-circle"></i>${item}</li>`).join('');
        
        
        
        price_mei_industries_anual.innerHTML = Prices.map(item => 
            `
            <h2>MEI</h2>
            <span>a partir de</span>
            <p>${item.mei_anual2}</p>
            <span>mensal no plano anual</span>
            `).join('');
        
        price_mei_industries_semestral.innerHTML= Prices.map(item => 
            ` <h2>MEI</h2>
            <span>a partir de </span>
            <p>${item.mei_semestral2}</p>
            <span>mensal no plano semestral</span>`).join('');
        
        price_mei_industries_trimestral.innerHTML = Prices.map(item => 
            `
            <h2>MEI</h2>
            <span>a partir de</span>
            <p>${item.mei_trimestral2}</p>
            <span>mensal no plano trimestral</span>
            `).join('');
        