const array = [
  { id: "hsadas1", name: "филе" },
  { id: "11sa", name: "котлета" },
  { id: "hdsfu1", name: "фарш" },
  { id: "nnba981", name: "булка" },
  { id: "bghsf9", name: "соус" },
];

console.log({ array });

let draggedIndex = array.findIndex((elem) => elem.id === "hsadas1"); // филе
const [draggedElement] = array.splice(draggedIndex, 1);

const targetIndex = array.findIndex((elem) => elem.id === "hdsfu1"); // фарш

console.log({
  draggedElement,
  array,
  targetIndex,
  targetElement: array[targetIndex],
});

draggedIndex = 1; // навели на фарш, значит филе упадет между фаршем и булкой

const position = "up"
if (position === "up") {
  draggedIndex = draggedIndex + 1
} else {
  draggedIndex = draggedIndex - 1
}

const head = array.slice(0, draggedIndex);
const tail = array.slice(draggedIndex, array.length);

console.log({ head, tail });

const result = [...head, draggedElement, ...tail];

console.log({ result });
