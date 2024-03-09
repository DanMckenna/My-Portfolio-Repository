using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http; // enables the ability to natively invoke APIs
using System.Text;
using System.Text.Json; // enables json functionality
using System.Threading.Tasks;
using System.Configuration; // enables the ability to read from config files

/* Created by Daniel P. Mckenna
 * This application uses the native HttpClient library to request a URL to a random picture
 * of a fox from the 'RandomFox' API and then opens that URL in the user's default web browser.
 * RandomFox is a public online API that does not require any Auth/apiKey and does not need to be
 * supplied with any request data. */

// This application was built to target the .NET Framework 

namespace FindAFoxAPI
{
    internal class Program
    {
        static void Main()
        {
            // Create an HttpClient object that will be used later to call the API
            HttpClient client = new HttpClient();

            //Create an HTTP response object that will be used later to receive the raw response from the API
            HttpResponseMessage postResp = new HttpResponseMessage();

            // Obtain the uri of the API from the config file and assign it to the Base Address of our client object
            // Make sure that this ends with a forwardslash character
            client.BaseAddress = new Uri(ConfigurationManager.AppSettings.Get("RandomFoxUri"));

            // This is what we would use if we were required to pass request data
            //var json = JsonSerializer.Serialize(requestData);
            //var content = new StringContent(json, Encoding.UTF8, "application/json");

            /* Create a content object containing the following:
             *  the request data formated as a serialized Json string (this is empty if no request data is needed)
             *  the encoding type
             *  the json media type */
            var content = new StringContent("", Encoding.UTF8, "application/json");

            // Attempt to invoke the API and catch any errors
            try
            {
                // Obtain the target Endpoint from the config file and then attempt to invoke the API
                postResp = client.PostAsync(ConfigurationManager.AppSettings.Get("RandomFoxEndpoint"), content).Result;
            }
            catch (HttpRequestException ex)
            {
                Console.WriteLine("The following error occurred when attempting to call the API: " + ex.Message);
            }

            // Check if any errors were found in the status code returned from the call to the API
            if (postResp.IsSuccessStatusCode)
            {
                // Create a JSON options object that will be used to make property names on the response case-insensitive
                // This is done to prevent issues from reading the results of the response
                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };

                // Create a content object referencing the result of the call to the api as a serialized json string
                var responseContent = postResp.Content.ReadAsStringAsync().Result;

                /* Create a new instance of the APIResponse object and assign the values of it's members
                 * to the deserialized values returned from the api call. The options object is used to prevent
                 * any possible differences in case-sensitivity between the field names of our response class and
                 * the API endpoint from causing issues interpreting the results. */
                APIResponse responseObj = JsonSerializer.Deserialize<APIResponse>(responseContent, options);

                // Display the image in the user's default web browser
                System.Diagnostics.Process.Start(responseObj.image);
            }
            else
            {
                // An error occurred on the call to the API
                Console.WriteLine("An error occurred on the call to the API: " + postResp.StatusCode);
            }
        }
    }
}
