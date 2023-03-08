const text = () => {
    let text = document.querySelector('.textarea').value;
    document.querySelector('.char').innerHTML = `${text.length} characters`;

    text = text.trim();
    let afterSplit = text.split(" ");
    let afterClean = afterSplit.filter((elem)=>{
        return elem != "";
    })
    document.querySelector('.word').innerHTML = `${afterClean.length} words`;
}

document.querySelector('.textarea').addEventListener('input', text);