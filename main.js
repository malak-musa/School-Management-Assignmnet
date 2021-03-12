var students = [];

document.getElementById('submit').addEventListener('click', () => {
	let nameInputEl = document.getElementById('Name');
	let idInputEl = document.getElementById('ID');
	let gdpaInputEl = document.getElementById('GDPA');

	inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);
	insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);
	showMessage('success');
	
    students = null;
});

function inputValidation(name, id, gdpa) {
	if (name == '') {
		alert('Please insert student name');
	}
	if (id == '') {
		alert('Please insert student ID');
	}
	if (gdpa == '') {
		alert('Please insert student GDPA');
	}
}

function insertStudent(name, id, gdpa) {
	let std = {
		name: name,
		id: id,
		gdpa: gdpa,
	};
	students.push(std);
	console.log('students array: ', students);
}

function showMessage(event){
    if (event == 'success') {
        alert('Studnet added!');
    }else{
        alert('Faild to add student');
    }
}

//show list for the user
function showList(){
	let list = document.getElementById('students');
	let nameInputEl = document.getElementById('Name').value;
	let idInputEl = document.getElementById('ID').value;
	let gdpaInputEl = document.getElementById('GDPA').value;
	let li = document.createElement('li');
	li.appendChild(document.createTextNode(nameInputEl + ' ' + idInputEl + ' ' + gdpaInputEl));
	list.appendChild(li);
		return false;
}

//delete
function removeItem() { 
	let list = document.getElementById('students');
	let nameInputEl = document.getElementById('Name');
	let idInputEl = document.getElementById('ID');
	let gdpaInputEl = document.getElementById('GDPA');
	let item = document.getElementById(nameInputEl.value, idInputEl.value, gdpaInputEl.value);
	list.removeChild(item);
}
