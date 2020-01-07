from app import app
import requests
from flask import render_template
import json

@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Miguel'}
    return render_template('index.html', title='Home', user=user)

@app.route('/id')
def get_id():
    headers_dict = {'identity' : 'T58', 'token': '57861dcd-3ed9-4647-9cb1-fbeac1d10e47'}
    userName = 'marytan'
    response = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/customers/'
                            + userName, headers = headers_dict)
    print(response)
    id_json = response.json()
    customerId = id_json['customerId']
    return str(id_json)

@app.route('/details')
def get_details():
    headers_dict = {'identity' : 'T58', 'token': '57861dcd-3ed9-4647-9cb1-fbeac1d10e47'}
    customerId = '2'
    response = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/customers/'
                            + customerId + '/details', headers = headers_dict)
    print(response)
    details_json = response.json()
    return str(details_json)

@app.route('/deposit_accounts')
def get_deposit_accounts():
    headers_dict = {'identity' : 'T58', 'token': '57861dcd-3ed9-4647-9cb1-fbeac1d10e47'}
    customerId = '2'
    response = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/'
                            + customerId, headers = headers_dict)
    print(response)
    details_json = response.json()
    return str(details_json)

@app.route('/transactions')
def get_transactions():
    headers_dict = {'identity' : 'T58', 'token': '57861dcd-3ed9-4647-9cb1-fbeac1d10e47'}
    deposit_account = '79'
    from_date = '01-01-2018'
    to_date = '01-30-2020'
    response = requests.get(' http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/transactions/'
                            + deposit_account + '?from=' + from_date + '&to=' + to_date, headers = headers_dict)
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
    headers_dict = {'identity' : 'T58', 'token': '57861dcd-3ed9-4647-9cb1-fbeac1d10e47'}
    deposit_account = '79'
    month = '0'
    year = '2019'
    response = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/'
                            + deposit_account + '/balance?month=' + month + '&year=' + year, headers = headers_dict)
    print(response)
    details_json = response.json()
    return str(details_json)

@app.route('/marketing')
def get_marketing():
    headers_dict = {'identity' : 'T58', 'token': '57861dcd-3ed9-4647-9cb1-fbeac1d10e47'}
    response = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/marketing', headers = headers_dict)
    mm_json = response.json()
    return str(mm_json)

@app.route('/message')
def get_marketing_message():
    headers_dict = {'identity' : 'T58', 'token': '57861dcd-3ed9-4647-9cb1-fbeac1d10e47'}
    message_id = '2'
    response = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/marketing/' + message_id,
                            headers = headers_dict)
    marketing_message = response.json()
    return str(marketing_message)

@app.route('/personal')
def get_personal_message():
    headers_dict = {'identity' : 'T58', 'token': '57861dcd-3ed9-4647-9cb1-fbeac1d10e47'}
    customerId = '2'
    response = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/message/' + customerId,
                            headers = headers_dict)
    message = response.json()
    return str(message)