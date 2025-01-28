from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db
from flask_restful import Api

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///art.db'
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = False
CORS(app)

db.init_app(app)
migrate = Migrate(app,db)
api = Api(app)

if __name__ == '__main__':
    app.run(debug = True)

