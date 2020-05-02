from flask import Blueprint
from flask import request,jsonify
import os
import json
import base64
import jwt
import hashlib
from server import mysql


auth = Blueprint("auth",__name__)


@auth.route("/signup" ,methods=["POST"])
def register():
    username = request.json["username"]
    email= request.json["email"]
    mobile = request.json["mobile"]
    password = request.json["password"]
    salt = generate_salt()
    password_hash = hasing(password + str(salt))
    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO users (username, email, salt, password_hash,mobile)
        VALUES (%s, %s, %s, %s,%s )""", (username, email, salt, password_hash,mobile)
    )
    mysql.connection.commit()
    cursor.close()
    return json.dumps({"message":"updated"})

@auth.route("/login" ,methods=["POST"])
def login():
    username = request.json["username"]
    password = request.json["password"]
    cursor = mysql.connection.cursor()
    cursor.execute(
        """select * from users where username= %s""",(username,)
    )
    results = cursor.fetchall()
    user = results[0]
    salt = user["salt"]
    new_password = password+salt
    password_hash = hasing(new_password)
    if password_hash == user["password_hash"]:
        encode_Data = jwt.encode({"id":user["id"]},'users',algorithm= 'HS256')
        return json.dumps({"token":str(encode_Data),"username":user["username"]})
    else:
        return json.dumps({"message":"inavlid input"})
    
@auth.route('/addfav/<id>',methods=['GET','POST','DELETE'])
def addfav(id):
    if request.method == 'POST':
        token = request.headers.get('Authorization')
        encoded_data = token.split(' ')[0]
        try:
            decode_data = jwt.decode(encoded_data,'users',algorithms=['HS256'])
            print(decode_data['id'])
            cursor = mysql.connection.cursor()
            cursor.execute(
            """insert into userfav (competition_id,user_id) values (%s,%s)""",(id,decode_data['id'])
            )
            cursor.connection.commit()
            cursor.close()
            return json.dumps({'id':id})
        except:
            return json.dumps({'message':'error'}),400   
    elif request.method == 'GET':
        token = request.headers.get('Authorization')
        encoded_data = token.split(' ')[0]
        try:
            decode_data = jwt.decode(encoded_data,'users',algorithms=['HS256'])
            cursor = mysql.connection.cursor()
            cursor.execute(
            """select * from userfav left join competitions on userfav.competition_id = competitions.id where userfav.user_id = %s""",(decode_data['id'],)
            )
            results = cursor.fetchall()
            cursor.close()
            print(decode_data['id'])
            items = []
            for item in results:
                items.append(item)
            return jsonify(items)
        except:
            return json.dumps({'message':'error'}),400
                                                                                                                                                                                                                                                                                           
        


def generate_salt():
    salt = os.urandom(16)
    return base64.b64encode(salt)

def hasing(string):
    hash= hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()
