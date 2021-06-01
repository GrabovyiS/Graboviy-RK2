let btn = document.getElementById('btn');
btn.addEventListener('click', createnew);


function createnew(){
    let name = document.getElementById('name');
    let select = document.getElementById('select');
    let count = document.getElementById('count');
    let ul = document.getElementById('list__ul');
    let form = document.getElementById('main__form');

    let new_li=document.createElement('li');
    let new_h3=document.createElement('h3');
    let new_p=document.createElement('p');
    let new_categ=document.createElement('p');

    new_li.classList.add('list__li');
    new_h3.classList.add('list__heading');
    new_p.classList.add('list__text');
    new_categ.classList.add('list__text');

    let h3_text=document.createTextNode(name.value);
    new_h3.appendChild(h3_text);
    let p_text=document.createTextNode('Самый лучший компьютер во вселенной'+count.value);
    new_p.appendChild(p_text);
    let categ_text=document.createTextNode('Категория: '+select.value);
    new_categ.appendChild(categ_text);

    let checkform = document.createElement('form');
    let checkbox = document.createElement('input');
    checkbox.type='checkbox';


    new_li.appendChild(new_h3);
    new_li.appendChild(new_p);
    new_li.appendChild(new_categ);
    new_li.appendChild(checkbox);
    ul.appendChild(new_li);

    form.reset();    
}

