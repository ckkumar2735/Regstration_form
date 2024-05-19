document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email    =    document.getElementById('email').value;
    const phone    =    document.getElementById('phone').value;
    const dob      =      document.getElementById('dob').value;
    const branch   =   document.getElementById('branch').value;
    const semester = document.getElementById('semester').value;

    // Basic validation 
    if (fullName && email && phone && dob && branch && semester) {
        alert('Registration successful!');
    } else {
        alert('Please fill in all the fields.');
    }
});
