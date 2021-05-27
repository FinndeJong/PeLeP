from flask import Flask,request,jsonify,redirect,render_template,request,jsonify
from flask_email_verifier import EmailVerifier
from neo4j import GraphDatabase
import csv
from loguru import logger
from datetime import date, datetime

#establish the connection
with open(r'C:\Users\Kuipe\OneDrive\Documenten\000Hogeschool\000Hogeschool\studiejaar1\PELEP\PELEP\PeLeP\PeLeP\txt\neo4j.txt') as f1:
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

@api.route("/create", methods=["POST"])
def create_node():
    
    # dateTimeObj = "datetime()"
    # print(dateTimeObj)
    # hier wordt de data uit de fe opgehaald
    req_data = request.get_json()
    titel = req_data['titel']
    tekst = req_data['tekst']
    emoji = req_data['emoji']
    maker = req_data['persoon']
    comp1 = req_data['comp1']
    comp2 = req_data['comp2']
    comp3 = req_data['comp3']
    comp4 = req_data['comp4']
    comp5 = req_data['comp5']
    comp6 = req_data['comp6']
    tijd = req_data['datum-tijd']
    persoon = req_data['persoon']
    # Hier wordt gekeken of er een competentie in het checkpoint staat
    if (comp1 == ""):
        q1 = """
        CREATE (p:Pulse {titel:$titel,tekst:$tekst,emoji:$emoji,maker:$persoon, datum:$tijd})
        """
        map = {"titel": titel, "tekst": tekst,"emoji": emoji, "maker":persoon, "datum":tijd}
        try:
            session.run(q1, map, tijd = tijd)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(1)
    # Hier wordt gekeken of competentie 1 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
    if ((comp1 != "") and (comp2 == "")):
        q1 = """
        CREATE (p:Pulse {titel:$titel,tekst:$tekst,emoji:$emoji,maker:$persoon,comp1:$comp1, datum:$tijd})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji,"maker":persoon, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6, "datum":tijd}
        try:
            session.run(q1, map, tijd = tijd)
            return 'succesfull'
        except Exception as e:
            return (str(e))
    # Hier wordt gekeken of competentie 2 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
    if ((comp2 != "") and (comp3 == "")):
        q1 = """
        CREATE (p:Pulse {titel:$titel,tekst:$tekst,emoji:$emoji,maker:$persoon,comp1:$comp1,comp2:$comp2, datum:$tijd})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji,"maker":persoon, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6, "datum":tijd}
        try:
            session.run(q1, map, tijd = tijd)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(3)
    # Hier wordt gekeken of competentie 3 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
    if ((comp3 != "") and (comp4 == "")):
        q1 = """
        CREATE (p:Pulse {titel:$titel,tekst:$tekst,emoji:$emoji,maker:$persoon,comp1:$comp1,comp2:$comp2,comp3:$comp3, datum:$tijd})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji,"maker":persoon, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6, "datum":tijd}
        try:
            session.run(q1, map, tijd = tijd)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(4)
    # Hier wordt gekeken of competentie 4 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
    if ((comp4 != "") and (comp5 == "")):
        q1 = """
        CREATE (p:Pulse {titel:$titel,tekst:$tekst,emoji:$emoji,maker:$persoon,comp1:$comp1,comp2:$comp2,comp3:$comp3,comp4:$comp4, datum:$tijd})
        """
        map= {"titel": titel, "tekst": tekst, "emoji": emoji,"maker":persoon, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6, "datum":tijd}
        try:
            session.run(q1, map, tijd = tijd)
            return 'succesfull'
        except Exception as e:
            return (str(e))
    # Hier wordt gekeken of competentie 5 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
    if ((comp5 != "") and (comp6 == "")):
        q1 = """
        CREATE (p:Pulse {titel:$titel,tekst:$tekst,emoji:$emoji,maker:$persoon,comp1:$comp1,comp2:$comp2,comp3:$comp3,comp4:$comp4,comp5:$comp5, datum:$tijd})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6, "datum":tijd}
        try:
            session.run(q1, map, tijd = tijd)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(6)
    # Hier wordt gekeken of competentie 6 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
    if (comp6 != ""):
        q1 = """
        CREATE (p:Pulse {titel:$titel,tekst:$tekst,emoji:$emoji,maker:$persoon,comp1:$comp1,comp2:$comp2,comp3:$comp3,comp4:$comp4,comp5:$comp5,comp6:$comp6, datum:$tijd})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6, "datum":tijd}
        try:
            session.run(q1, map, tijd = tijd)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(7)
    
    relship=""" 
    MATCH (p:Persoon {naam:$naam, mailadres:$mailadres, wachtwoord:$wachtwoord, datum:$tijd}), (p:Pulse {titel:$titel,tekst:$tekst,emoji:$emoji,comp1:$comp1,comp2:$comp2,comp3:$comp3,comp4:$comp4,comp5:$comp5,comp6:$comp6, datum:$tijd})
    SET (p:Pulse{maker:$persoon}) -[r:gemaakt_door]->(:Persoon)
    """ 
    try:
        session.run(relship)
        return 'gelukt a niffo'
    except Exception as e:
        return (str(e))


@api.route("/api/personen", methods=["POST"])
def persoon_post():
    req_data = request.get_json()
    # persoon = req_data["persoon"]
    # link = req_data['link']
    # tijd = req_data['datum']
    naam=req_data['naam']
    mailadres=req_data['mailadres']
    wachtwoord=req_data['wachtwoord']
    mens="""
    CREATE (p:Persoon {naam:$naam, mailadres:$mailadres, wachtwoord:$wachtwoord})
    """
    map={"naam": naam,"mailadres":mailadres,"wachtwoord":wachtwoord}
    
    try:
        session.run(mens, map)
        return 'succesfull'
    except Exception as e:
        return (str(e))

@api.route("/api/relpulsepersoon", methods=["POST"])
def relpulsepersoon():
    req_data = request.get_json()
    persoon = req_data["persoon"]
    pulse = req_data["pulse"]
    tijd = req_data['datum']

    rel="""
    MATCH (p:Persoon {naam:$naam, mailadres:$mailadres, wachtwoord:$wachtwoord, datum:$tijd}), (p:Pulse {titel:$titel,tekst:$tekst,emoji:$emoji,comp1:$comp1,comp2:$comp2,comp3:$comp3,comp4:$comp4,comp5:$comp5,comp6:$comp6, datum:$tijd})
    SET (p:Pulse{maker:$persoon}) -[r:gemaakt_door]->(:Persoon) 
    """
    map={"datum":tijd}
    
    try:
        session.run(rel,map)
        return 'succesfull'
    except Exception as e:
        return (str(e))

#Make POST request for reageren 
# moet nog aan gewerkt worden
@api.route("/api/react", methods=["POST"])
def reageer_post():
    req_data = request.get_json()
    reactie = req_data['reactie']
    link = req_data['link']
    commenter = req_data['commenter']
    # if current_user.is_authenticated:
    #     print("Persoon is ingelogd")
             
    # else:
    #     print("Persoon is niet ingelogd")
        
    
    q1="""
    MATCH (p:pulse{link:$link})
    CREATE (c:Comment {reactie:$reactie, commenter:$commenter, datum:$tijd})-[r:gereageerd]->(p)
    """
    map={"reactie":reactie, "link":link}
    try:
        session.run(q1,map)
        return 'succesfull'
    except Exception as e:
        return (str(e))


# # Login API
# @api.route("/api/login", methods=["GET"])
# def login_get():
#     req_data = request.get_json()   
#     login = req_data["persoon"]
#     q1="""
#     MATCH (p:Persoon{persoon:$persoon})
#     RETURN p
#     """
#     map={"persoon":persoon}
#     try:
#         session.run(q1,map)
#         return 'succesfull'
#     except Exception as e:
#         return (str(e))


# # registeren personen API
# @api.route("/api/registreren", methods=["POST"])
# def registreren_post():
#     q1="""
#     MATCH(p:Persoon{persoon:$persoon})
#     CREATE (p:Persoon{voornaam:$voornaam, email:$email, wachtwoord:$wachtwoord, rol:$rol,gemaakt_op:str(datetime}})
#     """

# api voor het ophalen van de Data uit de DB voor het bewerken van een Checkpoint (in dit document veel get api's dus we moeten nog kijken welke er weg kunnen)
# waar nu id 15 is gedefinieerd moet automatisch het ID van de Pulse die bewerkt moet worden.
@api.route("/ophalen",methods=["GET"])
def ophalen_node():
    q1="""
    MATCH (p:Pulse {id:15}) 
    RETURN p
    """
    results=session.run(q1)
    data=results.data()
    print(data)
    return(jsonify(data))

# API voor het bewerken van een Checkpoint -->
@api.route("/bewerken",methods=["PUT"])
def bewerken_node():
    req_data = request.get_json()
    logger.error(req_data)
    titel = req_data['titel']
    tekst = req_data['tekst']
    emoji = req_data['emoji']
    comp1 = req_data['comp1']
    comp2 = req_data['comp2']
    comp3 = req_data['comp3']
    comp4 = req_data['comp4']
    comp5 = req_data['comp5']
    comp6 = req_data['comp6']
    tijd = req_data['datum']
    pulse_token =req_data['pulse_token']

    # today = datetime.today()
    # date_format = "%Y-%m-%d %H:%M:%S"
    # datumtijd = datetime.strftime(today, date_format)

    # hierboven worden alle onderdelen gedefiniëerd
    # hier onder wordt er gezocht of er 1 tot en met 6 competenties zijn en aan de hand daarvan springt hij in een if statement met de daarbij horende aantal competenties.
    # waar hij vervolgens de bewerkte informatie aanpast in de DB0
    # waar nu id 15 is gedefinieerd moet automatisch het ID van de Pulse die bewerkt moet worden.
    if (comp1 == ""):
        q1 = """
        MATCH(p:Pulse)
        WHERE pulse_token(p)="$pulse_token"
        SET p.titel:$titel,p.tekst:$tekst,p.emoji:$emoji,p.bewerkdatum:$tijd
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
            "comp5": comp5, "comp6": comp6, "datum":tijd}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(1)

    elif ((comp1 != "") and (comp2 == "")):
        q1 = """
        MATCH(p:Pulse)
        WHERE pulse_token(p)="$pulse_token"
        SET p.titel:$titel,p.tekst:$tekst,p.emoji:$emoji,p.comp1:$comp1,p.bewerkdatum:$tijd
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
            "comp5": comp5, "comp6": comp6, "datum":tijd}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(2)
    elif ((comp2 != "") and (comp3 == "")):
        q1 = """
        MATCH(p:Pulse)
        WHERE pulse_token(p)="$pulse_token"
        SET p.titel:$titel,p.tekst:$tekst,p.emoji:$emoji,p.comp1:$comp1,p.comp2:$comp2,p.bewerkdatum:$tijd
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
            "comp5": comp5, "comp6": comp6, "datum":tijd}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(3)
    elif ((comp3 != "") and (comp4 == "")):
        q1 = """
        MATCH(p:Pulse)
        WHERE pulse_token(p)="$pulse_token"
        SET p.titel:$titel,p.tekst:$tekst,p.emoji:$emoji,p.comp1:$comp1,p.comp2:$comp2,p.comp3:$comp3,p.bewerkdatum:$tijd
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
            "comp5": comp5, "comp6": comp6,"datum":tijd}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(4)
    elif ((comp4 != "") and (comp5 == "")):
        q1 = """
        MATCH(p:Pulse)
        WHERE pulse_token(p)="$pulse_token"
        SET p.titel:$titel,p.tekst:$tekst,p.emoji:$emoji,p.comp1:$comp1,p.comp2:$comp2,p.comp3:$comp3,p.comp4:$comp4,p.bewerkdatum:$tijd
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
            "comp5": comp5, "comp6": comp6, "datum":tijd}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(5)
    elif ((comp5 != "") and (comp6 == "")):
        q1 = """
        MATCH(p:Pulse)
        WHERE pulse_token(p)="$pulse_token"
        SET p.titel:$titel,p.tekst:$tekst,p.emoji:$emoji,p.comp1:$comp1,p.comp2:$comp2,p.comp3:$comp3,p.comp4:$comp4,p.comp5:$comp5,p.bewerkdatum:$tijd
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
            "comp5": comp5, "comp6": comp6, "datum":tijd}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(6)
    elif (comp6 != ""):
        q1 = """
        MATCH(p:Pulse)
        WHERE pulse_token(p)="$pulse_token"
        SET p.titel:$titel,p.tekst:$tekst,p.emoji:$emoji,p.comp1:$comp1,p.comp2:$comp2,p.comp3:$comp3,p.comp4:$comp4,p.comp5:$comp5,p.comp6:$comp6,p.bewerkdatum:$tijd
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
            "comp5": comp5, "comp6": comp6, "datum":tijd}
        try:
            print(session.run(q1, map))
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(7)
    else:
        print("kaas")

if __name__=="__main__":
    api.run(debug=True)
    