# seed data
from app import app
from faker import Faker
from random import choice as rc
from datetime import datetime, time
from models import db, Team,Coach,Game

fake = Faker()

with app.app_context():
    # clear
    Team.query.delete()
    Coach.query.delete()
    Game.query.delete()
# seed data for teams
    teams = [
    {'name': "Mathare United", 'location': "Mathare"},
    {'name': "Shabana FC", 'location': "Muranga"},
    {'name': "Tusker United", 'location': "Thika"},
    {'name': "Gor Mahia United", 'location': "Kisumu"},
    {'name': "Sportpesa United", 'location': "Nairobi"},
    {'name': "Bandari FC", 'location': "Bamburi"},
    {'name': "Police FC", 'location': "Nyeri"},
    {'name': "Posta Rangers", 'location': "Mombasa"},
    {'name': "City Stars", 'location': "Garissa"},
    {'name': "Kakamega Homeboys", 'location': "Kakamega"}
    ]
    for team in teams:
            new_team = Team(**team)
            new_team.start_year = fake.date_time().date()
            db.session.add(new_team)
            db.session.commit()

# seed data for coaches
    coaches = [
        {'name': "James Mwangi"},
        {'name': "Grace Njeri"},
        {'name': "John Kimani"},
        {'name': "Wanjiku Kamau"},
        {'name': "Mercy Kiptoo"},
        {'name': "Peter Omondi"},
        {'name': "Faith Wambui"},
        {'name': "Kevin Mutua"},
        {'name': "Catherine Achieng"},
        {'name': "Samuel Ndegwa"}
        ]
    for coach in coaches:
            new_coach = Coach(**coach)
            db.session.add(new_coach)
            db.session.commit()

# seed data for games
    games = [
        {'name': "Kenyan Premier League Cup"},
        {'name': "Coastal Invitational Tournament"},
        {'name': "Rift Valley Championship"},
        {'name': "Great Lakes Challenge"},
        {'name': "Savannah Trophy"}  
    ]
    for game in games:
            new_game = Game(**game)
            new_game.team_id = rc(Team.query.all()).id
            new_game.coach_id = rc(Coach.query.all()).id
            fake_time = fake.time_object()  # Get only the time part
            new_game.game_time = datetime.combine(datetime.today(), fake_time)
            db.session.add(new_game)
            db.session.commit()

print( "🦸‍♀️ Done seeding!")
 
