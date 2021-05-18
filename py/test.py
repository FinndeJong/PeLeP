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

#Make API call /datetime
# this api will test the post of datetime stamp on a node in neo4j.

# api = Flask(__name__)

# @api.route("/datetime", methods=["POST"])
# def datetime_node():
#     q1 = """
#         CREATE (p:Pulse {gemaakt_op:"2021-05-17T18:29:22Z"})
#         """
#     try:
#         session.run(q1)
#         print("Succesfull")
#         return 'succesfull'
#     except Exception as e:
#         return (str(e))

# @api.route("/pulsetest",methods=["GET"])
# def display_node():
#     q1="""
#     MATCH (p:Pulse) RETURN p
#     """
#     results=session.run(q1)
#     data=results.data()
#     print(data)
#     return(jsonify(data))

q_delete = """
            MATCH (p:Pulse { titel : "ANTON"})
            DELETE (p)
            """
session.run(q_delete)

q1 = """
    CREATE (p:Pulse {titel : "ANTON" , gemaakt_op: datetime()})
    """
session.run(q1)



q_dif = """
    MATCH (p:Pulse { titel : "ANTON"})
    RETURN p.gemaakt_op as datum
    """
result = session.run(q_dif)
datum_res = [record ["datum"] for record in result ]

print (datum_res , ' : ')


datum_nu = datetime.now()
print (datum_nu)


q_dif = """
    MATCH (p:Pulse { titel : "ANTON"})
    SET  p.bewerkdatum = datetime()
    """

    #2021-05-17T18:10:07.288000000Z 
result = session.run(q_dif)
datum_res = [record ["datum"] for record in result ]

print (datum_res , ' : ')

session.close()
driver.close()
