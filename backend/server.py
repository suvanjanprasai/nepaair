from flask import Flask, request, jsonify
import db
import sys
import signal
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/searchflight', methods=["POST"])
def searchFlight():
    departure = request.form.get("departure")
    destination = request.form.get("destination")
    nationality = request.form.get("nationality")
    departure_time = request.form.get("departure_time").split("T")[0]
    adult = request.form.get("adult")
    child = request.form.get("child")
    returned_list = db.search(departure,destination,departure_time)

    if type(returned_list) == list and returned_list != []:
        response = {
            "flights": returned_list,
            "search_details": {
                "departure": departure,
                "destination": destination,
                "nationality": nationality,
                "departure_time": departure_time,
                "adult": adult,
                "child": child
            }
        }
        return jsonify(response), 200
    else:
        return jsonify({"message": "Flights not found"}), 404
    

# Admin features

@app.route('/storeflight', methods=["POST"])
def storeFlight():
    pin = request.form.get("pin")
    if pin == "123456":
        flight_number = request.form.get("flight_number")
        departure = request.form.get("departure")
        destination = request.form.get("destination")
        departure_time = request.form.get("departure_time")
        arrival_time = request.form.get("arrival_time")
        price_adult = request.form.get("price_adult")
        price_child = request.form.get("price_child")
        returned_status = db.store(flight_number, departure, destination, departure_time, arrival_time,price_adult, price_child)

        if returned_status == "success":
            return jsonify({"message": "Flight stored successfully"}), 201
        else:
            return jsonify({"message": "Flight already exists"}), 409
    else:
        return jsonify({"message": "Incorrect Pin"}), 401


@app.route('/searchallflights', methods=["POST"])
def searchAllFlights():
    pin = request.form.get("pin")
    if pin == "123456":
        response = {
            "flights": db.searchAll()
            }
        return jsonify(response), 200
    else:
        return jsonify({"message": "Incorrect Pin"}), 401

@app.route('/searchspecific', methods=["POST"])
def searchSpecific():
    pin = request.form.get("pin")
    if pin == "123456":
        response = {
            "flight": db.searchSpecific()
            }
        return jsonify(response), 200
    else:
        return jsonify({"message": "Incorrect Pin"}), 401        


def signal_handler(signal, frame):
    print("\nShutting down gracefully...")
    db.closeConnection()
    sys.exit(0)

signal.signal(signal.SIGINT, signal_handler)
signal.signal(signal.SIGTERM, signal_handler)

if __name__ == "__main__":
    app.run('0.0.0.0',port=6001, debug=True)
