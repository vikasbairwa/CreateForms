# CreateForms App

A React website to create dynamic forms.

## Structure
                     App
                   /     \
                  /       \
                InputPage  FormPage
                              |
                           MainCard : a reccursive react component
                           /  |  \  \
                          /   |   \   \
                         /    |    \    \
                     Input   Radio Select Switch

InputPage : Takes input in text form and convert it to an object then stores into redux store for it to be available globally.

MainCard : This  component is called for evely object in the input object. It will be recursevly called for the subparameters of an object if it's UIType is 'group' else it will simply return a component according to the UIType specified.

I have used Redux with the help of Redux Toolkit for the extensive state management.
There are two states in the store one is for the input JSON and other stores overy object in the JSON recived in the from of key Value pair. where key is an amalgamation of present object JsonKey and it's parent object.
These key value pair helps in determining whether to show the UI component or not based on the condition.

## Local run
To run the app locally first clone the app.To download the required node modules run "npm install" then simply run script 'npm run start' in the created folder.

This website is deployed on Vercel.
