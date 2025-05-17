var change = document.getElementById('switch');
var rotation = 0;
var a=0;
change.addEventListener("click", () => {
    rotation += 90;
    master.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

});

const switchInput = document.querySelector('#switch input');
const motherDiv = document.getElementById('mother');


switchInput.addEventListener('change', () => {
  if (switchInput.checked) {
    motherDiv.classList.remove('day'); 
    motherDiv.classList.add('night'); 
  } else {
    motherDiv.classList.remove('night');
    motherDiv.classList.add('day');
  }
});


