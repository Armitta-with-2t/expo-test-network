from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
from deck import Deck

app = Flask(__name__, static_folder='cards')
CORS(app, resources={r"/api/*": {"origins": "*"}, r"/cards/*": {"origins": "*"}})

deck = Deck()

@app.route('/api/card', methods=['GET'])
def get_random_card():
    card = deck.get_random_card()
    image_path = f"/cards/{card['rank']}_of_{card['suit']}.png"
    # Use a single, correct base URL
    base_url = "https://armaiti.pythonanywhere.com"
    image_url = f"{base_url}{image_path}"
    return jsonify({
        'rank': card['rank'],
        'suit': card['suit'],
        'image_url': image_url
    })

@app.route('/cards/<path:filename>')
def serve_card_image(filename):
    response = send_from_directory(app.static_folder, filename)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)