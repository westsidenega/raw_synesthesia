const fileInput = document.getElementById('fileInput');
const output = document.getElementById('output');
const alphabetBar = document.getElementById('alphabet-bar');

const colorMapping = {
  'A': '55,55,225',
  'B': '255,85,168',
  '6': '255,85,168',
  'C': '134,234,57',
  '0': '134,234,57',
  'D': '255,255,0',
  '2': '255,255,0',
  'E': '242,168,7',
  'F': '72,152,213',
  '8': '72,152,213',
  'G': '255,255,255',
  'H': '190,187,187',
  'I': '220,209,50',
  'J': '235,229,229',
  'K': '114,78,29',
  'L': '255,148,173',
  '1': '255,148,173',
  'M': '221,194,156',
  '3': '221,194,156',
  'N': '21,148,141',
  '4': '21,148,141',
  'Ñ': '21,148,141', // con un punto en medio
  'O': '254,116,42',
  'P': '253,238,165',
  '9': '253,238,165',
  'Q': '255,0,0',
  'R': '78,147,31',
  'S': '183,31,143',
  '5': '183,31,143',
  'T': '172,128,77',
  '7': '172,128,77',
  'U': '4,200,50',
  'V': '189,247,255',
  'W': '123,20,95',
  'X': '190,25,25',
  'Y': '209,240,163',
  'Z': '116,61,37',
  ' ': '0,0,0'  // Espacio
};

// Rellenar la barra del abecedario
for (let letter in colorMapping) {
  if (isNaN(parseInt(letter))) { // Solo para las letras del abecedario
    const letterDiv = `<span style="font-weight: bold; color: rgb(${colorMapping[letter]});">${letter}</span>`;
    alphabetBar.innerHTML += letterDiv;
  }
}

fileInput.addEventListener('change', event => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const text = e.target.result.toUpperCase();
    let html = '';

    for (let i = 0; i < text.length; i++) {
      const character = text[i];
      const color = colorMapping[character] || '0,0,0'; // Default to black if the character is not mapped
      html += `<div class="block" style="background-color: rgb(${color})"></div>`;
    }

    output.innerHTML = html;
  };

  reader.readAsText(file);
});
