function validarCamposObrigatorios(oProduto, aQuantidade, oPrecoUnitario, aDataTransacao){
  // RN.01 - Validação Campos Obrigatórios
  return oProduto && aQuantidade != null && oPrecoUnitario != null && aDataTransacao;
}

function validarQuantidadeProdutos(aQuantidade){
  // RN.02 - Validação Quantidade de Produtos
  return aQuantidade > 0;
}

function registrarVenda(){
  let produto = "Arroz";
  let quantidade = 0;
  let precoUnitario = 10.5;
  let dataTransacao = "2024-05-21"; 

  let validaCamposObrigatorios = validarCamposObrigatorios(produto, quantidade, precoUnitario, dataTransacao);
  let validaQuantidadeProdutos = validarQuantidadeProdutos(quantidade)

  if(validaCamposObrigatorios){
    if(validaQuantidadeProdutos){
      alert("Transação realizada com sucesso! Produto: " + produto + " ,Quantidade: " + quantidade + " Preço Unitário:R$ " + precoUnitario + " Data da Transação: " + dataTransacao );
    } else {
      alert("Problemas na Validação de Quantidade de Produtos!")   
    }
  } else {
      alert("Problemas na validação de campos obrigatórios!");
  }
}

registrarVenda("fim");


