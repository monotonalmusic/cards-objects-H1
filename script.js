function makeBox (id, src, name, lastName, email, buttonText) {
    this.id = id,
    this.src = src,
    this.name = name,
    this.lastName = lastName,
    this.email = email,
    this.buttonText = buttonText
};

let box1 = new makeBox (1, "https://i.pravatar.cc/300?img=1", "Jens", "Hansen", "jenshansen69@yahoo.com", "Click me");
let box2 = new makeBox (2, "https://i.pravatar.cc/300?img=2", "Jens", "Hansen", "jenshansen69@yahoo.com", "Click me");
let box3 = new makeBox (3, "https://i.pravatar.cc/300?img=3", "Jens", "Hansen", "jenshansen69@yahoo.com", "Click me");
let box4 = new makeBox (4, "https://i.pravatar.cc/300?img=4", "Jens", "Hansen", "jenshansen69@yahoo.com", "Click me");
let box5 = new makeBox (5, "https://i.pravatar.cc/300?img=5", "Jens", "Hansen", "jenshansen69@yahoo.com", "Click me");
let box6 = new makeBox (6, "https://i.pravatar.cc/300?img=6", "Jens", "Hansen", "jenshansen69@yahoo.com", "Click me");

let boxes = [box1, box2, box3, box4, box5, box6];

boxes.forEach(box => {
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
    document.querySelector('.main-div').appendChild(boxDiv);
});
