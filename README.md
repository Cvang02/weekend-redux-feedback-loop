# Project: Redux Feedback Loop

## Description

This week Prime session, we learned redux and how to incorporate it into react.js. We learned how to import different types of redux such as createStore, combineReducers, Provider, dispatch and useSelector. We also learned how to create different reducers and actions to received and pass data to different components and through client and server side. 

For this week project, I created a reflection/feedback form modeled based after Prime Academy system. Feedback is to be collected over 4 views of How you are feeling, your understanding of the content, how well are you being supported and a comment section. A review page also needs to be created where it will display the current feedback values and have a submit button when clicked will send the data into the database. 

My first initial process to start the project is to install all the necessarily dependencies (please look at the prerequisites for all dependencies). Once all dependencies are installed, I created different components base off the feedback view such as feeling form, understanding form, support form etc. To make sure that my redux data are being sent into the database, I created one single reducer to take in one object of the feedback first. When data successfully are being send to the database, I split the single reducer into for different reducers to take in a single object of each feedback view and combing them all together in a POST route sending it to the database. This is to make sure that each components have one single function when going onto the next step/page. The last step is to make sure that when the user submitted their feedback, it will move them to a different page offering the user to have an option to leave another feedback or not. 

Here is screenshot of the final product that I have style with some basic material UI styling. 
![Screen Shot 2022-09-25 at 4 24 05 PM](https://user-images.githubusercontent.com/105823509/192168115-55f11b98-accf-45c2-85cb-e84af31cf932.png)
![Screen Shot 2022-09-25 at 4 24 15 PM](https://user-images.githubusercontent.com/105823509/192168116-47032dbe-2d10-4381-a8f4-6a1aa5b96b1a.png)
![Screen Shot 2022-09-25 at 4 24 25 PM](https://user-images.githubusercontent.com/105823509/192168119-793c472f-71d8-4fb7-b5a3-975a4c4c645e.png)
![Screen Shot 2022-09-25 at 4 24 35 PM](https://user-images.githubusercontent.com/105823509/192168121-a6adeb3e-2b0d-421b-947b-cb7f6e2394c8.png)
![Screen Shot 2022-09-25 at 4 24 46 PM](https://user-images.githubusercontent.com/105823509/192168122-040054c8-0cc7-42f6-b5e9-b0d1201934d1.png)

## Prerequisites:

    •	axios
    •	body-parser
    •	express
    •	node.js
    •	pg
    •	react
    •	redux
    •	material ui

## Installation

1. Create a database named react_gallery,
2. The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an npm install
4. Run npm run server in your terminal
5. Run npm run client in your terminal
6. The npm run client command will open up a new browser tab for you!

## Usage

Once everything is set up and ready to go. Please make sure both client and server are running at the same time. Please keep in mind that if no values were input an alert will pop up to let the user know that the default value will be 0 and move on to the next step. To input an answer for the previous step, just go back to input the value again. 

1.	In the web browser, click the start button to start the feedback survey. 
2.	In the feeling section, please input a number and hit the next button to move on. 
3.	In the understanding section, please input a number and hit the next button to move on. 
4.	In the support section, please input a number and hit the next button to move on. 
5.	In the comment section, comment can be an empty value.  Hit next to go to the review page. 
6.	The review page will show the current value and to change an answer, just go back to the page where you would like to change your answer. Hit submit once you have review your feedback. 
7.	Finally, you should be taken to a thank you page to give you the option to leave another feedback or not. If you click on leave another feedback, you will be taken to the start page again and start the survey all over again when ready. 

## Acknowledgement

Thanks to Prime Digital Academy who equipped and helped me to make this application a reality.

## Support

If you have suggestions or issues, please email me at chameng.vang@outlook.com
