from flask import Flask,request,jsonify,redirect,render_template,request, jsonify
from neo4j import GraphDatabase
import csv
import datetime
from datetime import date
#establish the connection
with open(r'C:\Users\LIEKE\OneDrive\Documenten\GitHub\PeLeP\txt\neo4j.text') as f1:
    data=csv.reader(f1,delimiter=",")
    for row in data:
        username=row[0]
        pwd=row[1]
        uri=row[2]
print(username,pwd,uri)
driver=GraphDatabase.driver(uri=uri,auth=(username,pwd))
session=driver.session()
api=Flask(__name__)

@api.route("/create",methods=["GET","POST"])
def create_node():
    req_data = request.get_json()
    # titel = req_data['titel']
    # tekst = req_data['tekst']
    print(titel)
    q1="""
    create (n:checkpoint {titel:$titel,tekst:$tekst})
    """
    map={"titel":titel,"tekst":tekst}
    try:
        session.run(q1,map)
        return 'succesfull'
    except Exception as e:
        return (str(e))

@api.route("/display",methods=["GET","POST"])
def display_node():
    q1="""
    match (n:persoon) return n
    """
    results=session.run(q1)
    data=results.data()
    print(data)
    return(jsonify(data))


if __name__=="__main__":
    api.run(port=5050)

print("hallo")