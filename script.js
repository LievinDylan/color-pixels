const app = {
    defaultGridSize: 8,
    defaultCellSize: 30,
    colors: ["red", "blue", "yellow", "green", "purple", "orange", "white", "black"],
    chosenColor: "red",
  
    init() {
      app.generateGrid(app.defaultGridSize, app.defaultCellSize); 
      app.generateForm(); 
      app.listenToSubmitOnForm();
      app.generateColorPalette();
    },
  
    generateGrid(gridSize, cellSize) { 
      document.querySelector("#invader").innerHTML = ""; 

      for (let i = 0; i < gridSize; i++) { 
        const rowElement = document.createElement("div"); 
        rowElement.classList.add("row");
    
        const invaderElement = document.querySelector("#invader"); 
        invaderElement.appendChild(rowElement); 
    
        for (let j = 0; j < gridSize; j++) {
          const cellElement = document.createElement("div"); 
          cellElement.classList.add("cell"); 
          cellElement.style.height = `${cellSize}px`; 
          cellElement.style.width = `${cellSize}px`;
          rowElement.appendChild(cellElement); 
        }
      }
    
      app.listenToClickOnCells();
    },
  
    listenToClickOnCells() {
      const cellElements = document.querySelectorAll(".cell"); 
      
      for (const cellElement of cellElements) { 
        cellElement.addEventListener("click", () => { 
          if (cellElement.classList.contains(app.chosenColor)) {
            cellElement.classList.remove(app.chosenColor);
          } else {
            cellElement.className = `cell ${app.chosenColor}`;
          }
        });
      }
    },
  
    generateForm() {
      const gridSizeInput = document.createElement("input");
      gridSizeInput.id = "grid-size";
      gridSizeInput.type = "number";
      gridSizeInput.placeholder = "Taille de la grille";

      const cellSizeInput = document.createElement("input");
      cellSizeInput.id = "cell-size";
      cellSizeInput.type = "number";
      cellSizeInput.placeholder = "Taille des pixels";
    
      const buttonElement = document.createElement("button");
      buttonElement.textContent = "Valider";
    
      const formElement = document.querySelector("form.configuration");
      formElement.appendChild(gridSizeInput);
      formElement.appendChild(cellSizeInput);
      formElement.appendChild(buttonElement);
    },
  
    listenToSubmitOnForm() {
      const formElement = document.querySelector("form");
      formElement.addEventListener("submit", (event) => {
        event.preventDefault(); 
        
        const gridSizeInput = document.querySelector("#grid-size"); 
        const gridSize = parseInt(gridSizeInput.value); 
      
        const cellSizeInput = document.querySelector("#cell-size");
        const cellSize = parseInt(cellSizeInput.value);
        
        app.generateGrid(gridSize, cellSize); 
      });
    },
  
    generateColorPalette() {
      const colorPaletteElement = document.getElementById("color-palette");
  
      for (const color of app.colors) {
        const colorElement = document.createElement("div");
        colorElement.classList.add("color-picker");
        colorElement.classList.add(color);
  
        if (color === app.chosenColor) {
          colorElement.classList.add("selected");
        }
  
        colorElement.addEventListener("click", () => {
          app.chosenColor = color;
          document.querySelector(".selected").classList.remove("selected"); 
          colorElement.classList.add("selected");
        });
  
        colorPaletteElement.appendChild(colorElement);
      }
  
  
    }
  };
  
  app.init();

  
  