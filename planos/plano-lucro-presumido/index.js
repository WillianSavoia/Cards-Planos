const Plano_Econômico = [
    'Informação Jurídica',
    'Dúvidas Empresariais',
    'Contabilidade digital',
    'Regime Lucro Presumido',
    'Faturamento até R$ 10 mil / mês ou empresa inativa',
    '1 folha de pagamento',
    'Consultas Online',
    'Colaborador adicional R$60,00 / mês',
    'Consultas telefônicas',
    'Revisão de documentos 1 / ano / 6 páginas',
    'Emissão de certidões',
    'Sem cobrança de 13ª parcela',
];

const Plano_Básico = [
    'Informação Jurídica',
    'Dúvidas Empresariais',
    'Contabilidade digital',
    'Regime Lucro Presumido',
    'Faturamento até R$ 30 mil / mês',
    '2 folhas de pagamento',
    'Consultas Online',
    'Colaborador adicional R$60,00 / mês',
    'Consultas telefônicas',
    'Revisão de documentos 1 / ano / 6 páginas',
    'Procuração 1 / ano',
    'Emissão de certidões',
    'Sem cobrança de 13ª parcela',
];

const Plano_Premium = [
    'Informação Jurídica',
    'Dúvidas Empresariais',
    'Contabilidade digital',
    'Regime Lucro Presumido',
    'Faturamento até R$ 60 mil / mês',
    '2 folhas de pagamento',
    'Consultas Online',
    'Colaborador adicional R$60,00 / mês',
    'Consultas telefônicas',
    'Revisão de documentos 2 / ano / 6 páginas',
    'Procuração 1 / ano',
    'Notificação Extra Judicial 1 / ano',
    'Emissão de Certidões',
    'Sem cobrança de 13ª parcela',
];

const Plano_Pro = [
    'Informação Jurídica',
    'Dúvidas Empresariais',
    'Contabilidade digital',
    'Regime Lucro Presumido',
    'Faturamento até R$ 300 mil / mês',
    '3 folhas de pagamento',
    'Consultas Online',
    'Colaborador adicional R$60,00 / mês',
    'Consultas telefônicas',
    'Revisão de documentos 3 / ano / 6 páginas',
    'Procuração 3 / ano',
    'Notificação Extra Judicial 3 / ano',
    'Emissão de Certidões',
    'NDA',
    'Sem cobrança de 13ª parcela',
];

const Prices = [{
    
   
 
    economic_price1: 'R$327,00',
    economic_price2: 'R$467,00',
 
 
    basic_price1:  'R$497,00',
    basic_price2: 'R$637,00',
 
 
    premium_price1: 'R$637,00',
    premium_price2: 'R$797,00',
 
 
    pro_price1: 'R$677,00',
    pro_price2: 'R$857,00'
    }
]



const list_economic = document.querySelector('.list-economic');
const list_basic = document.querySelector('.list-basic');
const list_premium = document.querySelector('.list-premium');
const list_pro = document.querySelector('.list-pro');

const list_economic_industries = document.querySelector('.list-economic_industries');
const list_basic_industries = document.querySelector('.list-basic_industries');
const list_premium_industries = document.querySelector('.list-premium_industries');
const list_pro_industries = document.querySelector('.list-pro_industries');

const price_economic = document.getElementById('economic');
const price_basic = document.getElementById('basic');
const price_premium = document.getElementById('premium');
const price_pro = document.getElementById('pro');

const price_economic_industries = document.getElementById('economic_industries');
const price_basic_industries = document.getElementById('basic_industries');
const price_premium_industries = document.getElementById('premium_industries');
const price_pro_industries = document.getElementById('pro_industries');

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
    

    list_economic.innerHTML = Plano_Econômico.map(item => 
        `<li><i class="fa fa-check-circle"></i>${item}</li>`).join('');

    list_basic.innerHTML = Plano_Básico.map(item => 
        `<li><i class="fa fa-check-circle"></i>${item}</li>`).join('');

    list_premium.innerHTML = Plano_Premium.map(item => 
        `<li><i class="fa fa-check-circle"></i>${item}</li>`).join('');

    list_pro.innerHTML = Plano_Pro.map(item => 
        `<li><i class="fa fa-check-circle"></i>${item}</li>`).join('');




    price_economic.innerHTML= Prices.map(item => 
        ` <h2>ECONÔMICO</h2>
        <span>a partir de</span>
        <p>${item.economic_price1}</p>
        <span>Mensal</span>`).join('');

    price_basic.innerHTML = Prices.map(item => 
        `
        <h2>BÁSICO</h2>
        <span>a partir de</span>
        <p>${item.basic_price1}</p>
        <span>Mensal</span>
        `).join('');

    price_premium.innerHTML = Prices.map(item => 
        `
        <h2>PRÊMIUM</h2>
        <span>a partir de</span>
        <p>${item.premium_price1}</p>
        <span>Mensal</span>
        `).join('');

    price_pro.innerHTML = Prices.map(item => 
        `
        <h2>PRÓ</h2>
        <span>a partir de</span>
        <p>${item.pro_price1}</p>
        <span>Mensal</span>
        `).join('');

        
    
        
        list_economic_industries.innerHTML = Plano_Econômico.map(item => 
            `<li><i class="fa fa-check-circle"></i>${item}</li>`).join('');
        
        list_basic_industries.innerHTML = Plano_Básico.map(item => 
            `<li><i class="fa fa-check-circle"></i>${item}</li>`).join('');
        
        list_premium_industries.innerHTML = Plano_Premium.map(item => 
            `<li><i class="fa fa-check-circle"></i>${item}</li>`).join('');
        
        list_pro_industries.innerHTML = Plano_Pro.map(item => 
            `<li><i class="fa fa-check-circle"></i>${item}</li>`).join('');
        
        
        
        
        price_economic_industries.innerHTML= Prices.map(item => 
            ` <h2>ECONÔMICO</h2>
            <span>a partir de</span>
            <p>${item.economic_price2}</p>
            <span>Mensal</span>`).join('');
        
        price_basic_industries.innerHTML = Prices.map(item => 
            `
            <h2>BÁSICO</h2>
            <span>a partir de</span>
            <p>${item.basic_price2}</p>
            <span>Mensal</span>
            `).join('');
        
        price_premium_industries.innerHTML = Prices.map(item => 
            `
            <h2>PRÊMIUM</h2>
            <span>a partir de</span>
            <p>${item.premium_price2}</p>
            <span>Mensal</span>
            `).join('');
        
        price_pro_industries.innerHTML = Prices.map(item => 
            `
            <h2>PRÓ</h2>
            <span>a partir de</span>
            <p>${item.pro_price2}</p>
            <span>Mensal</span>
            `).join('');