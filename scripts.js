// Blood Donor Form Submission
document.getElementById('donorForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const bloodGroup = document.getElementById('bloodGroup').value;
    const location = document.getElementById('location').value;
  
    // Create a new list item
    const donorItem = document.createElement('li');
    donorItem.textContent = `${name} (${bloodGroup}) - ${location}`;
  
    // Append to the donor list
    document.getElementById('donors').appendChild(donorItem);
  
    // Clear the form
    document.getElementById('donorForm').reset();
  });