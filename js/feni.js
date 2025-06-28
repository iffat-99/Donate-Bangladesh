document.getElementById('donate-feni').addEventListener('click', function () {
    const feniDonation = getInputValueById('input-feni');
    const feniBalance = getTextValueById('total-donation-feni');
    const mainBalance = getTextValueById('main-balance');
    if (feniDonation > mainBalance) {
        alert('Insufficient Balance');
        return;
    }

    if (feniDonation <= 0) {
        alert('Cannot Take Negative number');
        return;
    }

    if (isNaN(feniDonation)) {
        alert('Only take amount');
        return;

    }
    if (!Number.isInteger(feniDonation)) {
        alert('Give a valid amount');
        return;
    }
    const feniNewBalance = feniBalance + feniDonation;

    document.getElementById('total-donation-feni').innerText = feniNewBalance;


    const newMainBalance = mainBalance - feniDonation;
    document.getElementById('main-balance').innerText = newMainBalance;
    document.getElementById('my_modal_1').showModal();
    localStorage.setItem('mainBalance',newMainBalance);

    const now = new Date();
    const formattedDate = now.toString();


    const container = document.getElementById('history-container');
    const div = document.createElement('div');
    div.classList.add('border', 'border-gray-200', 'p-5', 'rounded-xl', 'space-y-3');
    div.innerHTML = `
    
    <h3 class= "text-lg font-bold">${feniDonation} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
            <p>Date: ${formattedDate}</p>
            
    
`;

    container.appendChild(div);


})