let til = document.querySelector('.til');
let n1 = document.querySelector('.h1');
let n2 = document.querySelector('.h2-2');
let n3 = document.querySelector('.n3');
let n4 = document.querySelector('.n4');
let n5 = document.querySelector('.n5');
let n6 = document.querySelector('.n6');
let n7 = document.querySelector('.n7');
let n8 = document.querySelector('.n8');
let n9 = document.querySelector('.n9');
let til2 = document.querySelector('.til2');
let dark = document.querySelector('.dark');
let mode = document.querySelector('.mode');
let body = document.querySelector('body');


dark && dark.addEventListener('click', function(){
    mode.style.display = 'block'
    dark.style.display = 'none'
    mode.style.color = 'white'
    body.style.backgroundColor = 'black'
    body.style.color = 'white'
    n1.style.color = 'white'
    til.style.color ='white'
    til2.style.color ='white'
})
mode && mode.addEventListener('click', function(){
    dark.style.color = 'black'
    mode.style.display = 'none'
    dark.style.display = 'block'
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
    n1.style.color = 'black'
    til.style.color ='black'
    til2.style.color ='black'
})



til && til.addEventListener('click', function(){
   
    n1.innerHTML = 'Добро пожаловать на сайт Учебного центра Наджот Талим'
    n2.innerHTML = 'Об обучающих курсах'
    n3.innerHTML = 'курсы по интерфейсу'
    n4.innerHTML = 'бэкэнд-курсы'
    n5.innerHTML = 'Курсы ШМ'
    n6.innerHTML = 'Курсы графического дизайна'
    n7.innerHTML = 'У вас есть время зарегистрироваться на наш курс'
    n9.innerHTML = 'Торопитесь Образовательный центр «Наджот-Талим» будет ждать Вас.'
    til2.style.display = 'block'
    til.style.display = 'none'
    
   

})

til2 && til2.addEventListener('click', function(){
    n1.innerHTML = 'Assalomu alekum najot talim Oquv markazining web sitesiga xush kelibsiz'
n2.innerHTML = 'Oquv kurslari haqida'
n3.innerHTML = 'frontend kurslari '
n4.innerHTML = 'backend kurslari '
n5.innerHTML = 'Smm kurslari'
n6.innerHTML = 'Grafik dizayn kurslari'
n7.innerHTML = 'Siz bizning kursimizga yozilishga ulgurib qoling'
n8.innerHTML = 'Biz sizni kutib qolamiz bunday imkoniyatni qoldan boy bermang'
n9.innerHTML = 'Tezroq ulgurib qoling Najot-talim oquv markazi sizni kutib qoladi'
til2.style.display = 'none'
    til.style.display = 'block'
})

