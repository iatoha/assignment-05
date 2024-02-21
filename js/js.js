let sum =0;
let count = 1;
const isclickBtn = false;
const isTypeInput = false
const allBtn =document.getElementsByClassName('sit-btn')
for (const btn of allBtn) {
    btn.addEventListener('click', function(e){
        if( document.getElementById('sit-count').innerText > 3){
            alert('You have already Four sit  ')
            return 
        }
        e.target.style.backgroundColor = "#1DD100";
       const btnValue = e.target.innerText;
       
        // decrement Seat count section
        const decrementCount = parseInt(document.getElementById('sit-ount-decrement').innerText)
        const decri = decrementCount - count;
        document.getElementById('sit-ount-decrement').innerText = decri;
        // ----------selection section -------------------
        const orederSit = parseInt(document.getElementById('sit-count').innerText);
        const increment = orederSit + count
        document.getElementById('sit-count').innerText = increment;
        // Append Html 
        
       const selectedItem =  document.getElementById('append-html')
        const li = document.createElement('li')
        li.innerHTML = `${btnValue} &nbsp; &nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  Economoy
        &nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  550`
        selectedItem.appendChild(li)
        // Total section 
        const TotalValue = parseInt(document.getElementById('totalValue').innerText);
        const grandTotal = parseInt(document.getElementById('grand_total-value').innerText)
        const total = TotalValue + 550;
        document.getElementById('totalValue').innerText = total
        document.getElementById('grand_total-value').innerText = total
        
        // const nextBtn = document.getElementById('next-btn');
        // nextBtn.removeAttribute('disabled')
        sum++;
        if(sum ==4){
            const apply_Btn = document.getElementById('Apply');
            apply_Btn.removeAttribute('disabled')
        }
        
        btn.setAttribute('disabled', true)
        nextSection()
    })
}

const applyBtn = document.getElementById('Apply'); 
applyBtn.addEventListener('click', function(e){
    const TotalValue = parseInt(document.getElementById('totalValue').innerText);
    const grandTotal = parseInt(document.getElementById('grand_total-value').innerText)
   const inputFeild =  document.getElementById('input-feild');
   const apply = document.getElementById('Apply');
   const inputValue = inputFeild.value;
   if(inputValue==='NEW15'){
    document.getElementById('grand_total-value').innerText = TotalValue - TotalValue*0.15;
    inputFeild.hidden = true;
    apply.hidden = true;
   }else if(inputValue==='Couple 20'){
    document.getElementById('grand_total-value').innerText = TotalValue - TotalValue*0.2;
    inputFeild.hidden = true;
    apply.hidden = true;
   }
   else{
    alert('Invalid Cupon')
   }

})
const numbers = document.getElementById('number')
        // console.log(numbers.target);
        numbers.addEventListener('input',function nextSection(e){
            
            if (e.target.value > 0 && sum >0) {
                const nextBtn = document.getElementById('next-btn');
                nextBtn.removeAttribute('disabled')
            }
        })

const modal = document.getElementById('next-btn')
const relodes = document.getElementById('relod').addEventListener('click' , function(e){
    window.location.reload();
})






