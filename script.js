const textArea = document.querySelector('textarea');

const fontSize = document.getElementById('fs');
const fontColor = document.getElementById('fc');
const textAlignButtons = document.querySelectorAll('#ta-container span');
const dropdownButton = document.getElementById('dropdown');
const fontStyleButtons = document.querySelectorAll('.dropdown-menu .dropdown-item')

// font size change
fontSize.addEventListener('input', changeFontSize)
function changeFontSize(){
	textArea.style.setProperty('font-size', `calc(${fontSize.value} * 0.8rem)`);
}
///////////////////

// font color change
fontColor.addEventListener('change', changeFontColor);
function changeFontColor(){
	textArea.style.setProperty('color', fontColor.value);
}
////////////////////

// text alignment change
textAlignButtons.forEach(button => {
	button.addEventListener('click', changeAlignment);
})
function changeAlignment(e){
	textAlignButtons.forEach(button => {
		if(button.getAttribute('id') === e.target.getAttribute('id')){
			button.classList.remove('btn-light');
			button.classList.add('btn-success');
			textArea.style.setProperty('text-align', button.getAttribute('id'));
		} else {
			button.classList.remove('btn-success');
			button.classList.add('btn-light');
		}
	});
}
////////////////////////

// font style change
fontStyleButtons.forEach(button => {
	button.addEventListener('click', changeButton);
})
function changeButton(e){
	dropdownButton.innerText = e.target.innerText;
	changeFontStyle(e.target.innerText);
}
function changeFontStyle(value){
	switch(value){
		case 'None':
			textArea.style.removeProperty('font-weight');
			textArea.style.removeProperty('font-style');
			textArea.style.removeProperty('text-decoration');
			break;
		case 'Bold':
			textArea.style.setProperty('font-weight', 'bold');
			
			textArea.style.removeProperty('font-style');
			textArea.style.removeProperty('text-decoration');
			break;
		case 'Italics':
			textArea.style.setProperty('font-style', 'italic');
			
			textArea.style.removeProperty('font-weight');
			textArea.style.removeProperty('text-decoration');
			break;
		case 'Underline':
			textArea.style.setProperty('text-decoration', 'underline');
			
			textArea.style.removeProperty('font-weight');
			textArea.style.removeProperty('font-style');
			break;
		case 'Strikethrough':
			textArea.style.setProperty('text-decoration', 'line-through');
			
			textArea.style.removeProperty('font-weight');
			textArea.style.removeProperty('font-style');
			break;
	}
}
////////////////////

// setting styles on pageload
function defaultStyles(){
	textArea.style.setProperty('font-size', `calc(${fontSize.value} * 0.8rem)`);
	textArea.style.setProperty('color', fontColor.value);
}

defaultStyles();
/////////////////////////////
