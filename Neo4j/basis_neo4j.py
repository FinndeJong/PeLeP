from flask import Flask,jsonify
from neo4j import GraphDatabase
import csv,secrets

# establish a connection with a Neo4j database
with open(r"C:\Users\caspe\Documents\GitHub\PeLeP\Neo4j\Test-API.text") as f1:
    data=csv.reader(f1,delimiter=",")
    for row in data:
        username = row[0]
        pwd = row[1]
        uri = row[2]
driver = GraphDatabase.driver(uri=uri,auth=(username,pwd))
session = driver.session()
api = Flask(__name__)

# data get
# this function requests data from Neo4j
@api.route("/test_ophalen",methods=["GET"])
def display_node():
    q1="""
    MATCH (p:pulse) RETURN p
    """
    results=session.run(q1)
    data=results.data()
    print(data)
    return(jsonify(data))

# token post
# run this query in Neo4j: CREATE CONSTRAINT ON (p:plulse) ASSERT p.token IS UNIQUE
# this function creates a node in Neo4j with a random unique token property, the token gets checked once to see if it is already in use.
@api.route("/test_token", methods=["POST"])
def test_token():
    naam = "xxxxxxxxxx"
    token = secrets.token_urlsafe()
    print(token)
    q1="""
    CREATE (p:pulse {naam:$naam, token:$token})
    """
    map = {"naam":naam, "token":token}
    try:
        session.run(q1, map, token = token)
        return "succesfull"
    except:
        token = secrets.token_urlsafe()
        session.run(q1, map, token = token)
        return "another try"

if __name__=="__main__":
    api.run(debug=True)