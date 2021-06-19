from flask import Flask,request,jsonify,redirect,render_template,request,jsonify
from neo4j import GraphDatabase
import csv
from datetime import datetime
from passlib.hash import sha256_crypt
import json
from flask_mail import Mail, Message
from werkzeug.utils import html
import secrets

#establish the connection
with open(r'C:\Users\Gebruiker\Documents\HBO OPEN-ICT\Sprint-3\PeLeP\txt\neo4j.txt') as f1:
    data = csv.reader(f1,delimiter=",")
    for row in data:
        username = row[0]
        pwd = row[1]
        uri = row[2]
print(username, pwd, uri)
driver = GraphDatabase.driver(uri = uri,auth = (username,pwd))
session = driver.session()
api = Flask(__name__, template_folder='../templates')

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
    auteur = req_data['auteur']
    token = secrets.token_urlsafe()
    # Hier wordt de data naar de be gestuurd
    q1 = """
    CREATE (p:Pulse {titel:$titel,tekst:$tekst,emoji:$emoji,comp1:$comp1,comp2:$comp2,comp3:$comp3,comp4:$comp4,comp5:$comp5,comp6:$comp6, datum:$tijd, pulse_token:$token, auteur:$auteur})
    """
    map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
            "comp5": comp5, "comp6": comp6, "datum":tijd, "pulse_token":token, "auteur": auteur}
    try:
        session.run(q1, map, tijd = tijd, token = token)
        return "succesfull"
    except Exception as e:
        token = secrets.token_urlsafe()
        session.run(q1, map, tijd = tijd, token = token)
        return (str(e))

# API voor het ophealen van de pulses
@api.route("/pulse/<gebruikerstoken>",methods=["GET"])
def display_node(gebruikerstoken):
    q1="""
    MATCH (p:Pulse{auteur:$token})
    OPTIONAL MATCH (p)-[g:gereageerd]-(c:Comment)
    RETURN p{.*, comments: collect(c{.*, gereageerd: g{.*}})}
    """
    map = {"token": gebruikerstoken}
    results = session.run(q1, map)
    data = results.data()
    print(data)
    return(jsonify(data))

# API voor het ophealen van de pulses
@api.route("/gebruiker",methods=["GET"])
def gebruiker_ophalen():
    q1="""
    MATCH (g:Gebruiker)
    RETURN g
    """
    results = session.run(q1)
    data = results.data()
    print(data)
    return(jsonify(data))

# API voor het ophealen van de pulses
@api.route("/api/speciafiekegebruiker",methods=["POST"])
def speciafiekegebruiker_ophalen():
    req_data = request.get_json()
    gebruiker_token = req_data['gebruikerstoken']

    q1="""
    MATCH (g:Gebruiker{gebruiker_token:$gebruiker_tokens})
    RETURN g.gebruikersnaam
    """
    map = {"gebruiker_tokens": gebruiker_token}
    try:
        results = session.run(q1, map)
        print(results)
        data = results.data()
        print(data)
        
        return json.dumps(data)
    
    except Exception as e:
        return (str(e))


@api.route("/nieuwe_gebruiker", methods=["POST"])
def nieuwe_gebruiker():
    req_data = request.get_json()
    email = req_data["email"]
    gebruikersnaam = req_data["gebruikersnaam"]
    wachtwoord = req_data["wachtwoord"]
    print("mail")
    print(email)
    print("naam")
    print(gebruikersnaam)
    encrypt_wachtwoord = sha256_crypt.hash(wachtwoord)
    print("wachtwoord")
    print(encrypt_wachtwoord)
    status = "niet Geactiveerd"
    user_token = secrets.token_urlsafe()
        
    api.config['MAIL_SERVER']='smtp.gmail.com'
    api.config['MAIL_PORT'] = 465
    api.config['MAIL_USERNAME'] = 'personal.learning.pulse@gmail.com'
    api.config['MAIL_PASSWORD'] = 'up4BCcZJ'
    api.config['MAIL_USE_TLS'] = False
    api.config['MAIL_USE_SSL'] = True
    mail = Mail(api)

    msg = Message('Bevestiging registratie pelep', sender = 'personal.learning.pulse@gmail.com', recipients = [email])
    msg.html = render_template("email.html", content = gebruikersnaam, token = user_token)


    q1="""
    CREATE (g:Gebruiker {gebruikersnaam:$gebruikersnaam, email:$email, wachtwoord:$encrypt_wachtwoord, status:$status, gebruiker_token:$user_token})
    """
    map = {"gebruikersnaam":gebruikersnaam, "email":email, "wachtwoord":encrypt_wachtwoord, "status":status, "gebruiker_token":user_token}
    try:
        session.run(q1, map, encrypt_wachtwoord = encrypt_wachtwoord, user_token = user_token)
        mail.send(msg)
        print("Sent")
        return "succesfull"
    except:
        session.run(q1, map, encrypt_wachtwoord = encrypt_wachtwoord, user_token = user_token)
        user_token = secrets.token_urlsafe()
        mail.send(msg)
        print("Sent")
        return "new succesfull"

@api.route("/bevestigen", methods=["PUT"])
def bevestig_gebruiker():
    req_data = request.get_json()
    token = req_data['gebruiker_token']
    print(token)
    status = "geactiveerd"
    q1="""
    MATCH (g:Gebruiker{gebruiker_token:$token})
    SET g.status = $status
    """
    map = {"status": status, "gebruiker_token": token}
    try:
        session.run(q1,map, token = token)
        return "succesfull"
    except Exception as e:
        return (str(e))


#Make POST request for reageren
@api.route("/api/react", methods=["POST"])
def reageer_post():
    req_data = request.get_json()
    reactie = req_data['reactie']
    token = req_data['pulse_token']
    commenter = req_data['commenter']
    
    print(reactie)
    print(token)
    q2="""
    MATCH (p:Pulse{pulse_token:$token})
    CREATE (c:Comment {reactie:$reactie, commenter:$commenter})-[r:gereageerd]->(p)
    """
    map = {"reactie":reactie, "commenter":commenter, "token":token}
    try:
        session.run(q2, map)
        return "succesfull"
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
        return "succesfull"
    except Exception as e:
        return (str(e))


# API voor inlog validatie!!
# Functie om wachtwoord te valideren!!
def validatepassword(length, email, password, dbemail, dbpassword, active, token):
    print("activated")
    # Controlleer de email bestaat
    if length == 1:
        # Controlleer of het account is geactiveerd
        if active == 'geactiveerd':
            # Kijk of het email overeenkomt met email in DB
            if email == dbemail:
                # Verify of wachtwoord correct is
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
    # Neo4J Query
    q1 = """
    MATCH (g:Gebruiker{email:$email})
    RETURN g
    """
    map = {"email": email}
    try:
        results = session.run(q1, map)
        data = results.data()

        length = len(data)
        # Error handling, zodat als Email niet bestaat de API niet crashed
        if length != 1:
            print(email + " Bestaat niet!")
            return ({"error": "Email bestaat niet"})
        else:
            # Zet data in variabelen om naar validate functie te sturen
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
