const options = document.querySelectorAll('.option');
const totalDisplay = document.querySelector('.summary .total');

options.forEach(option => {
  const radio = option.querySelector('input[type="radio"]');

  option.addEventListener('click', () => {
    // Trigger radio button selection
    radio.checked = true;

    // Clear active state from all options
    options.forEach(opt => opt.classList.remove('active'));

    // Add active state to the selected option
    option.classList.add('active');

    // Update total based on selected option
    const value = radio.value;
    let total;

    if (value === '1') total = '$10.00 USD';
    else if (value === '2') total = '$18.00 USD';
    else if (value === '3') total = '$24.00 USD';

    totalDisplay.textContent = `Total: ${total}`;
  });
  
  radio.addEventListener('change', () => {
    options.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');
  });
});
