var number1;
number1=50;
function proverka(number1)
{
    if(number1 % 2 === 0 )
    {
       alert('Число парне' + number1);

    }
    if( number1 % 2 !== 0)
    {
        alert('Число непарне ' + number1);
    }
     
    else {
        alert( '');
    }
}

proverka(number1);

function n(num) {
    for (var i = 2, max = Math.sqrt(num); i <= max; i++) 
    {
      if (num % i === 0) {
        return false;
      }    
    }
    return num > 1;
  }

  var sumy=0;
  var a=0;

  function v(num) {
   var prim = [];
    
    for (var  i = 2; i <= num; i++) {
       
       if(a<5) {
      if (n(i)) {
        prim.push(i);
        a++;  
        sumy +=i;
      }
    }
    else{
        break;
    }
    }
    alert('Сумма чисел ' +sumy);
    return prim;
  }
  
  console.log(v(20));

 var tr = prompt('Введи любое число' )
 

function one (tr)
{
    let q=1;
    var c="1";
  for(var o=1;o<tr;o++)
  {

c=c+1;
let ch=Number(c);
q=q+ch;
  }
  alert(c);
  alert(q);
  return c;
}
one(tr);
