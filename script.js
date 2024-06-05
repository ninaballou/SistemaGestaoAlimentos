function validarCamposObrigatorios(oProduto, aQuantidade, oPrecoUnitario, aDataTransacao){
  // RN.01 - Validação Campos Obrigatórios
  return oProduto && aQuantidade != null && oPrecoUnitario != null && aDataTransacao;
}

function validarQuantidadeProdutos(aQuantidade){
  // RN.02 - Validação Quantidade de Produtos
  return aQuantidade > 0;
}

function validarPrecoUnitario(oPrecoUnitario){
  //RN.03 - Validação Preço Unitário
  return oPrecoUnitario > 0;
}

function registrarDataTransacao(){
  //RN.04 - registro da data da transação
 return new Date().toLocaleString() ;
}

function gerarNumeroTransacao() {
  // RN 0.5 geração de numero de transação unico
  return Math.floor(Math.random()*10000);
}
function registrarHistoricoAlteracao(aMensagem){
  
 const ulHistoricoAlteracao = document.getElementById("historicoAlteracao");
  
  const liHistorico = document.createElement("li");

  liHistorico.textContent = aMensagem;
  
  ulHistoricoAlteracao.appendChild(liHistorico); ,
}
function registrarVenda(produto, quantidade, precoUnitario){
    let dataTransacao = registrarDataTransacao(); 
    let numeroTransacao = gerarNumeroTransacao();

  let validaCamposObrigatorios = validarCamposObrigatorios(produto, quantidade, precoUnitario, dataTransacao);
  let validaQuantidadeProdutos = validarQuantidadeProdutos(quantidade)
  let validaPrecoUnitario = validarPrecoUnitario(precoUnitario);

  if(validaCamposObrigatorios){
    if(validaQuantidadeProdutos){
      if(validaPrecoUnitario){
        return ("["+numeroTransacao+"] Transação registrada! Produto: " + produto + " ,Quantidade: " + quantidade + " Preço Unitário:R$ " + precoUnitario + " Data da Transação: " + dataTransacao);
      } else {
        return ("Problemas na validação do Preço Unitário");
      }
      } else {
        return ("Problemas na Validação de Quantidade de Produtos!")   
      }
      } else {
        return ("Problemas na validação de campos obrigatórios!");
    }
  }

function vender(){
  let produto = document.getElementById("produto").value;
  let quantidade = document.getElementById("quantidade").value;
  let precoUnitario = document.getElementById("preco").value;

  const mensagem = registrarVenda(produto, quantidade, precoUnitario);

  registrarHistoricoAlteracao(mensagem);
}



