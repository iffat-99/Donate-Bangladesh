function setActive(id) {
  document.getElementById('donation').classList.remove('bg-button');
  document.getElementById('history').classList.remove('bg-button');

  document.getElementById(id).classList.add('bg-button');
}

// Place these outside the function
document.getElementById('donation').onclick = () => setActive('donation');
document.getElementById('history').onclick = () => setActive('history');

document.getElementById('donation').addEventListener('click',function()
{

    showSectionById('donation-section');
})


document.getElementById('history').addEventListener('click',function()
{

    showSectionById('history-section');
})
