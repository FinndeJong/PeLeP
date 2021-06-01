from flask import Flask,request,jsonify,redirect,render_template,request,jsonify
from neo4j import GraphDatabase
import csv
from datetime import datetime

#establish the connection
with open(r'C:\Users\LIEKE\OneDrive\Documenten\GitHub\PeLeP\txt\neo4j.txt') as f1:
    data = csv.reader(f1,delimiter=",")
    for row in data:
        username = row[0]
        pwd = row[1]
        uri = row[2]
print(username, pwd, uri)
driver = GraphDatabase.driver(uri=uri,auth=(username,pwd))
session = driver.session()
api = Flask(__name__)

# aanmaken van een Pulse API
@api.route("/create", methods=["GET", "POST"])
def create_node():
    # hier wordt de data uit de fe opgehaald
    req_data = request.get_json()
    titel = req_data['titel']
    tekst = req_data['tekst']
    emoji = req_data['emoji']
    comp1 = req_data['comp1']
    comp2 = req_data['comp2']
    comp3 = req_data['comp3']
    comp4 = req_data['comp4']
    comp5 = req_data['comp5']
    comp6 = req_data['comp6']
    tijd = req_data['datum-tijd']

    # Hier wordt de data naar de be gestuurd
    q1 = """
    CREATE (p:Pulse {titel:$titel,tekst:$tekst,emoji:$emoji,comp1:$comp1,comp2:$comp2,comp3:$comp3,comp4:$comp4,comp5:$comp5,comp6:$comp6, datum:$tijd})
    """
    map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
            "comp5": comp5, "comp6": comp6, "datum":tijd}
    try:
        session.run(q1, map, tijd = tijd)
        return 'succesfull'
    except Exception as e:
        return (str(e))

# API voor het ophealen van de pulses
@api.route("/pulse",methods=["GET"])
def display_node():
    q1="""
    MATCH (p:Pulse) RETURN p
    """
    results = session.run(q1)
    data = results.data()
    print(data)
    return(jsonify(data))

# API voor het ophealen van de pulses
@api.route("/gebruiker",methods=["GET"])
def gebruiker_ophalen():
    q1="""
    MATCH (g:Gebruiker) RETURN g
    """
    results = session.run(q1)
    data = results.data()
    print(data)
    return(jsonify(data))

#Make POST request for reageren
@api.route("/api/react", methods=["POST"])
def reageer_post():
    req_data = request.get_json()
    reactie = req_data['reactie']
    link = req_data['link']
    q1="""
    MATCH (p:Pulse{link:$link})
    CREATE (c:Comment {reactie:$reactie})-[r:gereageerd]->(p)
    """
    map = {"reactie":reactie, "link":link}
    try:
        session.run(q1,map)
        return 'succesfull'
    except Exception as e:
        return (str(e))
   
# API voor het bewerken van een Checkpoint -->
@api.route("/bewerken",methods=["PUT"])
def bewerken_node():
    # hier worden alle onderdelen gedefiniëerd
    req_data = request.get_json()
    titel = req_data['titel']
    tekst = req_data['tekst']
    emoji = req_data['emoji']
    comp1 = req_data['comp1']
    comp2 = req_data['comp2']
    comp3 = req_data['comp3']
    comp4 = req_data['comp4']
    comp5 = req_data['comp5']
    comp6 = req_data['comp6']
    tijd = req_data['bewerkdatum']
    pulse_token = req_data['pulse_token']
    # waar hij vervolgens de bewerkte informatie aanpast in de DB0
    q1 = """
    MATCH (p:Pulse {pulse_token:$pulse_token})
    SET p.titel=$titel,p.tekst=$tekst,p.emoji=$emoji,p.comp1=$comp1,p.comp2=$comp2,p.comp3=$comp3,p.comp4=$comp4,p.comp5=$comp5,p.comp6=$comp6,p.bewerkdatum=$tijd
    """
    map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
        "comp5": comp5, "comp6": comp6, "bewerkdatum":tijd, "pulse_token":pulse_token}
    try:
        session.run(q1, map, tijd = tijd)
        return 'succesfull'
    except Exception as e:
        return (str(e))


if __name__=="__main__":
    api.run(debug=True)