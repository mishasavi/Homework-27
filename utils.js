function createElement (content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}

function addResult(element) {
    if (result.firstElementChild){
        result.replaceChild (element,result.firstElementChild);
    }else{
        result.appendChild(element);
    }
}