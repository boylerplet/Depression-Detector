import pickle
import os
from keras.layers import Embedding, Conv1D, MaxPooling1D, LSTM, Dense
from keras.models import Sequential
from keras.models import load_model
from keras.utils import pad_sequences
from nltk.corpus import stopwords
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
import nltk

nltk.download('stopwords')

app = Flask(__name__)
CORS(app)


def remove_stopwords(text):
    stop_words = set(stopwords.words('english'))
    words = text.split()
    return " ".join([word for word in words if word not in stop_words])


def load_tokenizer(tokenizer_file):
    with open(tokenizer_file, 'rb') as handle:
        tokenizer = pickle.load(handle)
    return tokenizer


# Load the tokenizer and the model
tokenizer = load_tokenizer('tokenizer.pickle')
model = load_model('model.h5')
word_index = tokenizer.word_index


@app.before_request
def log_request_info():
    app.logger.debug('Request Headers: %s', request.headers)
    app.logger.debug('Request Body: %s', request.get_data())


@app.after_request
def log_response_info(response):
    app.logger.debug('Response Headers: %s', response.headers)
    app.logger.debug('Response Body: %s', response.get_data())
    return response


@app.route('/')
def index():
    return 'Hello World!'


@app.route('/chatbot', methods=['POST'])
def chatbot():
    app.logger.debug('chatbot function called')
    input_text = request.json['text']
    app.logger.debug('Input Text: %s', input_text)

    # Set the maximum sequence length
    maxlen = 300

    # Preprocess the text sample and make predictions
    preprocessed_text = remove_stopwords(input_text)
    preprocessed_text = tokenizer.texts_to_sequences([preprocessed_text])
    preprocessed_text = pad_sequences(
        preprocessed_text, padding='post', maxlen=maxlen)
    pred_label = model.predict(preprocessed_text)
    percent_depressed = pred_label[0][1].item(
    ) * 100 if pred_label.shape[0] > 1 else pred_label[0].item() * 100

    app.logger.debug('Output Text: %s', percent_depressed)
    response = jsonify(
        {'response': {'result': percent_depressed, 'pred': pred_label[0].item(), 'txt': input_text}})
    return response


if __name__ == "__main__":
    app.logger.setLevel(logging.DEBUG)
    app.run(debug=True)
