# Created by Daniel Mckenna
# This application calls invokes an online API using the 'requests' package and displays the results in the terminal
# The 'requests' package (version 2.31.0) is a third-party library that was downloaded/installed from PyPi via pip

# import packages
from urllib import response
import requests # a third-party package enables the use of http related functions needed to invoke APIs

def callAPI():
    response = requests.get("https://openlibrary.org/authors/OL19725A/works.json")
    json = response.json()
    for entry in json["entries"]:
        print(entry["title"])

def main():
    print("The PythonAPIDemo application has started")
    callAPI()

main()