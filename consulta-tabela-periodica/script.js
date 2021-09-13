
    var imagem = document.getElementById("imagem");
    var res;
    const elementos = {'AC':'Actinio',
                        'AG':'Prata',
                        'AL': 'Aluminio',
                        'AM': 'Americio',
                        'AR': 'Argonio',
                        'NA': 'Sodio',
                        'H': 'Hidrogenio',
                        'N': 'Nitrogênio',
                        'Cu': 'Cobre'

                        
    
    }

    function mostrarElemento(){
       var sigla = document.getElementById("sigla").value.toUpperCase()
       //sigla = toUpperCase(sigla)
       var resultado = document.getElementById("resultado")
       resultado.innerText = elementos[sigla]
       if(elementos[sigla]== undefined){
           resultado.innerText = "Elemento não encontrado"
       }
       res = elementos[sigla]
       var imagem = document.getElementById("imagem");
      
      switch (res) {
          
           case "Actinio":
               imagem.src = "images/actinio.jpg" 
               break;
            case "Prata":
              imagem.src = "images/prata.jpg"
              break;
            case "Aluminio":
                imagem.src = "images/aluminio.jpg"
                break; 
            case "Hidrogenio":
                imagem.src = "images/hidrogenio.jpg"
                break;
                case "Cobre":
                    imagem.src = "images/cobre.jpg"
            default:
                imagem.src = "images/erro.png"
                
                break;
      }
       // a sigla é o indice da coleção 
       return elementos[sigla]
       
    }
    
    
    
