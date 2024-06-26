from flask import Flask, render_template, request, jsonify
from libs.respond import generate_response

app = Flask(__name__)

messages = []

@app.route('/')
def index():
    return render_template('chat.html')

@app.route('/send', methods=['POST'])
def send_message():
    message = request.form['message']
    messages.append(message)
    response = generate_response()  
    messages.append(response)  
    return jsonify({'status': 'Message sent'})

@app.route('/messages')
def get_messages():
    return jsonify(messages)

if __name__ == '__main__':
    app.run(debug=True)
