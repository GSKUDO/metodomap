var clientes = [
];

function incluircliente(){
    clientes.push({
        'NomeCliente': document.getElementById("nome").value,
        'DataVencimento': document.getElementById("datavencimento").value,
        'ValorCompra': document.getElementById("valor").value
    });
    
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
    console.log("clientes antes" + clientes);
    clientesjuros = clientes;
    var tabjuros = clientesjuros.map(function(item, indice){
        // One day Time in ms (milliseconds)
        var one_day = 1000 * 60 * 60 * 24
        // To set present_dates to two variables
        var hoje = new Date();
        console.log("hoje" + hoje);
        var dataVence = new Date(item.DataVencimento);
        console.log("datavenc" + dataVence);
        // To calculate the time difference of two dates
        var Difference_In_Time = hoje.getTime() - dataVence.getTime();
        console.log("tempo" + Difference_In_Time);
        if (Difference_In_Time > 0){
            // To calculate the no. of days between two dates
	        var diasAtraso = Difference_In_Time / (1000 * 3600 * 24);
            console.log("Dias de Atraso" + diasAtraso);
            juros = diasAtraso * 0.001 * parseFloat(item.ValorCompra);
            console.log("juros" + juros);
            mora = parseFloat(item.ValorCompra) * 0.02;
            console.log("mora" + mora);
        } else {
            juros = 0;
            mora = 0;
        }     
        item.ValorCompra = parseFloat(item.ValorCompra) + juros + mora;
        console.log("item.ValorCompra" + item.ValorCompra);
        console.log("clientes" + clientes);
        console.log("clientesjuros" + clientesjuros);
    return `<tr>
            <td>${indice + 1}</td>
            <td>${item.nome}</td>
            <td>${item.DataVencimento}</td>
            <td>${item.ValorCompra.toFixed(2)}</td>
            </tr>`;
    });
    document.querySelector("#tbjuros tbody").innerHTML = tabjuros.join("");
}