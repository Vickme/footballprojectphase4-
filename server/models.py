# models

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

db = SQLAlchemy()

class Team(db.Model,SerializerMixin):
    __tablename__ = 'teams'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    location = db.Column(db.String)
    start_year = db.Column(db.Date)
    created_at = db.Column(db.DateTime,server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    # relationship to game
    games = db.relationship('Game', backref='team')

    def serialize(self):
         return{'id': self.id,'name': self.name, 'location': self.location,  'start_year': self.start_year}
    
    


class Coach(db.Model,SerializerMixin):
    __tablename__ = 'coaches'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    # relationship to game
    games = db.relationship('Game', backref='coach')

    def serialize(self):
        return {'id': self.id, 'name': self.name}

class Game(db.Model, SerializerMixin):
    __tablename__ = 'games'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    team_id = db.Column(db.Integer, db.ForeignKey('teams.id'))
    coach_id = db.Column(db.Integer, db.ForeignKey('coaches.id'))
    game_time = db.Column(db.DateTime)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    def serialize(self):
        return {'id': self.id, 'name':self.name, 'team_id': self.team_id, 'coach_id': self.coach_id, 'game_time': self.game_time.strftime('%Y-%m-%d, %I:%M %p') if self.game_time else None,}

class UpcomingGames(db.Model, SerializerMixin):
    __tablename__ = 'upcoming_games'
    id = db.Column(db.Integer, primary_key=True)
    league_name = db.Column(db.String)
    home_team = db.Column(db.String)
    away_team = db.Column(db.String)
    game_time = db.Column(db.DateTime)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    def serialize(self):
        return {'id': self.id, 'home_team': self.home_team, 'away_team': self.away_team, 'game_time': self.game_time.strftime('%Y-%m-%d, %I:%M %p') if self.game_time else None,}

    