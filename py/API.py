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

@api.route("/create", methods=["GET", "POST"])
def create_node():
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
    if (comp1 == ""):
        q1 = """
        create (n:checkpoint {titel:$titel,tekst:$tekst,emoji:$emoji})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(1)
    if ((comp1 != "") and (comp2 == "")):
        q1 = """
        create (n:checkpoint {titel:$titel,tekst:$tekst,emoji:$emoji,comp1:$comp1})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
    if ((comp2 != "") and (comp3 == "")):
        q1 = """
        create (n:checkpoint {titel:$titel,tekst:$tekst,emoji:$emoji,comp1:$comp1,comp2:$comp2})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(3)
    if ((comp3 != "") and (comp4 == "")):
        q1 = """
        create (n:checkpoint {titel:$titel,tekst:$tekst,emoji:$emoji,comp1:$comp1,comp2:$comp2,comp3:$comp3})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(4)
    if ((comp4 != "") and (comp5 == "")):
        q1 = """
        create (n:checkpoint {titel:$titel,tekst:$tekst,emoji:$emoji,comp1:$comp1,comp2:$comp2,comp3:$comp3,comp4:$comp4})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
    if ((comp5 != "") and (comp6 == "")):
        q1 = """
        create (n:checkpoint {titel:$titel,tekst:$tekst,emoji:$emoji,comp1:$comp1,comp2:$comp2,comp3:$comp3,comp4:$comp4,comp5:$comp5})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(6)
    if (comp6 != ""):
        q1 = """
        create (n:checkpoint {titel:$titel,tekst:$tekst,emoji:$emoji,comp1:$comp1,comp2:$comp2,comp3:$comp3,comp4:$comp4,comp5:$comp5,comp6:$comp6})
        """
        map = {"titel": titel, "tekst": tekst, "emoji": emoji, "comp1": comp1, "comp2": comp2, "comp3": comp3, "comp4": comp4,
               "comp5": comp5, "comp6": comp6}
        try:
            session.run(q1, map)
            return 'succesfull'
        except Exception as e:
            return (str(e))
        print(7)
        
@api.route("/api/display",methods=["GET","POST"])
def display_node():
    q1="""
    match (n:persoon) return n
    """
    results=session.run(q1)
    data=results.data()
    print(data)
    return(jsonify(data))

@api.route("/create",methods=["GET","POST"])
def create_node3():
    req_data = request.get_json()
    emoji = req_data['emoji']
    q1="""
    create (n:checkpoint {emoji:$emoji})
    """
    map={"emoji":emoji}
    try:
        session.run(q1,map)
        return 'succesfull'
    except Exception as e:
        return (str(e))


@api.route("/bewerken",methods=["GET","POST"])
def display_node():
    q2="""
    MATCH (P:Pulse) return p:Pulse
    """
    results=session.run(q2)
    data=results.data()
    print(data)
    return(jsonify(data))

def display_node():
    q2="""
    MATCH (p.Pulse)
    PUT ( p.Pulse)
    RETURM p:Pulse
    """
    results=sessopm.rum(q2)
    data=results.date()
    print(data)
    return(jsonify(data))

if __name__=="__main__":
    api.run(port=5050)