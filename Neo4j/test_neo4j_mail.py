from flask import Flask,request,jsonify,redirect,render_template,request,jsonify
from neo4j import GraphDatabase
import csv,smtplib

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
    MATCH (Omnath:Card {name:'Omnath, Locus of the Roil'}) RETURN Card
    """
    results=session.run(q1)
    data=results.data()
    print(data)
    return(jsonify(data))

gmail_user = "casperweijtmans@gmail.com"
gmail_password = "Kr4ken0ce4n!"

sent_from = gmail_user
to = ["casper.weijtmans@student.hu.nl"]
subject = 'Aanvraag reactie Pelep'
body = data

email_text = """\
From: %s
To: %s
Subject: %s

%s
""" % (sent_from, ", ".join(to), subject, body)

try:
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(gmail_user, gmail_password)
    server.sendmail(gmail_user, to, email_text)
    server.close()

    print ("Email sent!")
except:
    print ("Something went wrong...")

if __name__=="__main__":
    api.run()