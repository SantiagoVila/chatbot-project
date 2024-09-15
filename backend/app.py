from flask import Flask, request
from integrations.whatsapp_integration import client

app = Flask(__name__)

@app.route('/whatsapp', methods=['POST'])
def whatsapp_webhook():
    return "Webhook received"

if __name__ == '__main__':
    app.run(debug=True)
