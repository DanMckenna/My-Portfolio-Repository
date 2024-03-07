using System;

/* Coded by: Daniel P. Mckenna
 * This is a simple C# console application whose purpose is to
 * demonstrate different ways to write to and utilize the console.
 * This application was originally written using .NET version 8.0 (not the .NET Framework) */

/* You can try out this application by compiling the source code and
 * running the resulting executable. */

namespace ConsoleDemonstrationApp
{
    public class ConsoleDemonstrationApp
    {
        static void Main(string[] args)
        {
            // Write a series of simple messages to the console
            Console.WriteLine("The ConsoleDemonstrationApp program has started.");
            Console.WriteLine("A series of simple string techniques will now be demonstrated.");

            // Write an example of String Concatenation to the console
            WriteConcatenatedString("two different strings");

            // Write an example of String Interpolation to the console
            WriteInterpolatedString("two different strings");

            // Write an example of the string Length method and prompt the user for input
            DisplayStringLength();

            // Write the ending message and terminate the application once the user presses any input
            Console.WriteLine("The ConsoleDemonstrationApp program has finished. Press any key to finish...");
            Console.ReadKey();
        }

        // Concatenates the parameter string to a message and writes the result to the Console
        public static void WriteConcatenatedString(string concatenationStr)
        {
            Console.WriteLine("String Concatenation Example: This message was made by concatenating " + concatenationStr);
        }

        // Interpolates the parameter string to a message and writes the result to the Console
        public static void WriteInterpolatedString(string interpolatedStr)
        {
            Console.WriteLine($"String Interpolation Example: This message was made by interpolating {interpolatedStr}");
        }

        // Prompts the user for a string and returns the length
        public static void DisplayStringLength()
        {
            // This variable will be used to reference the user's input string
            // It is possible for the input to return null so we must define this as a nullable variable
            string? inputStr;

            // Prompt the user for input and store entered string
            Console.Write("String Length Example: Please enter a string...");
            inputStr = Console.ReadLine();

            // Verify that the user's input is not null, otherwise use recursion to prompt the user to re-enter their input
            if (inputStr == null)
            {
                Console.WriteLine("Input string is null");
                DisplayStringLength();
            }
            // Verify that the user's input is not empty, otherwise use recursion to prompt the user to re-enter their input
            else if(inputStr == "")
            {
                Console.WriteLine("You didn't enter a string");
                DisplayStringLength();
            }
            else
            {
                // Display the length of the user's input
                Console.WriteLine("The length of your string is " + (inputStr.Length).ToString());
            }
        }
    }
}