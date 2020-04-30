from flask import Blueprint
from flask import request
import os
import json
import base64
import jwt
import hashlib
from server import mysql


auth = Blueprint("auth",__name__)

@auth.route('/signup')
def signup():
    return "1stauth"

    
