from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS, cross_origin 
from api.HelloApiHandler import HelloApiHandler

app = Flask(__name__, static_url_path='', static_folder='Frontend/build')
CORS(app)  
api = Api(app)

@cross_origin() 
@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

api.add_resource(HelloApiHandler, '/flask/hello')