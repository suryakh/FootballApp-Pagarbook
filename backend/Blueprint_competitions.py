from flask import Blueprint
from flask import request,jsonify
from server import mysql
import jwt
import json

competitions = Blueprint('competitions',__name__)

@competitions.route('/info')
def getCompetionData():
    token = request.headers.get('Authorization')
    encoded_data = token.split(' ')[0]
    try:
        decode_data = jwt.decode(encoded_data,'users',algorithms=['HS256'])
        cursor = mysql.connection.cursor()
        cursor.execute(
        """SELECT * FROM competitions"""
        )
        results = cursor.fetchall()
        cursor.close()
        items = []
        for item in results:
            items.append(item)
        return jsonify(items)
    except:
        return "error"    
    
@competitions.route('/teams/<id>')
def getteamsdata(id):
    print(id)
    token = request.headers.get('Authorization')
    encoded_data = token.split(' ')[0]
    try:
        decode_data = jwt.decode(encoded_data,'users',algorithms=['HS256'])
        cursor = mysql.connection.cursor()
        cursor.execute(
        """select competitions.id as competition_id,competitions.Name,teams.* from compteams left join competitions ON compteams.competition_id = competitions.id left join teams ON compteams.team_id = teams.id where competitions.id = %s""",(id,)
        )
        # print(id)
        results = cursor.fetchall()
        cursor.close()
        items = []
        for item in results:
            items.append(item)
        return jsonify(items)
    except:
        return "error"