# Created by Daniel Mckenna
# This application calls the 'Open Library' API, invokes the 'author/{olid}/works' endpoint, and displays the results in the terminal
# Running this applications displays the complete list of works by author Washington Irving in the terminal

# The API call is made using the 'requests' package (version 2.31.0) which was downloaded/installed from PyPi via pip
# Settings such as the url, endpoint, and parameters are retrived from a setting/config file
# 'Open Library' is an online public API that provides resources to lookup info about authors and books
# The 'author/{olid}/works' endpoint accepts a single parameter called 'olid' that represents the ID of a given author

# import packages
import configparser # a built in library included with the Python Standard Library that allows the use of config files
import requests # a third-party package from PyPi that enables the use of http related functions needed to invoke APIs

# obtain the API url, endpoint, and parameters from the settings/config file
def getAPISettings(url, endpoint):
    configSettings = configparser.ConfigParser()
    
    try:
        configSettings.read("PythonAPIDemo.ini") # open the config file
        url = configSettings["SettingsForIrving"]["OpenLibraryAPIURL"] # get the url of the API
        
        # get the endpoint and the olid paramter from the config file then combine them using string interpolation
        endpoint = (configSettings["SettingsForIrving"]["AuthorWorksEndpoint"]).format(olid=(configSettings["SettingsForIrving"]["AuthorOLID"]))
    except:
        print("An error occurred when trying to parse the config file")
    
    return url, endpoint

# invoke the given endpoint at the given API
def callAPI(apiURL, endpoint):
    # attempt to call the API and catch any errors that occur
    try:
        # call the API
        response = requests.get(apiURL + endpoint)
        
        # check if the API returned any error codes
        response.raise_for_status()
        
        # extract the json response returned from the call to the API
        jsonResults = response.json()
    except requests.HTTPError as err: # handling for API errors
        print("The following error occurred on the call to the API: " + str(err))
    except requests.JSONDecodeError as err: # handling for invalid JSON response objects
        print("The response returned from the call to the API does not contain valid JSON: " + str(err))
    
    return jsonResults

# parse the json object returned from the call to the API and get the title for each work returned
def parseAPIResponse(jsonResults):
    listOfWorks = []
    
    for entry in jsonResults["entries"]:
        listOfWorks.append(entry["title"])
    
    return listOfWorks

# loop through each item in the list and print the contents to the console
def printListOfWorks(listOfWorks):
    for book in listOfWorks:
        print(book)

# sequentially perform each of the following actions at program runtime
def main():
    # variables to store the url and endpoint of the API
    apiURL = ""
    endpoint = ""

    print("The PythonAPIDemo application has started")

    # getting the settings from the config file
    print("Now attempting to extract the request info needed for the API call from the config file...")
    apiURL, endpoint = getAPISettings(apiURL, endpoint) # get the url and endpoint from the API
    print("Successfully extracted the settings from the config file!")
    
    # calling the API
    print("Now attempting to call the \'Open Library\' API and request the complete list of works by author Washington Irving...")
    jsonResults = callAPI(apiURL, endpoint) # call the API
    print("The call to the API was successful!")
    
    # parsing the response from the API
    print("Now attempting to parse the response returned from the call to the API...")
    listOfWorks = parseAPIResponse(jsonResults)
    print("Successfully parsed through the json results!")
    
    # display the results on the console
    print("Here is a complete list of works by author Washington Irving found on the Open Library:")
    printListOfWorks(listOfWorks)
    endInput = input("The PythonAPIDemo application has finished. Press enter to terminate the application.")

# execute the main() function
main()