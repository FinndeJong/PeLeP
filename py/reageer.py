from flask import Flask, request, url_for, render_template, jsonify, redirect, render_template, request, jsonify
from neo4j import GraphDatabase
import csv

# establish the connection
with open(r'/Users/arzu/Documents/pelep/neo4j.txt') as f1:
    data = csv.reader(f1, delimiter=",")
    for row in data:
        username = row[0]
        pwd = row[1]
        uri = row[2]
print(username, pwd, uri)
driver = GraphDatabase.driver(uri=uri, auth=(username, pwd))
session = driver.session()
api = Flask(__name__)


#Make POST request for reageren
@api.route("/api/react", methods=["POST"])
def reageer_post():
    req_data = request.get_json()
    reactie = req_data['reactie']
    q1="""
    MATCH (p:pulse{titel:"titel"})
    CREATE (c:Comment {reactie:$reactie})-[r:gereageerd]->(p)
    """
    map={"reactie":reactie}
    try:
        session.run(q1,map)
        return 'succesfull'
    except Exception as e:
        return (str(e))


#Display
@api.route("/api/display", methods=["POST"])
def display_node():
    q1 = """
    match (p:pulse) return n
    """
    results = session.run(q1)
    data = results.data()
    print(data)
    return (jsonify(data))


if __name__ == "__main__":
    api.run(debug=True)


