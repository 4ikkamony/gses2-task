# gses2-btc-application

##Docker

'''
###build the image
docker build . -t 4ikkamony/btc_app
###run it
docker run -p 8080:8080 -d 4ikkamony/btc_app
'''
an app to check BTC exchange rate to UAH and to subscribe emails to receive letters with update on said rate

First of all, I need to get an exchange rate from a public API. I'll use https://bitpay.com/api/rates. That's easy, simply parse it and get the desired rate. What I have yet to do is to return the retrieved value properly(I need to learn more about Promises and NodeJS in general, as I`ve never used it before)
