const seat = document.getElementsByClassName('buttonKey')
let seatCount = 0
let available = 40;
let totalPrice = 0;
let grandTotalc = 0;
for (let index = 0; index < seat.length; index++) {
    const buttonKey = seat[index];
    // console.log(buttonKey)
    buttonKey.addEventListener('click' , function () {
        if (seatCount >= 4) {
            alert("You can only select up to 4 seats.");
            return;
        }
        
        if (buttonKey.classList.contains('bg-[#1DD100]')) {
            return;
        }
        buttonKey.classList.add('bg-[#1DD100]');

        const totalSeat = document.getElementById('available-seat');
        available = available - 1;
        totalSeat.innerText = parseInt(available);
        
        const seatBooking = document.getElementById('seat-booking');
        seatCount = seatCount + 1;
        seatBooking.innerText = parseInt(seatCount);


        const seatName = buttonKey.innerHTML;
        const economy = 'Economy'
        const price = parseFloat("550")
        const seatInfo = document.getElementById('keyPressed')
        const p1 = document.createElement('p')
        p1.innerText = seatName
        seatInfo.appendChild(p1)
        const p2 = document.createElement('p')
        p2.innerText = economy
        seatInfo.appendChild(p2)
        const p3 = document.createElement('p')
        p3.innerText = price
        seatInfo.appendChild(p3)
        totalPrice += price
        document.getElementById('totalAmount').innerText = totalPrice
        document.getElementById('grandTotalAmount').innerText = totalPrice
        
        if (seatCount === 4) {
            const couponFilter = document.getElementById('inputField');
            couponFilter.classList.add('bg-green-200');
            couponFilter.classList.remove('btn-disabled');

            const couponBtn = document.getElementById('btnApply');
            couponBtn.addEventListener('click', function () {
                const couponFilterValue = document.getElementById('inputField').value;
                const code = couponFilterValue

                const discountElement = document.getElementById('discountPrice');
                const totalPrice = parseInt(document.getElementById('totalAmount').innerText);
                const grandTotal = document.getElementById('grandTotalAmount');
                if (code === 'NEW15') {
                    discount = totalPrice * 0.15;
                    discountElement.innerText = 'Discount : ' + discount;
                    grandTotal.innerText = totalPrice - discount;
                } else if (code === 'Couple 20') {
                    discount = totalPrice * 0.20;
                    discountElement.innerText = 'Discount : ' + discount;
                    grandTotal.innerText = totalPrice - discount;
                } else {
                    alert('Discount code is not available');
                }
                const codeBtn = document.getElementById('code-button');
                codeBtn.classList.add('hidden');
            });
        }
        
    })
}


const numberField = document.getElementById('num-field');
numberField.addEventListener('keyup', function (e) {
    const number = e.target.value;
    const nextBtn = document.getElementById('next-button');
    if (number !== '') {
        nextBtn.removeAttribute('disabled');
    } else {
        nextBtn.setAttribute('disabled', true);
        numberField.value = '';
    }
});

const nextBtn = document.getElementById('next-button');
nextBtn.addEventListener('click', function () {
    const congratulation = document.getElementById('congratulations');
    congratulation.classList.remove('hidden');
});
function Continue() {
    const numberField = document.getElementById('num-field');
    const nextBtn = document.getElementById('next-button');
    numberField.value = '';
    const nameField = document.getElementById('name-field');
    nameField.value = '';
    const emailField = document.getElementById('email-field');
    emailField.value = '';
    nextBtn.setAttribute('disabled', true);
    const congratulation = document.getElementById('congratulations')
    congratulation.classList.add('hidden');
}
