function allowDrop(ev)
{
	ev.preventDefault();
}

function drag(ev)
{
	ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev)
{
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
}


/*
function handleDragStart(ev) {
  this.style.opacity = '0.4';  // this / e.target is the source node.
}

function handleDragOver(ev) {
  if (ev.preventDefault) {
    ev.preventDefault(); // Necessary. Allows us to drop.
  }

  ev.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(ev) {
  // this / ev.target is the current hover target.
  this.classList.add('over');
}

function handleDragLeave(ev) {
  this.classList.remove('over');  // this / ev.target is previous target element.
}

function handleDrop(ev) {
  // this / e.target is current target element.

  if (ev.stopPropagation) {
    ev.stopPropagation(); // stops the browser from redirecting.
  }

  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnd(ev) {
  // this/ev.target is the source node.

  [].forEach.call(cols, function (col) {
    col.classList.remove('over');
  });
}

var cols = document.querySelectorAll('.panel-body');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart, false);
  col.addEventListener('dragenter', handleDragEnter, false)
  col.addEventListener('dragover', handleDragOver, false);
  col.addEventListener('dragleave', handleDragLeave, false);
  col.addEventListener('drop', handleDrop, false);
  col.addEventListener('dragend', handleDragEnd, false);
});*/