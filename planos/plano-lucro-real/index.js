
const serialize =  (form) => {
    let json = {};
    let data = new FormData(form);
    let keys = data.keys();
    for (let key = keys.next(); !key.done; key = keys.next()) {
        let values = data.getAll(key.value);
        json[key.value] = values.length == 1 ? values[0] : values;
    }

    return json 
}





const submit = document.getElementById('submit');
const form = document.querySelector('form');
const nome = document.getElementById('inputName');
const email = document.getElementById('inputEmail');
const Tel = document.getElementById('InputTel');
const CNPJ = document.getElementById('inputCNPJ');
const faturamento = document.getElementById('inputFaturamento');
const Regime = document.getElementById('Regime');
const checked = document.getElementById('checkedInput');


submit.addEventListener('click', function (event){
    event.preventDefault();
     
 
    if(checked.checked){}


    const json = serialize(form);

    console.log(json)


    const formValue = {
        nome : nome.value,
        e_mail: email.value,
        Telefone: Tel.value,
        Regime: Regime.value,
        cnpj: CNPJ.value,
        Faturamento: faturamento.value,
        check: checked.checked,
    }

  
  
    

    console.log(formValue);
    
         
         
 })

    
 