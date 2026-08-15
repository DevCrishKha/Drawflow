import { nodes } from "./nodes.js";

const container = document.getElementById("drawflow");  // Take the workspace div id='drawflow'
const editor = new Drawflow(container); // Create an editor class using the div as parameter

editor.start(); // .start() method is used to start the event handeler of an object (if you defined any event in the object's class) 

// querySelector() selects a child inside the element with the class ''
// querySelectorAll() selects all the child with the class '' returns a NodeList, a list of nodes (HTML element)
// forEach() method is used to apply a function on all the nodes in a NodeList in a series not parallel
document.querySelectorAll(".component").forEach(component => {

// Drag from palette

component.addEventListener("dragstart", event => {
const type = component.dataset.name; // Getting the data-type of a div with class components from the key-value pair
console.log("DRAG START:", type); // To show logs in console

// The dataTransfer and serData are browser's drag-and-drop data mechanism.
// Think of dataTransfer as a temporary box that travels with the drag operation. You can put information into that box when dragging starts (anydata) and the data is set by setData
// dataset.type iseventually the data-type attribute of the div object component which we set up in out HTML-file
event.dataTransfer.setData("node-type", type);
});

});


// Drop into Drawflow
container.addEventListener("dragover", event => {
event.preventDefault(); // .preventDefault() is a method that stops the browser from executing its built-in default behavior when an event occurs
console.log("DRAGGING OVER"); // log to console

});

// drop-event to drop the object onto DOM
container.addEventListener("drop", event => {
event.preventDefault();

const type = event.dataTransfer.getData("node-type"); // Get the name of the node

console.log("DROP:", type); //log to console

if (!type) {
console.log("NO NODE TYPE");
return;
}

const node = nodes[type]; // if node type is found check if there is a node of that type (scalable)

if (!node) {
console.log("NODE DOES NOT EXIST:", type);
return;
}

const rect = container.getBoundingClientRect(); // getBoundingClientRect() is a built-in JavaScript method that returns the size of an element and its position relative to the browser viewport

const x = event.clientX - rect.left; // Get the x-coordinate from the 'drop'event
const y = event.clientY - rect.top; // Get the y-coordinate from the 'drop'event

const nodeId = editor.addNode(
type, //type/name of the node
node.inputs, // no of input ports
node.outputs,// no of output ports
x, // position on the workspace
y,
type.toLowerCase().replaceAll(" ", "_"), // changing the type to lowercase and exchanging spaces with underscore
{ type: type }, // This is the data inside the node
node.html
);

// Shape of a dragflow node in JS

// editor.addNode(
// "ESP32",
// 1,
// 2,
// 100,
// 100,
// "esp32",
// { device: "ESP32" },
// "<div>ESP32</div>"
// );

});

function save_drawflow_editor(){
// send the json to flask
const graph = editor.export();

fetch("/save_drawflow_editor", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(graph)
});
console.log("save_drawflow_editor: Executed")
}
window.save_drawflow_editor = save_drawflow_editor;


/*====================================
      FUNCTION FOR EACH DRAWFLOW NODE
      MOVE TO NODE.JS LATER ON
======================================
*/

window.addInputPort = addInputPort;
window.removeInputPort = removeInputPort;
window.addOutputPort = addOutputPort;
window.removeOutputPort = removeOutputPort;
window.show_node_window = show_node_window;
// Every Drawflow node sits inside a div with id="node-<ID>"
// This helper walks up from the clicked button to find that ID
function getNodeId(button) {
  const nodeEl = button.closest(".drawflow-node");
  return nodeEl.id.replace("node-", "");
}

function addInputPort(button) {
  const id = getNodeId(button);
  editor.addNodeInput(id);
}

function removeInputPort(button) {
  
  const id = getNodeId(button);
  const node = editor.getNodeFromId(id);
  const count = Object.keys(node.inputs).length;
  if (count > 0) {
    editor.removeNodeInput(id, `input_${count}`); // must remove the LAST one
  }
}

function addOutputPort(button) {
  const id = getNodeId(button);
  editor.addNodeOutput(id);
}

function removeOutputPort(button) {
  const id = getNodeId(button);
  const node = editor.getNodeFromId(id);
  const count = Object.keys(node.outputs).length;
  if (count > 0) {
    editor.removeNodeOutput(id, `output_${count}`);
  }
}

function show_node_window(button){
  const id = getNodeId(button);
  document.getElementById("nodeId_on_nodeWindowTitle").innerHTML = id;
  document.getElementById("node-window").style.display = "block";
  // Later take the whole node data and show it in the Details field
}
