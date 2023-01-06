//Responsável por mudar a foto do bonequinho uando passamos o mouse nele

let worker = document.querySelector('#worker');

function changeWorkerImg(){
    worker.setAttribute('src', 'images/worker2.png')
}

function ogWorkerImg(){
    worker.setAttribute('src', 'images/worker1.png')
}

worker.addEventListener('mouseover', changeWorkerImg);
worker.addEventListener('mouseout', ogWorkerImg);