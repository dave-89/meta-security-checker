import os
import json
from tag_checker import get_http_equiv_tags
from flask import Flask, abort, make_response, request, send_from_directory, current_app

app = Flask(__name__)

api_key = os.environ.get("X-API-KEY", "x2I0l6N4Az8B")

@app.route("/", methods = ['GET'])
def landing_page():
    return send_from_directory('static', 'index.html')

@app.route("/check", methods = ['POST'])
def check():
    headers = request.headers
    if headers['X-API-KEY'] != api_key:
        abort(401)
    data = json.loads(request.data)
    return json.dumps({
        "tags": get_http_equiv_tags(data['url'])
    })


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)