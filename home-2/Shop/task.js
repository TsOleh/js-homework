function pop(event){
        var counter = event.target;
        counter.innerHTML++;
    }
        
        document.onclick = function(event){ 
        var target = event.target;
        var id = target.getAttribute('data-toggle-id');
        var elem = document.getElementById(id);
        elem.setAttribute('hidden', 'false'); 
        checkMaxItem(target); 

    } 
    var count = 1;
    function checkMaxItem(target){
          if(count<8){
            choice(target);
          }
    }
    
     var mass = [];
     var itemsCount =0;
    function choice(target){ 
        if(itemsCount==0){
            addNewItem(target);
            calculate();
            totalPrice(target);
									   
        }else{
            var parentNode = target.parentNode //;alert('qw');
            var newItem = parentNode.querySelector('.title');
            var count =0;
            for(var i=0;i<mass.length;i++){ 
                if(mass[i] === newItem.innerHTML){ 
																count = 1;
														  }       
												}
										 	if(count==0){ 
												addNewItem(target); 
												calculate();
												totalPrice(target);
												
											}
        }
        itemsCount++;
    }
	
    function addNewItem(target){
        $('.addItem').append('<div class = "addSpecificItem"></div>');
        var elem =  document.querySelector('.addItem');
        var div = elem.lastChild;
        $(div).append('<p class = "someItemName asInlineBlock"></p>');
        var pTitle = div.lastChild;
         $(div).append('<p class = "someItemPrice asInlineBlock"></p>');
         var pPrice = div.lastChild;
        var someParentNode = target.parentNode;
        var productTitle = someParentNode.querySelector('.title');
        var productPrice = someParentNode.querySelector('.price');
        $(pTitle).append(productTitle.innerHTML);
         $(pPrice).append(productPrice.innerHTML); 
        mass.push(pTitle.innerHTML);
        moreLessButton(div);
    }
    
    function moreLessButton(div){
        $(div).append('<p class = "asInlineBlock"></p>');
         var pPlusMinus = div.lastChild;
       $(pPlusMinus).append('<button class = "minus changeButtom">-</button>');
        var button2 = pPlusMinus.lastChild;
        $(pPlusMinus).append('<input class = "forma" type = "text" value = "1" onclick="newImpit()"></input>');
        var input = pPlusMinus.lastChild;
       $(pPlusMinus).append('<button class = "plus changeButtom">+</button>');
        var button = pPlusMinus.lastChild;
        
	function newImpit(){	alert('rrrrr');
					 var trt =	curentValue.value;
						alert(trt);
					}
					
        button.onclick = function(event){
        var parentN = event.target.parentNode.parentNode;
        var changePrice = parseInt(parentN.querySelector('.priceB').innerHTML);
            input.value++;
            changeTotalPrice(changePrice, 'plus', input.value);
        };
        button2.onclick = function(){
            var parentN = event.target.parentNode.parentNode;
            var changePrice = parseInt(parentN.querySelector('.priceB').innerHTML);
            var someValue = input.value >1 ? --input.value : 0;
            changeTotalPrice(changePrice, 'minus', someValue);
        };
       $(div).append('<span class = "deleteClass"></span>');
        var pDeleteItem = div.lastChild;
        pDeleteItem.innerHTML = '<button onclick="deleteOneItem(event)" class="del">[x]</button>';
    }

    var productPrice = 0;
    function totalPrice(target){ 
        var someParentNode = target.parentNode;
        var price = parseInt(someParentNode.querySelector('.price .priceB').innerHTML);
        productPrice += price;
        var elemT =  document.querySelector('.totalP');
        elemT.innerHTML = "Total price: " + productPrice + " $";
    }
            
    var memory =1;
    function changeTotalPrice(changePrice, number, input){
        if(number == 'minus' && input > 0){
            productPrice -= changePrice;
        }else if(number == 'plus'){
            productPrice += changePrice;
        }else{
            return;
        }
        var elemT =  document.querySelector('.totalP');
        elemT.innerHTML = "Total price: " + productPrice + " $";
    }  
    
     function calculate(){
        var sum = document.querySelector('.count'); 
        sum.innerHTML = "You chose " + count++ + " item.(Max items = 7)";
     }
    
    function toClear(){
       var clear2 =  document.querySelector('.addItem');
       while (clear2.lastChild) {
              clear2.removeChild(clear2.lastChild);
          }
        var clear2 =  document.querySelector('.totalP');
        clear2.innerHTML = "";
        var clear2 =  document.querySelector('.count');
        clear2.innerHTML = "";
        var elemHide = document.getElementById('toHide');
        elemHide.removeAttribute('hidden');
        productPrice =0;
        count=0;  
        itemsCount =0;
        count = 1;
        mass.splice(0, mass.length);
    }
    
    $(document).ready(function(){
        $(".purchase").click(function(){
           var elemHide = document.querySelector('.empty');
            $(".empty b").empty().append("Well done!"); 
            $(".empty").attr('hidden', 'false');
            toClear();
        });
    });
    
    var count2 = 0;
   function deleteOneItem(event){
       var elem = event.target.parentNode.parentNode; 
       deletFromMass(elem);
	var price = parseInt(elem.querySelector('.someItemPrice .priceB').innerHTML);
       chTotalPrice(elem, productPrice, price)
       while(elem.lastChild){
         elem.removeChild(elem.lastChild);
       }
        count -=2;
       var sum = document.querySelector('.count'); 
       sum.innerHTML = "You chose " + count + " item.(Max items = 7)";
       count++;
       deletFromMass(elem);
   }
    
   function chTotalPrice(elem, totPrice, specPrice){ 
    	var inputNumber = elem.querySelector('.forma');
      var newTotal = totPrice - (inputNumber.value * specPrice);
	productPrice = newTotal;
	var elemT =  document.querySelector('.totalP');
	elemT.innerHTML = "Total price: " + newTotal + " $";
    }
    
   function deletFromMass(elem){
        var price = elem.querySelector('.someItemName').innerHTML;
       for(var i =0; i<mass.length;i++){
           if(price == mass[i]){
                delete mass[i];
           }
       }
   }
