import os
from flask import Flask, make_response, request, send_from_directory, current_app

app = Flask(__name__)

@app.route("/")
def landing_page():
    return return send_from_directory('static', 'index.html')


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)