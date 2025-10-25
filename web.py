

import requests
from flask import Flask, render_template, jsonify
from flask_cors import CORS
from flask_apscheduler import APScheduler

app = Flask(__name__)
CORS(app)

scheduler = APScheduler()

def data_refrsh():
   sportsurl = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard'
   r = requests.get(sportsurl)
   data = r.json()
   return data



with app.app_context():
   def team_sync():
      teams = []              
      if teams == None: 
         return None
               
      else:      
         for event in data_refrsh()['events']:
            for competion in event['competitions']:
               for competitor in competion['competitors']:
                  team_name = competitor['team']['displayName']
                  teams.append(team_name)

         return teams
               
            
team_sync()
   

with app.app_context():  
   def date_sync():   
      dates = []
      if dates == None : 
         return None
         
      else:
         for event in data_refrsh()['events']:
            date = event['status']['type']['detail']
            dates.append(date)
         return dates
         
      
date_sync()

with app.app_context():
   def logo_sync():
      logos = []
      if logos == None:      
         return None 
         
      else:
         for event in data_refrsh()['events']:
            for competion in event['competitions']:
               for competitor in competion['competitors']:
                  logo_1 = competitor['team']['logo']
                  logos.append(logo_1)
               
         return logos
      
logo_sync()  
      
with app.app_context():
   def score_sync():
      scores = []
      if (scores == None and scores > 0):      
         return None 
         
      else:
         for event in data_refrsh()['events']:
            for competion in event['competitions']:
               for competitor in competion['competitors']:
                  score_1 = competitor['score']
                  scores.append(score_1)
               
         return scores
         
score_sync()
    


@app.route("/") # makes the api 

def basketapi():
   with app.app_context():
      return jsonify({"teams" : team_sync(), "logos" : logo_sync(), "dates" : date_sync(), "scores": score_sync()})



if __name__ == '__main__':
   scheduler.add_job(func= data_refrsh, trigger='interval',seconds=60, max_instances=2, id = 'datarefrsh' )

   scheduler.add_job(func= date_sync, trigger='interval',seconds=65, id = 'datesync')
 
   scheduler.add_job(func= logo_sync, trigger='interval',seconds=65, id = 'logosync') 

   scheduler.add_job(func= team_sync, trigger='interval',seconds=65, id = 'teamsync')

   scheduler.add_job(func= score_sync, trigger='interval',seconds=65, id = 'scoresync')
   
   scheduler.add_job(func= basketapi, trigger='interval',seconds=70, id = 'refresh2')

     
   scheduler.start()
   app.run(debug=False)

#IGNORE
#@app.route("/basketball.html")
#def basketball():
   #return render_template("basketball.html", teams=teams, dates=dates, logos=logos) 

#@app.route("/index.html")
#def home():
   #return render_template("index.html") 

#@app.route("/football.html")
#def football():
   #return render_template("football.html") 

#@app.route("/nfl.html")
#def nfl():
   #return render_template("nfl.html") 

#@app.route("/trackfield.html")
#def trackfield():
   #return render_template("trackfield.html") 

#@app.route("/tennis.html")
#def tennis():
   #return render_template("tennis.html") 


#for event in data_refrsh()['events']:
            #for competion in event['competitions']:
               #for competitor in competion['competitors']:
                  #team_name = competitor['team']['displayName']
                  #teams.append(team_name) 
      #return teams     