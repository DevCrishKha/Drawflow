
export const nodes = {
"ESP32": {
inputs: 2,
outputs: 2,
html: `<div>
    <b>ESP32</b>
    <div class="port-controls">
        <button class="port-btn add" onclick="addInputPort(this)">+In</button>
        <button class="port-btn add" onclick="addOutputPort(this)">+Out</button>
        </div>
        </br>
        <div class="port-controls">
        <button class="port-btn remove" onclick="removeInputPort(this)">-In</button>
        <button class="port-btn remove" onclick="removeOutputPort(this)">-Out</button>
      </div>
      </br>
      <button class="footer-button primary" id="open-node-window" onclick="show_node_window(this)" > Node Window </button>
</div>
`
},

"Flask": {
inputs: 1,
outputs: 1,
html: `<div>
    <b>Flask</b>
    <div class="port-controls">
        <button class="port-btn add" onclick="addInputPort(this)">+In</button>
        <button class="port-btn add" onclick="addOutputPort(this)">+Out</button>
        </div>
        </br>
        <div class="port-controls">
        <button class="port-btn remove" onclick="removeInputPort(this)">-In</button>
        <button class="port-btn remove" onclick="removeOutputPort(this)">-Out</button>
      </div>
      </br>
      <div class="node-actions">
        <button class="node-action-btn details" onclick="openDetails(this)">Details</button>
        <button class="node-action-btn prompt" onclick="openPrompt(this)">Prompt</button>
    </div>
    </br>
    <button onclick="fetch_table(this, 'variable')">ShowTable</button>
</div>
`
},

"Potentiometer": {
inputs: 0,
outputs: 1,
html: "<div><b>Potentiometer</b></div>"
},

"ADC Read": {
inputs: 1,
outputs: 1,
html: "<div><b>ADC Read</b></div>"
},

"Mapper": {
inputs: 1,
outputs: 1,
html: "<div><b>Mapper</b></div>"
},

"Servo": {
inputs: 1,
outputs: 0,
html: "<div><b>Servo</b></div>"
},
"LED": {
inputs: 1,
outputs: 0,
html: "<div><b>LED</b></div>"
}
};