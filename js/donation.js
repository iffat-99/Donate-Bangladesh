document.getElementById('donate').addEventListener('click',function()
{
    const donationAmount = getInputValueById('input-noakhali');

    const balance = getTextValueById('total-donation');
    const mainBalance = getTextValueById('main-balance');
if(donationAmount > mainBalance)
    {
        alert('Insufficient Balance');
        return;
    } 

if(donationAmount <= 0)
    {
        alert('Cannot Take Negative number');
        return;
    }
    if(isNaN(donationAmount))
    {
        alert('Only Take amount');
        return;
    }
    if(!Number.isInteger(donationAmount))
    {
        alert('Give a valid amount');
        return;
    }

    const newBalance = balance + donationAmount;
    document.getElementById('total-donation').innerText = newBalance;

    
    const newMainBalance = mainBalance - donationAmount;
    document.getElementById('main-balance').innerText = newMainBalance;
    document.getElementById('my_modal_1').showModal();
    localStorage.setItem('mainBalance', newMainBalance);                                                                                                                                               
   

    const now = new Date();
    const formattedDate = now.toString();
        const container = document.getElementById('history-container');
    const div = document.createElement('div');
    div.classList.add('border', 'border-gray-200', 'p-5', 'rounded-xl', 'space-y-3');
    div.innerHTML = `
    
    <h3 class= "text-lg font-bold">${donationAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
            <p>Date: ${formattedDate}</p>
            
    
`;

    container.appendChild(div);


})


