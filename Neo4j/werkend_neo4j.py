from flask import Flask,request,jsonify,redirect,render_template,request,jsonify
from neo4j import GraphDatabase
import csv

#establish the connection
with open(r'C:\Users\caspe\Documents\GitHub\PeLeP\Neo4j\Test-API.text') as f1:
    data=csv.reader(f1,delimiter=",")
    for row in data:
        username = row[0]
        pwd = row[1]
        uri = row[2]
driver = GraphDatabase.driver(uri=uri,auth=(username,pwd))
session = driver.session()
api = Flask(__name__)

@api.route("/Test",methods=["GET"])
def display_node():
    q1="""
    MATCH (Omnath:Card {name:'Omnath, Locus of the Roil'}) RETURN Omnath
    """
    results=session.run(q1)
    data=results.data()
    print(data)
    return(jsonify(data))

if __name__=="__main__":
    api.run()