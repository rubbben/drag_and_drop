const base = document.querySelector('.base');
const box = document.querySelectorAll('.case');

base.addEventListener('dragstart', dragStart);
base.addEventListener('dragend', dragEnd);


function dragStart(){
    // console.log("start");
    this.className += ' tenu';

    setTimeout(() => (this.className = 'invisible'), 0);
}


function dragEnd(){
    // console.log("end");
    this.className = 'base';
}


for(const vide of box) {

    vide.addEventListener('dragover', dragOver);
    vide.addEventListener('dragenter', dragEnter);
    vide.addEventListener('dragleave', dragLeave);
    vide.addEventListener('drop', dragDrop);

}


function dragOver(e) {
    e.preventDefault();

    // console.log('over');
}

function dragEnter(){
    // console.log('enter');
    this.className += ' hovered';
}

function dragLeave(){
    // console.log('leave');
    this.className = 'case';
}

function dragDrop(){
    // console.log('dropped');
    this.className = 'case';
    this.append(base); //rajouter la classe base
}