from flask import Flask,request,jsonify,redirect,render_template,request,jsonify
from neo4j import GraphDatabase
import csv,secrets

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

# werkende data ophalen
# @api.route("/Test",methods=["GET"])
# def display_node():
#     q1="""
#     MATCH (p:pulse) RETURN p
#     """
#     results=session.run(q1)
#     data=results.data()
#     print(data)
#     return(jsonify(data))


# werkende token post
@api.route("/test_token", methods=["POST"])
def test_token():
    naam = "Test 9"
    token = secrets.token_urlsafe()
    print(token)
    q1="""
    CREATE (p:pulse {naam:$naam, token:$token})
    """
    map = {"naam":naam, "token":token}
    try:
        session.run(q1, map, token = token)
        return 'succesfull'
    except:
        token =secrets.token_urlsafe()
        session.run(q1, map, token = token)
        return 'second try'

# token post loop in progress 
# @api.route("/test_token", methods=["POST"])
# def test_token():
#     naam = "Test 8"
#     token = "565"
#     resp = request.post
#     print(token)
#     q1="""
#     CREATE (p:pulse {naam:$naam, token:$token})
#     """
#     map = {"naam":naam, "token":token}
#     while True:   
#         try:
#         session.run(q1, map, token = token)
#         return "first try"
#     else:
#         resp.statuscode != 200:
#         token =secrets.token_urlsafe()
#         session.run(q1, map, token = token)
#         return "not first try"


if __name__=="__main__":
    api.run(debug=True)