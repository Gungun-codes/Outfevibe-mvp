from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import random

app = Flask(__name__)
CORS(app)

# Load outfits
with open("outfits.json") as f:
    outfits = json.load(f)


@app.route("/suggest", methods=["POST"])
def suggest():
    data = request.json

    # Normalize inputs safely
    gender = data.get("gender", "").lower()
    occasion = data.get("occasion", "").lower()
    mood = data.get("mood", "").lower()
    color = data.get("color")

    if color:
        color = color.lower()

    print("Gender:", gender)
    print("Occasion:", occasion)
    print("Mood:", mood)
    print("Color:", color)

    # Filter tops
    tops = [
        o for o in outfits
        if o.get("category") == "top"
        and o.get("gender") == gender
        and (not occasion or o.get("occasion") == occasion)
        and (not mood or o.get("mood") == mood)
        and (not color or o.get("color") == color)
    ]

    # Filter bottoms
    bottoms = [
        o for o in outfits
        if o.get("category") == "bottom"
        and o.get("gender") == gender
        and (not occasion or o.get("occasion") == occasion)
        and (not mood or o.get("mood") == mood)
    ]

    # 🔥 Shuffle BEFORE slicing
    random.shuffle(tops)
    random.shuffle(bottoms)

    return jsonify({
        "tops": tops[:3],
        "bottoms": bottoms[:3]
    })


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
