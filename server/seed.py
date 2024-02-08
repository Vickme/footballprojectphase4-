# seed data
from app import app
from faker import Faker
from random import choice as rc
from datetime import datetime, time
from models import db, Team,Game,UpcomingGames

fake = Faker()

with app.app_context():
    # clear
    Team.query.delete()
    Game.query.delete()
    # UpcomingGames.query.delete()
# seed data for teams
    teams = [
    {'name': "Mathare United", 'location': "Mathare", 'coach': "James Mwangi"},
    {'name': "Shabana FC", 'location': "Muranga", 'coach':"Grace Njeri"},
    {'name': "Tusker United", 'location': "Thika", 'coach':"John Kimani" },
    {'name': "Gor Mahia United", 'location': "Kisumu",'coach':"Wanjiku Kamau" },
    {'name': "Sportpesa United", 'location': "Nairobi", 'coach': "Mercy Kiptoo"},
    {'name': "Bandari FC", 'location': "Bamburi", 'coach':"Peter Omondi"},
    {'name': "Police FC", 'location': "Nyeri",'coach':"Faith Wambui"},
    {'name': "Posta Rangers", 'location': "Mombasa",'coach':"Kevin Mutua"},
    {'name': "City Stars", 'location': "Garissa",'coach':"Catherine Achieng"},
    {'name': "Kakamega Homeboys", 'location': "Kakamega",'coach': "Samuel Ndegwa"}
    ]
    for team in teams:
            new_team = Team(**team)
            new_team.start_year = fake.date_time().date()
            db.session.add(new_team)
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
            upcoming_games = UpcomingGames.query.all()
            if upcoming_games:
                # Randomly select an upcoming game
                random_upcoming_game = rc(upcoming_games)
                new_game.upcoming_games_id = random_upcoming_game.id
            else:
                print("No upcoming games available.")
            fake_time = fake.time_object()  # Get only the time part
            new_game.game_time = datetime.combine(datetime.today(), fake_time)
            db.session.add(new_game)
            db.session.commit()

print( "🦸‍♀️ Done seeding!")
 
