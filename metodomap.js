var clientes = [
];
var clientesjuros = [
];

//cadastra os clientes
function incluircliente(){
    clientes.push({
        'NomeCliente': document.getElementById("nome").value,
        'DataVencimento': document.getElementById("datavencimento").value,
        'ValorCompra': document.getElementById("valor").value,
        'ValorAtualizado': ""
    });
    
    //mostra os clientes em uma tabela
    var tabela = clientes.map(function(item, indice){
        return `<tr>
                <td>${indice + 1}</td>
                <td>${item.NomeCliente}</td>
                <td>${item.DataVencimento}</td>
                <td>${item.ValorCompra}</td>
                </tr>`;
    });
    document.querySelector("#tblista tbody").innerHTML = tabela.join("");
}

function funcaojuros(){
        //calcula os juros
        var tabjuros = clientes.map(function(item, indice){
            
            // um dia em milissegundos
            var one_day = 1000 * 60 * 60 * 24
            
            // cria variaveis com as datas
            var hoje = new Date();
            var dataVence = new Date(item.DataVencimento);
        
            // calcula a diferença entre datas
            var Difference_In_Time = hoje.getTime() - dataVence.getTime();
        
            // verifica se está atrasado 
            if (Difference_In_Time > 0){
                // calcula o numero de dias entre as duas datas
	            var diasAtraso = Difference_In_Time / (1000 * 3600 * 24);
                console.log("Dias de Atraso" + diasAtraso);
                // calcula juros
                juros = diasAtraso * 0.001 * parseFloat(item.ValorCompra);
                //calcula mora 
                mora = parseFloat(item.ValorCompra) * 0.02;
                // Dá o valor atualizado
                item.ValorAtualizado = parseFloat(item.ValorCompra) + juros + mora;
            }else{
                item.ValorAtualizado = item.ValorCompra;
            }     

        // coloca os valores atualizados na tabela 
        return `<tr>
            <td>${indice + 1}</td>
            <td>${item.NomeCliente}</td>
            <td>${item.DataVencimento}</td>
            <td>${item.ValorAtualizado}</td>
            </tr>`;
        });

    document.querySelector("#tbjuros tbody").innerHTML = tabjuros.join("");
}