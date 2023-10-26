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

const getShape = (char) => {
  if (char.match(/[A-ZÑ]/)) return 'block';
  if (char.match(/[a-zñ]/)) return 'circle';
  if (char.match(/[0-9]/)) return 'triangle';
  return 'block';
};

// Primero, rellenar la barra con las letras del abecedario
for (let character in colorMapping) {
    if (isNaN(parseInt(character))) { // Solo para las letras del abecedario
        const letterDiv = `<span style="font-weight: bold; color: rgb(${colorMapping[character]});">${character}</span>`;
        alphabetBar.innerHTML += letterDiv;
    }
}

// Luego, rellenar la barra con los números
for (let character in colorMapping) {
    if (!isNaN(parseInt(character))) { // Solo para los números
        const numberDiv = `<span style="font-weight: bold; color: rgb(${colorMapping[character]});">${character}</span>`;
        alphabetBar.innerHTML += numberDiv;
    }
}

fileInput.addEventListener('change', event => {
  const file = event.target.files[0];
  const reader = new FileReader();
  
  // Tu lógica para manejar la lectura del archivo irá aquí.
  reader.addEventListener('load', event => {
    output.innerHTML = ''; // Limpiar el output
    const text = event.target.result;for (const char of text) {
  const upperChar = char.toUpperCase();
  const color = colorMapping[upperChar] || '0,0,0';
  const shape = getShape(char);
  const div = document.createElement('div');
  div.className = shape;

  if (shape === 'triangle') {
    div.style.borderBottomColor = `rgb(${color})`;
  } else {
    div.style.backgroundColor = `rgb(${color})`;
  }

  output.appendChild(div);
}

  });
  
  reader.readAsText(file);
});
