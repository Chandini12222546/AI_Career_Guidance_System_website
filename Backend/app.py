from flask import Flask, request, jsonify
from flask_cors import CORS
from career_model import predict_career

app = Flask(__name__)
CORS(app)  # allows requests from your frontend (React / Bolt)

@app.route('/')
def home():
    return "✅ AI Career Guidance System Backend is Running Successfully!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        skill = int(data.get('skill', 0))
        interest = data.get('interest', '')
        goal = data.get('goal', '')

        result = predict_career(skill, interest, goal)
        return jsonify({
            "status": "success",
            "suggested_career": result
        })

    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
