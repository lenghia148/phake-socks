var itemsFirst = [
    {
        name : 'item/1.webp',
        style : 'a'
    },
    {
        name : 'item/2.webp',
        style : 'a',
    },
    {
        name : 'item/3.jpg',
        style : 'a',
    },
    {
        name : 'item/4.webp',
        style : 'a',
    },
    {
        name : 'item/5.webp',
        style : 'a',
    },
    {
        name : 'item/6.jpg',
        style : 'a',
    },
    {
        name : 'item/7.webp',
        style : 'a',
    },
    {
        name : 'item/8.webp',
        style : 'a',
    },
    {
        name : 'item/9.webp',
        style : 'a',
    },
    {
        name : 'item/10.webp',
        style : 'a',
    },
    {
        name : 'item/11.webp',
        style : 'a',
    },
    {
        name : 'item/12.webp',
        style : 'a',
    },
]
loadDataFirst()
function loadDataFirst()
{   
    let dataFirst = ''
    
    for(let i = 0 ; i < itemsFirst.length ; i++)
    {
    let item = `<div class='items'><img src="${itemsFirst[i].name}"> <div>${itemsFirst[i].style}</div></div>`
    dataFirst+=item
    }
    console.log(dataFirst)
    document.getElementById('first').innerHTML = dataFirst
}

listnews = [
    {
        link : 'http://bongdaso.com/Mourinho-s%e1%ba%b5n-s%c3%a0ng-ch%e1%ba%a5m-d%e1%bb%a9t-h%e1%bb%a3p-%c4%91%e1%bb%93ng-s%e1%bb%9bm-v%e1%bb%9bi-Fernandes-_Art_223510.aspx'
    },
    {
        link : 'http://bongdaso.com/Mourinho-s%e1%ba%b5n-s%c3%a0ng-ch%e1%ba%a5m-d%e1%bb%a9t-h%e1%bb%a3p-%c4%91%e1%bb%93ng-s%e1%bb%9bm-v%e1%bb%9bi-Fernandes-_Art_223510.aspx'
    },
    {
        link : 'http://bongdaso.com/Mourinho-s%e1%ba%b5n-s%c3%a0ng-ch%e1%ba%a5m-d%e1%bb%a9t-h%e1%bb%a3p-%c4%91%e1%bb%93ng-s%e1%bb%9bm-v%e1%bb%9bi-Fernandes-_Art_223510.aspx'
    },
  
]
loadDataSecond()
function loadDataSecond()
{   
    let dataSecond = ''
    
    for(let i = 0 ; i < listnews.length ; i++)
    {
    let item = `<div class='listnews'><img src='${itemsFirst[i].name}'><a href="${listnews[i].link}"> Link ${i} </a></div>`
    dataSecond+=item
    }
   
    document.getElementById('second').innerHTML = dataSecond
}
var itemsThird = [
    {
        name : 'item/1.webp',
        style : 'a'
    },
    {
        name : 'item/2.webp',
        style : 'a',
    },
    {
        name : 'item/3.jpg',
        style : 'a',
    },
    {
        name : 'item/4.webp',
        style : 'a',
    },
    {
        name : 'item/5.webp',
        style : 'a',
    },
    {
        name : 'item/6.jpg',
        style : 'a',
    },
    {
        name : 'item/3.jpg',
        style : 'a',
    },
    {
        name : 'item/4.webp',
        style : 'a',
    },
]
loadDataThird()
function loadDataThird()
{   
    let dataThird = ''
    
    for(let i = 0 ; i < itemsThird.length ; i++)
    {
    let item = `<div class='trends'><img src='${itemsThird[i].name}'>${i}</div>`
    dataThird+=item
    }
   
    document.getElementById('third').innerHTML = dataThird
}

var imgSlides = document.getElementsByClassName('imgss');
var indexImgs = 0;
showSlides(0)
function nextImgs() {
    indexImgs++;
    if(indexImgs>1){indexImgs=0}
  showSlides(indexImgs);
}
function prevImgs() {
    indexImgs--;
    if(indexImgs>0){indexImgs=1}
  showSlides(indexImgs);
}

function showSlides(n) {
  for (i = 0; i < imgSlides.length; i++) {
      imgSlides[i].style.display = "none";  
  }
  imgSlides[n].style.display = 'block'; 
}


