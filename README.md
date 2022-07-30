# gses2-btc-application

*an app to check BTC exchange rate to UAH and to subscribe emails to receive letters with updates on said rate*

## Docker

### build the image
> docker build . -t 4ikkamony/btc_app
### run it
> docker run -p 8080:8080 -d 4ikkamony/btc_app

[Image at DockerHub](https://hub.docker.com/repository/docker/4ikkamony/btc_app)

Swagger-UI will be availble at [http://localhost:8080/docs/](http://localhost:8080/docs/)

## Exchange Rate API
[BitPay](https://bitpay.com/api/rates)

## Some info on app
* Exchange Rate API: [BitPay](https://bitpay.com/api/rates)
* E-mails are send via nodemailer
* Subscribed e-mails are stored in data/emails.json

# Stay safe
![Ahah](https://github.com/4ikkamony/lab2/blob/main/unnamed1.png)
