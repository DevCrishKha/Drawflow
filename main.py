from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def Home():
    return render_template("index.html", my_dict={})

@app.route('/js')
def HomeJS():
    return render_template("jointJS.html")

@app.post("/save_graph")
def save_graph():
    graph = request.get_json()

    # validate
    # convert to your IR
    # save to MongoDB
    print(graph)
    return {"status": "ok"}

@app.route('/give_table_data/<table>/<node>',methods=['GET','POST'])
def give_table(table, node):
    the_dict = {"potValue":["input", "potentiometer"]}
    return render_template("partials/table.html", my_dict=the_dict)

app.run(debug=True)
