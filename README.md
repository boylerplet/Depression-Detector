# Readme

This project contains an application to take input of text and classify it into two categories which are ___Depressed___ or ___Non-Depresssed___ using a deep learning algorithm. The project contains a frontend where the user can input text data which will be sent to the model to be processed and a result will be generated. The implementation has two components the front-end for user interaction and the back-end for the python run ___flask___ server

# Pre-requisites

This project uses a deep learning algorithm ___word vectorization___ using the ___GloVe___ vector corpus which has to be pre-downloaded by the user  
It is available to download [Here](https://nlp.stanford.edu/data/glove.6B.zip)

It must be extracted into the folder `glove.6B` and the folder should be placed in the `server` directory

The final path must look something like this `server\glove.6B\*.txt`

# Execution

### Run Front-end

- Open a command line in the client directory  
- `npm install --legacy-peer-deps` to install all the required node libraries  
- `npm start` to run the development server 

### Run Flask Server

The backend part of the depression training model

- `pip install virtualenv` to install virtual environment to local machine
- Open the ___server___ directory in a new command line 
- Create a virtual environment in current directory with `virtualenv venv`
- Switch to the virtual environment `venv\Scripts\activate`
- Install all the required python Libraries `pip install -r requirements.txt`
- Run the flask development server using `flask run`

#


`xcopy <source> <destination> /EXCLUDE:exclude.txt /S`

`/S` is for recursive copy
