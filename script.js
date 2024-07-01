const cardnum1 = document.querySelector('.card__numset1');
const cardnum2 = document.querySelector('.card__numset2');
const cardnum3 = document.querySelector('.card__numset3');
const cardnum4 = document.querySelector('.card__numset4');

const inumber = document.querySelector('#cardnumber');
inumber.onpaste = e => e.preventDefault();
inumber.addEventListener('keyup',(e)=>{
    if(e.target.value==''){
        cardnum1.innerHTML='0000';
        cardnum2.innerHTML='0000';
        cardnum3.innerHTML='0000';
        cardnum4.innerHTML='0000';
        return;
    }
    if(e.target.value.endsWith('  ')){
        e.target.value=e.target.value.slice(0,-1);
        return;
    }
    if(e.target.value.length<=4){
        cardnum1.innerHTML = e.target.value;
    }
    else if(e.target.value.length>5 && e.target.value.length<=9){
        cardnum2.innerHTML = e.target.value.substring(5);
    }
    else if(e.target.value.length>10 && e.target.value.length<=14){
        cardnum3.innerHTML = e.target.value.substring(10);
    }
    else if(e.target.value.length>15 && e.target.value.length<=19){
        cardnum4.innerHTML = e.target.value.substring(15);
    }
});

const cardname = document.querySelector('.card__name');
const iname = document.querySelector('#name');
iname.addEventListener('keyup',(e)=>{
    if(e.target.value.length<25)
        cardname.innerHTML=e.target.value;
    if(e.target.value == '')
        cardname.innerHTML=e.target.placeholder.substring(4);
});

const cardmm = document.querySelector('.card__month');
const imm = document.querySelector('#mm');
imm.addEventListener('keyup',(e)=>{
    if(e.target.value.length<3)
        cardmm.innerHTML=e.target.value;
    if(e.target.value == '')
        cardmm.innerHTML='00';
});

const cardyy = document.querySelector('.card__year');
const iyy = document.querySelector('#yy');
iyy.addEventListener('keyup',(e)=>{
    if(e.target.value.length<3)
        cardyy.innerHTML=e.target.value;
    if(e.target.value == '')
        cardyy.innerHTML='00';
});

const cardnumcode = document.querySelector('.card__numcode');
const icode = document.querySelector('#code');
icode.addEventListener('keyup',(e)=>{
    if(e.target.value.length<4)
        cardnumcode.innerHTML=e.target.value;
    if(e.target.value == '')
        cardnumcode.innerHTML='000';
});

function clearCard(){
    cardnum1.innerHTML='0000';
    cardnum2.innerHTML='0000';
    cardnum3.innerHTML='0000';
    cardnum4.innerHTML='0000';
    cardname.innerHTML=iname.placeholder.substring(4);
    cardmm.innerHTML='00';
    cardyy.innerHTML='00';
    cardnumcode.innerHTML='000';
}

const message = (form, show=true) =>{
    const msg = document.querySelector('.thanks-msg');
    if(show){
        msg.classList.remove('hidden');
        form.classList.add('hidden');
    }
    else{
        msg.classList.add('hidden');
        form.classList.remove('hidden');
    }
}

const form = document.querySelector('.form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let valid = true;

    let req = inumber.nextElementSibling;
    let inv = req.nextElementSibling;
    let required = false;
    if(inumber.value==''){
        req.classList.add('error');
        required=true;
        valid=false;
    }
    else{
        req.classList.remove('error');
    }
    if(!required && (
        (isNaN(cardnum1.innerHTML)) || 
        (isNaN(cardnum2.innerHTML)) || 
        (isNaN(cardnum3.innerHTML)) || 
        (isNaN(cardnum4.innerHTML)))){
        inv.classList.add('error');
        valid=false;
    }
    else if(!required && inumber.value.replaceAll(' ', '').length !== 16 ){
        inv.classList.add('error');
        valid=false;
    }
    else{
        inv.classList.remove('error');
    }
    required=false;
    req = iname.nextElementSibling;
    if(iname.value==''){
        req.classList.add('error');
        required=true;
        valid=false;
    }
    else{
        req.classList.remove('error');
    }
    required=false;
    const data = imm.closest('.date-inputs');
    req = data.nextElementSibling;
    inv = req.nextElementSibling;
    if(imm.value=='' || iyy.value==''){
        req.classList.add('error');
        required=true;
        valid=false;
    }
    else{
        req.classList.remove('error');
    }
    if(isNaN(imm.value)|| isNaN(iyy.value)){
        inv.classList.add('error');
        valid=false;
    }
    else
        inv.classList.remove('error');

    required=false;
    req = icode.nextElementSibling;
    inv = req.nextElementSibling;
    if(icode.value==''){
        req.classList.add('error');
        required=true;
        valid=false;
    }
    else{
        req.classList.remove('error');
    }
    if(isNaN(icode.value)){
        inv.classList.add('error');
        valid=false;
    }
    else
        inv.classList.remove('error');

    if(valid){
        message(form,true);
    }
});

const closebtn = document.querySelector('.close-btn');
closebtn.addEventListener('click',(e)=>{
    clearCard();
    form.reset();
    message(form, false);
});

