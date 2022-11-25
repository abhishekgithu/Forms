/*
const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const aname = document.getElementById('aname');
const ename = document.getElementById('ename');
const male = document.getElementById('male');
const female = document.getElementById('female');
const hindi = document.getElementById('hindi');
const eng = document.getElementById('eng');
const urdu = document.getElementById('urdu');
const submit = document.getElementById('submit');

form.addEventListener('submit', (e)=> {
e.preventDefault();

checkInputs();
});

function checkInputs(){
    const fnameValue = fname.ariaValueMax.trim();
    const lnameValue = lname.ariaValueMax.trim();
    const anameValue = aname.ariaValueMax.trim();
    const enameValue = ename.ariaValueMax.trim();
    const maleValue = male.ariaValueMax.trim();
    const femaleValue = female.ariaValueMax.trim();
    const hindiValue = hindi.ariaValueMax.trim();
    const engValue = eng.ariaValueMax.trim();
    const urduValue = urdu.ariaValueMax.trim();
    const submitValue = submit.ariaValueMax.trim();

    if(fnameValue ===''){
        setErrorFor(fname, 'Firstname cannot be blank');
    }
    else{
        setSuccessFor(fname);
    }
    if(lnameValue ===''){
        setErrorFor(lname, 'Lastname cannot be blank');
    }
    else{
        setSuccessFor(lname);
    }
    if(enameValue === ''){
        setErrorFor(ename, 'Email cannot be blank');
    }
    else if(!isEmail(enameValue)){
        setErrorFor(ename,'Email is not valid');
    }
    else{
        setSuccessFor(ename);
    }
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(ename){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(ename);
}
*/
// alert("hii");
function validation(){
// var form = document.getElementById('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
// var aname = document.getElementById('aname').value;
var ename = document.getElementById('ename');
var ps = document.getElementById('ps');
// var male = document.getElementById('male').value;
// var female = document.getElementById('female').value;
// var hindi = document.getElementById('hindi').value;
// var eng = document.getElementById('eng').value;
// var urdu = document.getElementById('urdu').value;
// var submit = document.getElementById('submit').value;

if(fname.value.trim() == ""){
   document.getElementById('name').innerHTML= " ** Please fill first name ";
  
   fname.style.border="solid 3px blue";
    setTimeout(()=>{
        document.getElementById('name').innerHTML=""
     
    },3000)

    return false;
}
if(lname.value.trim() == ""){
    document.getElementById('lastname').innerHTML= " ** Please fill last name ";
    lname.style.border="solid 3px blue";
    setTimeout(()=>{
        document.getElementById('lastname').innerHTML=""
    },3000)
    return false;
}

if(ename.value.trim() == ""|| ename.index("@")<=0){
    document.getElementById('Email').innerHTML=" ** Invalid Email";
    ename.style.border="solid 3px blue";
    setTimeout(()=>{
        document.getElementById('Email').innerHTML=""
    },3000)
    return false;
}

if(ps.value.trim() == ""){
    document.getElementById('pwd').innerHTML= " ** please fill the  password field";
    setTimeout(()=>{
        document.getElementById('pwd').innerHTML=""
    },3000)
    // ps.style.border="solid 3px blue";
    return false;
}
if(ps.value.trim().length <=5 || ps.value.trim().length >20){
    document.getElementById('pwd').innerHTML=" ** Passwords length must be in between 5 and 20";
    return false;
}
}
// validation();