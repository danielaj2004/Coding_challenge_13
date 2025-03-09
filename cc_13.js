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