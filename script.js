const textArea = document.querySelector('textarea');

const fontSize = document.getElementById('fs');
const fontColor = document.getElementById('fc');
const textAlignButtons = document.querySelectorAll('#ta-container span');

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

////////////////////

// setting styles on pageload
function defaultStyles(){
	textArea.style.setProperty('font-size', `calc(${fontSize.value} * 0.8rem)`);
	textArea.style.setProperty('color', fontColor.value);
}

defaultStyles();
/////////////////////////////
