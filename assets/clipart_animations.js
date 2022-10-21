//Criando todas as variáveis com referência aos elementos do DOM

let worker = document.querySelector('#worker');

function changeWorkerImg(){
    worker.setAttribute('src', 'images/worker2.png')
}

function ogWorkerImg(){
    worker.setAttribute('src', 'images/worker1.png')
}

worker.addEventListener('mouseover', changeWorkerImg);
worker.addEventListener('mouseout', ogWorkerImg);