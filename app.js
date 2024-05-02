const btn=document.querySelector("button");
const bmidisplay=document.querySelector("#bmi p");
const enterwtp=document.querySelector(".enterwt p");
const enterhtp=document.querySelector(".enterht p");
const wtunitsdd=document.querySelector(".selectmassunit select");
    const htunitsdd=document.querySelector(".selectheightunit select");

    let mul1=1;
    let mul2=1;

    wtunitsdd.addEventListener("change",()=>{
    let wu=wtunitsdd.value;
    // console.log(wu);
    if( wu==="grams"){mul1=0.001;enterwtp.innerText=`enter weight in grams`;}
    // else if(wu==="kg") {mul1=1; enterwtp.innerText=`enter weight in kg`; }
    else {mul1=0.454; enterwtp.innerText=`enter weight in pounds`;}
    // console.log(mul1);
    })

    htunitsdd.addEventListener("change",()=>{
    let hu=htunitsdd.value;
    // console.log(hu);
    if( hu==="cm"){mul2=0.01;enterhtp.innerText=`enter height in cm`;}
    // else if (hu==="m"){mul2=1; enterhtp.innerText=`enter height in m`;}
else {mul2=0.0254;enterhtp.innerText=`enter height in inches`;}
// console.log(mul2);
    })







window.addEventListener("load",()=>{
    bmidisplay.innerText="";
});


const updatebmi=()=>{
    const inwt=document.querySelector("#yourwt");
const inht=document.querySelector("#yourht");
let wt=inwt.value;
let ht=inht.value;
    if(wt==="") {
     bmidisplay.innerText="Please give weight input"
    }
     else if(ht===""){
     bmidisplay.innerText="Please give height input"
    }
    else {
let bmi=(mul1*wt)/((mul2*ht)^2);
// console.log(bmi,mul1,mul2,wt,ht);
    
    if(bmi<18.5) bmidisplay.innerText=`Your BMI is ${bmi} (underweight)`;
   else if(bmi>=18.5 && bmi<=25) bmidisplay.innerText=`Your BMI is ${bmi} (normal)`;
   else if(bmi>25 && bmi<=30) bmidisplay.innerText=`Your BMI is ${bmi} (overweight)`;
   else bmidisplay.innerText=`Your BMI is ${bmi} (obese)`;
    }
 }

 let i=1;
btn.addEventListener("click",(evt)=>{
   evt.preventDefault();
   updatebmi();
   btn.classList.add("hide");
})