function colourGen() {
    const hexCode = "0123456789ABCDEF";
    let randomiser = '#';
  
    for (let i = 0; i < 6; i++) {
      randomiser += hexCode[Math.floor(Math.random() * 16)];
    }
  
    return randomiser;
  }
  
  function applyColours() {
    for (let i = 1; i <= 5; i++) {
      const box = document.getElementById(`box${i}`);
      box.style.backgroundColor = colourGen();
    }
  }
  
  function handleKeyDown(event) {
    if (event.keyCode === 32) {
      console.log("Spacebar pressed!");
      applyColours();
    }
  }
  
  // Attach the event listener to the document
  document.addEventListener('keydown', handleKeyDown);
  

// function pastels() {
//     let h = Math.floor(Math.random() * 360); // Hue operates on a 360 degree wheel, so this ensures it picks within that
//     let s = Math.floor(Math.random() * 100); // Saturation is a percentage
//     let l = 80 // This says how light the colour should be, so you can set it as a specific lightness to only get pastels!

//     let hslColour = `hsl(${h}, ${s}%, ${l}%)`;
// }