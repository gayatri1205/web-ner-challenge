from flask import Flask,jsonify,json,request
from flask_cors import CORS
import spacy
from spacy import displacy

app = Flask(__name__)
ors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/")
def hello_world():
    return "Hello World!"

@app.route("/api",methods=['POST'])
def new_function():
    data=request.get_json()
    print(data['text'])
    NER = spacy.load("en_core_web_sm")
    text1= NER(data['text'])
    named_entities=[]
    for word in text1.ents:
        print(word.text,word.label_)
        named_entities.append({
            "name":word.text,
            "label":word.label_
        })
    data={'message':'hello'}
    return jsonify(named_entities)


if __name__ == '__main__':
    app.run(debug=True)

