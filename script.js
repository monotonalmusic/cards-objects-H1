
import boxes from "/boxes.json" assert { type: "json" };

const app = {};

app.init = () => {
    const mainDiv = document.querySelector('.main-div');
    const gridButton = document.querySelector('.grid-button');
    const listButton = document.querySelector('.list-button');

    const gridTemplate = box => {
            let boxDiv = document.createElement('div');
            boxDiv.classList.add('box');
            boxDiv.innerHTML = `
            <div class="box-top"></div>
            <div class="box-main">
                <div class="box-text">
                    <h2>${box.name} ${box.lastName}</h2>
                    <p>${box.email}</p>
                </div>
                <button class="box-button pretty-button">${box.buttonText}</button>
            </div>
            <img src="${box.src}" id="img${box.id}" class="box-img" alt="avatar">
            
            `;
            mainDiv.appendChild(boxDiv);

    };

    const listTemplate = box => {
            let boxDiv = document.createElement('div');
            boxDiv.classList.add('list-box');
            boxDiv.innerHTML = `
            <img src="${box.src}" id="img${box.id}" class="box-img-list" alt="avatar">
            <div class="box-main-list">
                <div class="box-text">
                    <h2>${box.name} ${box.lastName}</h2>
                    <p>${box.email}</p>
                </div>
                <button class="box-button pretty-button">${box.buttonText}</button>
            </div>
            
            `;
            mainDiv.appendChild(boxDiv);

    };

    const buttonsArray = [gridButton, listButton];

    //clears maindiv
    buttonsArray.forEach(button => {
        button.addEventListener('click', () => {
            mainDiv.innerHTML = '';
        });
    });

    boxes.forEach(box => {
        gridButton.addEventListener('click', () => {
            gridTemplate(box);
            
        });
    
        listButton.addEventListener('click', () => {
            listTemplate(box);
        
        });

    });

};

app.init();
