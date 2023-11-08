# Thingsboard-Migration
 
Hello there! Here is a documentation of how to migrate your old thingsboard telemetries to the newest version.

First of all, you'll use Node-Red to make this migration, and then it will be automated...

# Now let's go!

 ### To understand everything, keep your eyes on your Swagger documentation. If some address is wrong you can adjust it reading your Swagger documentation!
  - Now, you have to create a inject node to make the login on the thingsboard account, for exampple: Inside of the node "inject", select the msg.payload mode, put the json type and send this {"username":"tenant@thingsboard.org", "password":"tenant"}(example). Like the image below:

 ![image](https://github.com/nicolas-davila/Thingsboard-Migration/assets/123404361/9aa9f9ab-8001-48bc-a0c5-b12c43cc12f1)

 - Alright, you can add the http node, the json node and a function node (to save the token) now! In the http node put this web addres: http://your-domain/api/auth/login. Now follow the image below:

![image](https://github.com/nicolas-davila/Thingsboard-Migration/assets/123404361/452b037e-30e9-4a03-ad0c-46817e514b6a)

- In the first function node, open the "firstFunction.js" file and adapt the code to your function. After, you can add another http node to GET the telemetry. The online address is http://your-domain/api/plugins/telemetry/DEVICE/d529f860-d14c-11ec-9e35-47187aca82e1/values/timeseries?keys=uarms&startTs=1699304451000&endTs=1699380279000&limit=50000&agg=NONE

### Warning! After the "/DEVICE/" you'll put your device id, and the keys is the value you want to get, the startTs is the timestamps of when you'll start to get the value and the endTs is the time you want to stop get. Remember put three "0" after the timestamp. 

 - Follow the image below:
 - You have to put a code in the second function node. Open the "secondFunction.js" file and adapt it to your program.
   
  ![image](https://github.com/nicolas-davila/Thingsboard-Migration/assets/123404361/11e74d90-8a7d-4bf8-a7b3-b3b97c8cb09c)

 - It's almost there! Now you have to add a trigger (named login) to make contact with the newest thingsboard version. Add and send the username and password, put the http node login. After you have to add the function node and type some code. Open the "thirdFunction.js" file and adapt it to yours. Follow the image below:

![image](https://github.com/nicolas-davila/Thingsboard-Migration/assets/123404361/4100b84a-0933-4a60-9a7f-dae2af3d9465)

Now you have the program running! The final project will be like this:


![image](https://github.com/nicolas-davila/Thingsboard-Migration/assets/123404361/119f849c-be94-4910-9acf-6585b052584c)
