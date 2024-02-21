let sum =0;
let count = 1;
const isclickBtn = false;
const isTypeInput = false
const allBtn =document.getElementsByClassName('seat-button')
for (const btn of allBtn) {
    btn.addEventListener('click', function(e){
        if( document.getElementById('seat-counting').innerText > 3){
            alert('You can only add 4seats in Onetime')
            return 
        }
        e.target.style.backgroundColor = "#1DD100";
       const btnValue = e.target.innerText;
       
        // seat count section
        const decrementCount = parseInt(document.getElementById('seat-count-decremented').innerText)
        const decri = decrementCount - count;
        document.getElementById('seat-count-decremented').innerText = decri;
        // ----------selection section -------------------
        const orederSit = parseInt(document.getElementById('seat-counting').innerText);
        const increment = orederSit + count
        document.getElementById('seat-counting').innerText = increment;
        // Append
        
       const selectedItem =  document.getElementById('appending')
        const li = document.createElement('li')
        li.innerHTML = `${btnValue} &nbsp; &nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  Economoy
        &nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  550`
        selectedItem.appendChild(li)
        // Total section 
        const TotalValue = parseInt(document.getElementById('totalValue').innerText);
        const grandTotal = parseInt(document.getElementById('grand-total-amount').innerText)
        const total = TotalValue + 550;
        document.getElementById('totalValue').innerText = total
        document.getElementById('grand-total-amount').innerText = total
        
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
    const grandTotal = parseInt(document.getElementById('grand-total-amount').innerText)
   const inputFeild =  document.getElementById('input-field');
   const apply = document.getElementById('Apply');
   const inputValue = inputFeild.value;
   if(inputValue==='NEW15'){
    document.getElementById('grand-total-amount').innerText = TotalValue - TotalValue*0.15;
    inputFeild.hidden = true;
    apply.hidden = true;
   }else if(inputValue==='Couple 20'){
    document.getElementById('grand-total-amount').innerText = TotalValue - TotalValue*0.2;
    inputFeild.hidden = true;
    apply.hidden = true;
   }
   else{
    alert('Invalid Coupon')
   }

})
const numbers = document.getElementById('number')

        numbers.addEventListener('input',function nextSection(e){
            
            if (e.target.value > 0 && sum >0) {
                const nextBtn = document.getElementById('next-button');
                nextBtn.removeAttribute('disabled')
            }
        })

const modal = document.getElementById('next-button')
const relodes = document.getElementById('reloading').addEventListener('click' , function(e){
    window.location.reload();
})