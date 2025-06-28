
document.getElementById('donate-quota').addEventListener('click', function () {
    const quoataDonation = getInputValueById('input-quota');
    const quotaBalance = getTextValueById('total-donation-quota');
    const mainBalance = getTextValueById('main-balance');
    if (quoataDonation > mainBalance) {
        alert('Insufficient Balance');
        return;
    }

    if (quoataDonation <= 0) {
        alert('Cannot Take Negative number');
        return;
    }
    if (isNaN(quoataDonation)) {
        alert('Only take amount');
        return;
    }
    if (!Number.isInteger(quoataDonation)) {
        alert('give a valid number');
        return;
    }
    const newQuotaBalance = quotaBalance + quoataDonation;

    document.getElementById('total-donation-quota').innerText = newQuotaBalance;



    const newMainBalance = mainBalance - quoataDonation;
    document.getElementById('main-balance').innerText = newMainBalance;
    document.getElementById("my_modal_1").showModal();
    localStorage.setItem('mainBalance',newMainBalance);
   

    const now = new Date();
    const formattedDate = now.toString();

    const container = document.getElementById('history-container');
    const div = document.createElement('div');
    div.classList.add('border', 'border-gray-200', 'p-5', 'rounded-xl', 'space-y-3');
    div.innerHTML = `<h3 class= "text-lg font-bold">${quoataDonation} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
            <p>Date: ${formattedDate}</p>`;

    container.appendChild(div);

})