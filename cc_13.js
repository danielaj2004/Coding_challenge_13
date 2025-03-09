// task 2
function addEmployeeCard(name, position) { // main employee card container
        const card = document.createElement('div');
        card.setAttribute('class', 'employee-card'); // class for style
    
        const heading = document.createElement('h3'); // name as heading
        heading.textContent = name;
    
        const paragraph = document.createElement('h3'); // paragraph form
        paragraph.textContent = position;
    
        const removeButton = document.createElement('button'); // making remove button
        removeButton.textContent = 'Remove';
    
        const editButton = document.createElement('button'); // makeing edit button in task 5
        editButton.textContent = 'Edit';
    
        card.appendChild(heading);
        card.appendChild(paragraph);
        card.appendChild(editButton);
        card.appendChild(removeButton); // appending elements to card
    
        document.getElementById('employeeContainer').appendChild(card); // appending card to employee container
    
        removeButton.addEventListener('click', function(event) { // remove functionality

            // task 4 Implementing Removal of Employee Cards with Event Bubbling
        console.log('Remove button has been clicked');
        event.stopPropagation();
        card.remove();
    });

    // task 5
    editButton.addEventListener('click', function() {
        const nameInput = document.createElement('input');
        nameInput.value = heading.textContent;

        const positionInput = document.createElement('input');
        positionInput.value = paragraph.textContent;

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        card.appendChild(positionInput);
        
        card.innerHTML = '';
        card.appendChild(nameInput);
        card.appendChild(position);
        card.appendChild(saveButton);
        card.appendChild(removeButton); // appending new functions

        saveButton.addEventListener('click', function() {
            heading.textContent = nameInput.value;
            paragraph.textContent = positionInput.value; // save button listener

            card.innerHTML = '';
            card.appendChild(heading);
            card.appendChild(paragraph);
            card.appendChild(editButton);
            card.appendChild(removeButton);
        }); // event listener for save button
    });
}

// example employees
addEmployeeCard('Sam', 'Tester');
addEmployeeCard('Eddy', 'Diagnostics');
addEmployeeCard('Bob', 'Manager');

// task 3
function bulkUpdateEmployeeCards() {
    const cards = document.querySelectorAll('.employee-card');
    const cardArray = Array.from(cards);

    cardArray.forEach(card => {
        card.style.backgroundColor = 'lightgreen';
    }); // function for bulk updating to cards
}

bulkUpdateEmployeeCards(); // activate bulk update function