/*
        Imported inside editor.js only
*/

export function send_to_flask(){
// send the json to flask
const graph = editor.export();

fetch("/save_graph", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(graph)
});
}
window.send_to_flask = send_to_flask;
