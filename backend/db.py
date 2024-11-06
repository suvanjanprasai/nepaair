import sqlite3

# Establish connection and create cursor
connection = sqlite3.connect("flights.db",check_same_thread=False)
cursor = connection.cursor()

# Create table if it doesn't exist
cursor.execute("""
CREATE TABLE IF NOT EXISTS flights (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    flight_number TEXT UNIQUE,
    departure TEXT,
    destination TEXT,
    departure_time TEXT,
    arrival_time TEXT,
    price_adult TEXT,
    price_child TEXT
)
""")

# Function to store flight data
def store(flight_number, departure, destination, departure_time, arrival_time, price_adult, price_child):
    try:
        cursor.execute("""
        INSERT INTO flights (flight_number, departure, destination, departure_time, arrival_time, price_adult, price_child)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (flight_number, departure, destination, departure_time, arrival_time, price_adult, price_child))
        connection.commit()
        return "success"
    
    except sqlite3.IntegrityError:
        return "integrity error"

def search(departure, destination, departure_time):
    cursor.execute("""
        SELECT * FROM flights
        WHERE departure = ?
        AND destination = ?
        AND departure_time LIKE ? || '%'
        """, (departure, destination, departure_time))
    data = cursor.fetchall()
    return data


def searchAll():
    cursor.execute("""SELECT * FROM flights""")
    data = cursor.fetchall()
    return data


def searchSpecific(flight_number):
    cursor.execute("""SELECT * FROM flights WHERE flight_number = ?""",(flight_number))
    data = cursor.fetchall()[0]
    return data


def closeConnection():
    connection.close()  
