


const appendTextInsideElement = (text, tagId)=> {
    let id = `#${tagId}`;
    console.log("id : "+id)
    let oldText = document.querySelector(id).innerText;
    let newText = oldText + ", " + text;
    document.querySelector("#"+tagId).innerText = newText;
}

appendTextInsideElement("From Dipak", "h21");

const addTextInClassTag = (text, className) => {
    let box = document.querySelectorAll("."+className);
    
    box.forEach((value, key)=> {
        box[key].innerText= text;
    });
}

addTextInClassTag("box element", "box");