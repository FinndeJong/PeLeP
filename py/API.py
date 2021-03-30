from flask import Flask,request,jsonify,redirect,render_template,request,jsonify
from neo4j import GraphDatabase
import csv

#establish the connection
with open(r'C:\Users\Kuipe\OneDrive\Documenten\000Hogeschool\000Hogeschool\studiejaar1\PELEP\PELEP\PeLeP\PeLeP\txt\neo4j.text') as f1:
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
    # Hier wordt gekeken of er een competentie in het checkpoint staat
    if (comp1 == ""):
        q1 = """
        CREATE (p:Pulse {titel:$titel,tekst:$tekst,emoji:$emoji})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(1)
    # Hier wordt gekeken of competentie 1 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
    if ((comp1 != "") and (comp2 == "")):
        q1 = """
        CREATE (p:Pulse {titel:$titel,tekst:$tekst,emoji:$emoji,comp1:$comp1})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
    # Hier wordt gekeken of competentie 2 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
    if ((comp2 != "") and (comp3 == "")):
        q1 = """
        CREATE (p:Pulse {titel:$titel,tekst:$tekst,emoji:$emoji,comp1:$comp1,comp2:$comp2})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(3)
    # Hier wordt gekeken of competentie 3 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
    if ((comp3 != "") and (comp4 == "")):
        q1 = """
        CREATE (p:Pulse {titel:$titel,tekst:$tekst,emoji:$emoji,comp1:$comp1,comp2:$comp2,comp3:$comp3})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(4)
    # Hier wordt gekeken of competentie 4 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
    if ((comp4 != "") and (comp5 == "")):
        q1 = """
        CREATE (p:Pulse {titel:$titel,tekst:$tekst,emoji:$emoji,comp1:$comp1,comp2:$comp2,comp3:$comp3,comp4:$comp4})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
    # Hier wordt gekeken of competentie 5 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
    if ((comp5 != "") and (comp6 == "")):
        q1 = """
        CREATE (p:Pulse {titel:$titel,tekst:$tekst,emoji:$emoji,comp1:$comp1,comp2:$comp2,comp3:$comp3,comp4:$comp4,comp5:$comp5})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(6)
    # Hier wordt gekeken of competentie 6 in het checkpoint staat als dit zo is wordt dit aan de pulse toe gevoegd
    if (comp6 != ""):
        q1 = """
        CREATE (p:Pulse {titel:$titel,tekst:$tekst,emoji:$emoji,comp1:$comp1,comp2:$comp2,comp3:$comp3,comp4:$comp4,comp5:$comp5,comp6:$comp6})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(7)
        
@api.route("/pulse",methods=["GET"])
def display_node():
    q1="""
    MATCH (p:Pulse) RETURN p
    """
    results=session.run(q1)
    data=results.data()
    print(data)
    return(jsonify(data))

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
    print(req_data)
    titel = req_data['titel']
    tekst = req_data['tekst']
    emoji = req_data['emoji']
    comp1 = req_data['comp1']
    comp2 = req_data['comp2']
    comp3 = req_data['comp3']
    comp4 = req_data['comp4']
    comp5 = req_data['comp5']
    comp6 = req_data['comp6']
    # hierboven worden alle onderdelen gedefiniëerd
    # hier onder wordt er gezocht of er 1 tot en met 6 competenties zijn en aan de hand daarvan springt hij in een if statement met de daarbij horende aantal competenties.
    # waar hij vervolgens de bewerkte informatie aanpast in de DB0
    # waar nu id 15 is gedefinieerd moet automatisch het ID van de Pulse die bewerkt moet worden.
    if (comp1 == ""):
        q1 = """
        MATCH(p:Pulse)
        WHERE id(p)="15"
        SET p.titel:$titel,p.tekst:$tekst,p.emoji:$emoji
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
            "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(1)

    elif ((comp1 != "") and (comp2 == "")):
        q1 = """
        MATCH(p:Pulse)
        WHERE id(p)="15"
        SET p.titel:$titel,p.tekst:$tekst,p.emoji:$emoji,p.comp1:$comp1
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
            "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(2)
    elif ((comp2 != "") and (comp3 == "")):
        q1 = """
        MATCH(p:Pulse)
        WHERE id(p)="15"
        SET p.titel:$titel,p.tekst:$tekst,p.emoji:$emoji,p.comp1:$comp1,p.comp2:$comp2
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
            "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(3)
    elif ((comp3 != "") and (comp4 == "")):
        q1 = """
        MATCH(p:Pulse)
        WHERE id(p)="15"
        SET p.titel:$titel,p.tekst:$tekst,p.emoji:$emoji,p.comp1:$comp1,p.comp2:$comp2,p.comp3:$comp3
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
            "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(4)
    elif ((comp4 != "") and (comp5 == "")):
        q1 = """
        MATCH(p:Pulse)
        WHERE id(p)="15"
        SET p.titel:$titel,p.tekst:$tekst,p.emoji:$emoji,p.comp1:$comp1,p.comp2:$comp2,p.comp3:$comp3,p.comp4:$comp4
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
            "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(5)
    elif ((comp5 != "") and (comp6 == "")):
        q1 = """
        MATCH(p:Pulse)
        WHERE id(p)="15"
        SET p.titel:$titel,p.tekst:$tekst,p.emoji:$emoji,p.comp1:$comp1,p.comp2:$comp2,p.comp3:$comp3,p.comp4:$comp4,p.comp5:$comp5
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
            "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(6)
    elif (comp6 != ""):
        q1 = """
        MATCH(p:Pulse)
        WHERE id(p)="15"
        SET p.titel:$titel,p.tekst:$tekst,p.emoji:$emoji,p.comp1:$comp1,p.comp2:$comp2,p.comp3:$comp3,p.comp4:$comp4,p.comp5:$comp5,p.comp6:$comp6
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
            "comp5": comp5, "comp6": comp6}
        print(map)
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
    api.run(port=5050)

# dit stuk uit eindelijk niet nodig gehad maar laten staan vanwege learning (Pjotr)
    # q2="""
    # MATCH (p.Pulse)
    # SET (p.Titel)
    # RETURN p:Pulse
    # """
    # results=sessopm.rum(q2)
    # data=results.date()
    # print(data)
    # return(jsonify(data))
