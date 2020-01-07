from app import app
import requests
from flask import render_template
from flask import request
import json

@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Mary'}
    return render_template('index.html', title='Home', user=user)

global headers_dict
headers_dict = {'identity' : 'T58', 'token': '57861dcd-3ed9-4647-9cb1-fbeac1d10e47'}

@app.route('/id')
def get_id():
    #userName = 'marytan'
    userName = request.args.get('username', type=str)
    if userName == None:
        return ''
    response = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/customers/'
                            + userName, headers = headers_dict)
    print(response)
    if response.status_code != 200:
        return ''
    id_json = response.json()
    customerId = id_json['customerId']
    return str(id_json)

@app.route('/details')
def get_details():
    #customerId = '2'
    customerId = request.args.get('id', type=str)
    if id == None:
        return ''
    response = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/customers/'
                            + customerId + '/details', headers = headers_dict)
    print(response)
    if response.status_code != 200:
        return ''
    details_json = response.json()
    return str(details_json)

@app.route('/deposit_accounts')
def get_deposit_accounts():
    #customerId = '2'
    customerId = request.args.get('id', type=str)
    if id == None:
        return ''
    response = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/'
                            + customerId, headers = headers_dict)

    if response.status_code != 200:
        return ''
    print(response)
    details_json = response.json()
    return str(details_json)

@app.route('/transactions')
def get_transactions():
    #deposit_account = '79'
    deposit_account = request.args.get('account', type=str)
    from_date = request.args.get('from_date', type=str)
    to_date = request.args.get('to_date', type=str)

    if deposit_account == None:
        return ''
    if from_date == None:
        return ''
    if to_date == None:
        return ''
    response = requests.get(' http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/transactions/'
                            + deposit_account + '?from=' + from_date + '&to=' + to_date, headers = headers_dict)

    if response.status_code != 200:
        return ''
    print(response)

    details_json = response.json()
    expenditure = 0

    for transaction in details_json:
        # now song is a dictionary
        expenditure += float(transaction['amount'])
    expenditure = "{0:.2f}".format(expenditure)
    print(expenditure)

    return str(details_json)

@app.route('/balance')
def get_balance():
    deposit_account = request.args.get('account', type=str)
    #deposit_account = '79'
    month = '0'
    year = '2019'
    response = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/'
                            + deposit_account + '/balance?month=' + month + '&year=' + year, headers = headers_dict)
    if response.status_code != 200:
        return ''
    print(response)
    details_json = response.json()
    return str(details_json)

@app.route('/marketing')
def get_marketing():
    response = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/marketing', headers = headers_dict)
    mm_json = response.json()
    return str(mm_json)

@app.route('/message')
def get_marketing_message():
    #message_id = '2'
    message_id = request.args.get('msg', type=str)
    response = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/marketing/' + message_id,
                            headers = headers_dict)
    marketing_message = response.json()
    return str(marketing_message)

@app.route('/personal')
def get_personal_message():
    #customerId = '2'
    customerId = request.args.get('id', type=str)

    response = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/message/' + customerId,
                            headers = headers_dict)
    message = response.json()
    return str(message)