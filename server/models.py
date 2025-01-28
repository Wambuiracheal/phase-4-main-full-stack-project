from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime

db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

    # relationships
    exhibitions = db.relationship('Exhibition', back_populates='users', lazy=True)

class Category(db.Model, SerializerMixin):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    
    # relationships
    artworks = db.relationship('Artwork', back_populates='categories', lazy=True)

class Artwork(db.Model, SerializerMixin):
    __tablename__ = 'artworks'
    id = db.Column(db.Integer, primary_key=True)
    artist = db.Column(db.String(120), nullable=False)
    title = db.Column(db.String(120), nullable=False)
    image = db.Column(db.String(120), nullable=False)
    price = db.Column(db.Float, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey(Category.id))

    # relationships
    exhibitions = db.relationship('Exhibition', backref='artwork', lazy=True)

class Exhibition(db.Model, SerializerMixin):
    __tablename__ = 'exhibitions'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id))
    artwork_id = db.Column(db.Integer, db.ForeignKey(Artwork.id))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)


    