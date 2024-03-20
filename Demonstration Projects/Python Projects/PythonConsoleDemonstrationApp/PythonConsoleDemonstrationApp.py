# Program created by Daniel Mckenna
# This is a simple console application written in Python to demonstrate
# basic console functionality, functions, string manipulation, loops, and conditionals

# Packages
import numbers # import the 'numbers' package from the Python Standard Library. This will be used to allow the use of numeric functions.

# This function is used to showcase console inputs
def consoleInputDemo():
    print("**********Demonstrating Console Prompts**********")
    
    # Prompt the user for a number
    # Verify that the user has entered a valid number
    # Use recursion to restart the prompt if a number was not entered
    try:
        userInput = int(input("Please enter your favorite number: "))
        print("Your favorite number is " + str(userInput) + "!!!")
    except:
        print("A valid number was not entered")
        consoleInputDemo()

# This function is used to showcase string manipulation techniques
def stringManipulationDemo():
    print("**********Demonstrating String Techniques**********")
    print("We will now begin to demonstrate some basic string manipulation techniques in Python")
    
    testString = "concatenation"
    testString2 = "Cranberry"
    print("This line was made using string " + testString + " via the \'+\' symbol") # concatenation using the '+' symbol
    print("This line was made using string", testString + " via the \',\' symbol") # concatenation using the ',' symbol
    print("The number \'" + str(7) + "\' was converted from an integer to a string") # convert an integer to a string
    print("The second letter in the word \'" + testString2 + "\' is: " + testString2[1]) # find the letter in a specified location of a string
    print("The total number of letters in the word \'" + testString2 + "\' is " + str(len(testString2))) # obtain the total length of a string
    print("The letter \'r\' appears in the word \'" + testString2 + "\' a total number of " + str(testString2.count("r")) + " time(s)") # obtain the number of occurances of a letter in a string
    
    # loop through each letter in a string and indicate it's value and position in the string
    for i in range(len(testString2)):
        print("The letter in position " + str(i+1) + " of the word \'Cranberry\' is \'" + testString2[i] + "\'")

# This is the definition of the main function which contains the actions that we want performed when the application is executed
# We will invoke this function at the bottom of our code
def main():
    print("PythonConsoleDemonstrationApp has started")
    
    # begin demonstrating string manipulation techniques
    stringManipulationDemo()

    # begin demonstrating console inputs
    consoleInputDemo()

    # Display a final prompt indicating that the application has finished
    endInput = input("The application has finished. Press enter to quit.")

# Execute the main function
main()