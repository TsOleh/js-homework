//var task1 = document.getElementsByTagName('span');
//task1[0].className = 'orange';


//var task2 = document.body.children[0].children[0].children[1];
//task2.className = 'blue';

//var task3 = document.body.firstChild.firstChild;
//var task3_1 = document.body.children[0].children[5];
//task3.style.color = 'red';
//task3_1.className = 'yellow';

var task4 = document.querySelectorAll('li[data-location=west]');
for(var i=0;i<task4.length;i++){
  task4[i].style.color = 'yellow';
}

//var task5 = document.getElementsByTagName('li')
//for(var i=0;i<task5.length;i++){
// task5[i].style.color  = 'yellow';
//}