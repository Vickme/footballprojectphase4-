# app
from flask import Flask,make_response,request
from flask_migrate import Migrate
# from flask_restful import Api
from models import db,Team

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']  = 'sqlite:///football.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app,db)
db.init_app(app)
# api = Api(app)
