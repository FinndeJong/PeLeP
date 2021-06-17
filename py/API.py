from flask import Flask,request,jsonify,redirect,render_template,request,jsonify
from neo4j import GraphDatabase
import csv
from datetime import datetime
from passlib.hash import sha256_crypt
import json

#establish the connection
with open(r'C:\Users\Gebruiker\Documents\HBO OPEN-ICT\Sprint-3\PeLeP\txt\neo4j.txt') as f1:
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
    MATCH (p:Pulse)
    OPTIONAL MATCH (p)-[g:gereageerd]-(c:Comment)
    RETURN p{.*, comments: collect(c{.*, gereageerd: g{.*}})}
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
    
    print(reactie)
    print(link)
    q2="""
    MATCH (p:Pulse{link:$link})
    CREATE (c:Comment {reactie:$reactie})-[r:gereageerd]->(p)
    """
    map = {"reactie":reactie, "link":link}
    try:
        session.run(q2, map)
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

# API voor inlog validatie (test)!!
# TEST
# TEST
# Functie om wachtwoord te valideren
def validatepassword(length, email, password, dbemail, dbpassword, active, token):
    print("activated")
    if length == 1:
        if active == 'geactiveerd':
            if email == dbemail:
                if sha256_crypt.verify(password, dbpassword) == True:
                    returnvalue = {"validation": "correct","token": token}
                    print("passed")
                    print(returnvalue)
                    return returnvalue
                else:
                    return {"error": "incorrect password"}
            else:
                return {"error": "invalid email"}
        else:
            return {"error": "account not activated"}
    else:
        return {"error": "Invalid email"}

@api.route("/api/login", methods=["POST"])
def validatelogin():
    req_data = request.get_json()
    email = req_data['email']
    print(email)
    wachtwoord = req_data['wachtwoord']
    print(wachtwoord)

    q1 = """
    MATCH (g:Gebruiker{email:$email})
    RETURN g
    """
    map = {"email": email}
    try:
        results = session.run(q1, map)
        data = results.data()

        length = len(data)
        if length != 1:
            print(email + " Bestaat niet!")
            return ({"error": "Email bestaat niet"})
        else:
            dbemail = data[0]['g']['email']
            dbpassword = data[0]['g']['wachtwoord']
            active = data[0]['g']['status']
            user_token = data[0]['g']['gebruiker_token']

            print(validatepassword(length, email, wachtwoord, dbemail, dbpassword, active, user_token))
            return validatepassword(length, email, wachtwoord, dbemail, dbpassword, active, user_token)

    except Exception as e:
        return (str(e))

if __name__=="__main__":
    api.run(debug=True)