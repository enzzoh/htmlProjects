var precosSorvetes = {
    "Uva": 10.99,
    "morango": 12.49,
    "flocos": 9.99,
    "Pilambeta": 7.99
  };
  
  function passar() {
    var select = document.getElementById("Sabor");
    var selectedValue = select.value;
    
    for (var i = 0; i < select.options.length; i++) {
      if (select.options[i].value === selectedValue) {
        select.remove(i);
        break;
      }
    }
    
    funcaoQueRecebeValor(selectedValue);
  }
  
  function funcaoQueRecebeValor(Sorvete) {
    var selectSaborSelecionado = document.getElementById("SaborSelecionado");
    
    var option = document.createElement("option");
    option.text = Sorvete;
    option.value = Sorvete;
    selectSaborSelecionado.add(option);
    
    calcularValorTotal();
  }
  
  function Remover() {
    var selectSaborSelecionado = document.getElementById("SaborSelecionado");
    var selectedOptions = selectSaborSelecionado.selectedOptions;
    
    var firstSelect = document.getElementById("Sabor");
    for (var i = selectedOptions.length - 1; i >= 0; i--) {
      var option = document.createElement("option");
      option.text = selectedOptions[i].text;
      option.value = selectedOptions[i].value;
      firstSelect.add(option);
      selectSaborSelecionado.remove(selectedOptions[i].index);
    }
    
    calcularValorTotal();
  }
  
  function calcularValorTotal() {
    var selectSaborSelecionado = document.getElementById("SaborSelecionado");
    var valorDaCompraInput = document.getElementById("ValorDaCompra");
    
    var valorTotal = 0;
    for (var i = 0; i < selectSaborSelecionado.options.length; i++) {
      var saborSelecionado = selectSaborSelecionado.options[i].value;
      valorTotal += precosSorvetes[saborSelecionado];
    }
    
    valorDaCompraInput.value = valorTotal.toFixed(2);
  }
  