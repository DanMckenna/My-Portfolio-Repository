/* Coded by: Daniel P. Mckenna
 * This is a simple C# console application whose purpose is to
 * demonstrate different ways to write to and utilize the console.
 * This application was originally written using .NET version 8.0 (not the .NET Framework) */

//Write a simple message to the console
Console.WriteLine("This is a simple message that was written to the console");

//Write a message to the console from a variable
string messageStr = "This message was made in a variable";
Console.WriteLine(messageStr);

//Write a message to the console using string concatenation
string concatenationStr = "string concatenation";
Console.WriteLine("This message was made using " + concatenationStr);

//Write a message to the console using string interpolation
string interpolationStr = "string interpolation";
Console.WriteLine($"This message was made using {interpolationStr}");

//Write the length of a string to the console while also using escape characters to write double quotes
string computerStr = "Computer";
Console.WriteLine("The number of characters in the word \"" + computerStr + "\" is: " + computerStr.Length);

//
var favoriteColorInputStr = "";
Console.Write("What is your favorite color?");

favoriteColorInputStr = Console.ReadLine();

if (favoriteColorInputStr == "")
{
    Console.WriteLine("HEY! Wait a minute! You didn't type anything!!!");
}
else if (favoriteColorInputStr == "indigo")
{
    Console.WriteLine("GASP! OH MY GOODNESS! That's also MY favorite color XD!!!");
}
else
{
    Console.WriteLine("Cool! My favorite color is indigo");
}