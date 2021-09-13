function IMC (){
    const form = document.querySelector('.infos');
    const showResult = document.querySelector('.result');

    function getInfosbyInput (e){
        e.preventDefault();
        
        const iptHeight = form.height.value;
        const iptWeight = form.weight.value;
        const height = +iptHeight;
        const weight = +iptWeight;

        if(!height){
            alert('Informe um Peso Válido');
            return
        }
        else if(!weight){
            alert('Informe uma Altura Válida');
            return
        }

        const imc = calc(height, weight).toFixed(2);
        const msg = userMsg(imc);

        showResult.style.display = 'block';
        showResult.innerText = `Seu IMC é: ${imc} \n\n ${msg}`;
    }
    form.addEventListener('submit', getInfosbyInput)

    function calc(height, weight){
        return weight / height ** 2;
    }

    function userMsg(imc){
        const rules = ['Atenção: Você está muito abaixo do peso, procure um médico para orientações.',
        'Atenção: Você está abaixo do peso.',
        'Você está com o peso normal!',
        'Atenção: Você está acima do peso.',
        'Atenção: Você está com Obesidade Grau I, procure um médico para orientações.',
        'Atenção: Você está com Obesidade Grau II, procure um médico para orientações.',
        'Atenção: Você está com Obesidade Grau III, procure um médico para orientações.'];

        if (imc < 17.0) return rules[0];
        if (imc <= 18.49) return rules[1];
        if (imc <= 24.99) return rules[2];
        if (imc <= 29.99) return rules[3];
        if (imc <= 34.99) return rules[4];
        if (imc <= 39.99) return rules[5];
        if (imc >= 40.0) return rules[6];
    }
}

IMC();