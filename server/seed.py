from app import app
from models import db, Category, Artwork

categories = [
    {"name": "Painting"},
    {"name": "Sculpture"},
    {"name": "Photography"},
]

# artworks = [
#     {"artist": "Vincent van Gogh", "title": "Starry Night", "image": "starry_night.jpg", "price": 1500, "category_name": "Painting"},
#     {"artist": "Leonardo da Vinci", "title": "Mona Lisa", "image": "mona_lisa.jpg", "price": 2000, "category_name": "Painting"},
#     {"artist": "Michelangelo", "title": "David", "image": "david.jpg", "price": 3000, "category_name": "Sculpture"},
#     {"artist": "Ansel Adams", "title": "Moonrise", "image": "moonrise.jpg", "price": 1200, "category_name": "Photography"},
# ]

# def seed_data():
#     with app.app_context():
    
#         db.session.query(Artwork).delete()
#         db.session.query(Category).delete()
#         db.session.commit()

#         category_objects = {}
#         for category_data in categories:
#             category = Category(name=category_data["name"])
#             db.session.add(category)
#             category_objects[category_data["name"]] = category

#         db.session.commit()

#         for artwork_data in artworks:
#             category = category_objects[artwork_data["category_name"]]
#             artwork = Artwork(
#                 artist=artwork_data["artist"],
#                 title=artwork_data["title"],
#                 image=artwork_data["image"],
#                 price=artwork_data["price"],
#                 category_id=category.id
#             )
#             db.session.add(artwork)

#         db.session.commit()
#         print("Database seeded successfully!")

# if __name__ == "__main__":
#     seed_data()
