# models

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

db = SQLAlchemy()

class Team(db.Model,SerializerMixin):
    __tablename__ = 'teams'
    id = db.Column(db.Integer, primary_key=True)
    team_name = db.Column(db.String)
    location = db.Column(db.String)
    start_year = db.Column(db.Date)
    coach = db.Column(db.String)
    created_at = db.Column(db.DateTime,server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    # relationship to game
    games = db.relationship('Game', backref='team')

    def serialize(self):
         return{'id': self.id,'team_name': self.team_name, 'location': self.location,'coach':self.coach,  'start_year': self.start_year}

class Game(db.Model, SerializerMixin):
    __tablename__ = 'games'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    team_id = db.Column(db.Integer, db.ForeignKey('teams.id'))
    upcoming_games_id = db.Column(db.Integer, db.ForeignKey('upcoming_games.id'))
    game_time = db.Column(db.DateTime)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    def serialize(self):
        return {'id': self.id, 'name':self.name, 'team_id': self.team_id,'game_time': self.game_time.strftime('%Y-%m-%d, %I:%M %p') if self.game_time else None,}

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
        return {'id': self.id,'league_name':self.league_name, 'home_team': self.home_team, 'away_team': self.away_team, 'game_time': self.game_time.strftime('%Y-%m-%d, %I:%M %p') if self.game_time else None,}

    