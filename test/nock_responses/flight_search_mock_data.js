module.exports.input = {
    "tripType": 1,
    "ticketClass": 1,
    "travellerDetail":{
      "adults": 1,
      "children": 0,
      "infants": 0
    },
    "flightItineraryDetail": [
      {
        "originAirportCode": "LOS",
        "destinationAirportCode": "ABV",
        "departureDate":"28/02/2018"
      }
    ]
};

module.exports.flightSearchResponse = {
    "status": 0,
    "message": "Request processed successfully",
    "data": {
        "totalSearchResult": 8,
        "totalAirlineResult": 1,
        "passportRequired": false,
        "airlineItineraries": [
            {
                "airlineCode": "9J",
                "airlineName": "Dana Airlines Limited",
                "pricedItineraries": [
                    {
                        "sequencyNumber": 1,
                        "totalFare": 2700000,
                        "currencyCode": "NGN",
                        "ticketLimitTime": "28/02/2018 23:59",
                        "signature": "Da8mbGvYljjT2FPaWfBm1RHR1VoVSfg8q4/5Dkx8pBk6w2BFwsFD2OrAF6qzhSzJQwwgcx6Xm4hmyyZi0OoR4IX1LauunKFpUoTwp7PDKgZBobUQFUOkg0XfLtGuEqkVbNfoKetHmAHRhdFIJKQbYTIHow/mYEhEcmks90hAqYGMrl9BlWpOjw09Mq9sknV4IWVd25xoNSTIkpMYpzkrVzz/Nmog9VmgzDt3Lr7LJm5Ck5Ku0e8IJNAYRj9ek2s2lHS+ZE2HAXpmnlUYn9Q3ZLbL3K5D7EYXndkxwpVhJ1RIOeU6UOib2qSs32x5nRGJ4pqRcqArVpUpKCXwNVzt2THaqHVMaU+qe0JneFNHkp6BZThekOvjh+ZfQAXPTvblxVVdlyWZqCDZFrrIjJU0dKh5W1JtUVTU+pAGU69GE8S/02qzYHYYGWPrliUuXxTCev4sUj7/N65PAkZG0vwU9f1u/w7FBk+3fI5XD3zDE3o=",
                        "originDestinationOptions": [
                            {
                                "stops": 0,
                                "flightSegments": [
                                    {
                                        "departureTime": "28/02/2018 12:42",
                                        "arrivalTime": "28/02/2018 13:55",
                                        "departureAirportCode": "LOS",
                                        "departureAirportName": "Lagos-Murtala Muhammed Intl, Nigeria",
                                        "arrivalAirportCode": "ABV",
                                        "arrivalAirportName": "Abuja-Nnamdi Azikiwe Intl, Nigeria",
                                        "operatingAirlineCode": "9J",
                                        "airlineName": "Dana Airlines Limited",
                                        "airlineCode": "9J",
                                        "bookingClass": "W",
                                        "journeyDuration": "01:13",
                                        "flightNumber": "355",
                                        "resBookDesigCode": "W",
                                        "numberInParty": 1,
                                        "rph": "1"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "sequencyNumber": 2,
                        "totalFare": 2700000,
                        "currencyCode": "NGN",
                        "ticketLimitTime": "28/02/2018 23:59",
                        "signature": "Da8mbGvYljjT2FPaWfBm1RHR1VoVSfg8q4/5Dkx8pBk6w2BFwsFD2OrAF6qzhSzJQwwgcx6Xm4hmyyZi0OoR4IX1LauunKFpUoTwp7PDKgZBobUQFUOkg0XfLtGuEqkVbNfoKetHmAHRhdFIJKQbYRUPWR/3t/qIZr3sV/IE6LiMrl9BlWpOjw09Mq9sknV4IWVd25xoNSTIkpMYpzkrVzz/Nmog9VmgzDt3Lr7LJm5Ck5Ku0e8IJNAYRj9ek2s2lHS+ZE2HAXpmnlUYn9Q3ZLbL3K5D7EYXndkxwpVhJ1RIOeU6UOib2qSs32x5nRGJ4pqRcqArVpUpKCXwNVzt2THaqHVMaU+qe0JneFNHkp6BZThekOvjh+ZfQAXPTvblxVVdlyWZqCDZFrrIjJU0dKh5W1JtUVTU+pAGU69GE8S/02qzYHYYGWPrliUuXxTCev4sUj7/N65PAkZG0vwU9f1u/w7FBk+3fI5XD3zDE3o=",
                        "originDestinationOptions": [
                            {
                                "stops": 0,
                                "flightSegments": [
                                    {
                                        "departureTime": "28/02/2018 16:29",
                                        "arrivalTime": "28/02/2018 17:45",
                                        "departureAirportCode": "LOS",
                                        "departureAirportName": "Lagos-Murtala Muhammed Intl, Nigeria",
                                        "arrivalAirportCode": "ABV",
                                        "arrivalAirportName": "Abuja-Nnamdi Azikiwe Intl, Nigeria",
                                        "operatingAirlineCode": "9J",
                                        "airlineName": "Dana Airlines Limited",
                                        "airlineCode": "9J",
                                        "bookingClass": "W",
                                        "journeyDuration": "01:16",
                                        "flightNumber": "357",
                                        "resBookDesigCode": "W",
                                        "numberInParty": 1,
                                        "rph": "1"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "sequencyNumber": 9,
                        "totalFare": 3060000,
                        "currencyCode": "NGN",
                        "ticketLimitTime": "28/02/2018 23:59",
                        "signature": "Da8mbGvYljjT2FPaWfBm1RHR1VoVSfg8q4/5Dkx8pBk6w2BFwsFD2OrAF6qzhSzJQwwgcx6Xm4hmyyZi0OoR4IX1LauunKFpUoTwp7PDKgZBobUQFUOkg0XfLtGuEqkVbNfoKetHmAHRhdFIJKQbYYK2e0ZlDTUXX2i8yE3K5CSMrl9BlWpOjw09Mq9sknV4IWVd25xoNSTIkpMYpzkrVzz/Nmog9VmgzDt3Lr7LJm4lPXhyGqPs9/4RJkOYBANRlHS+ZE2HAXpmnlUYn9Q3ZLB5oBFlTo+zpE3eQ9e2NkZIOeU6UOib2qSs32x5nRGJ4pqRcqArVpUpKCXwNVzt2THaqHVMaU+qe0JneFNHkp6BZThekOvjh+ZfQAXPTvblxVVdlyWZqCDZFrrIjJU0dKh5W1JtUVTU+pAGU69GE8S/02qzYHYYGWPrliUuXxTCev4sUj7/N65PAkZG0vwU9f1u/w7FBk+3fI5XD3zDE3o=",
                        "originDestinationOptions": [
                            {
                                "stops": 0,
                                "flightSegments": [
                                    {
                                        "departureTime": "28/02/2018 14:40",
                                        "arrivalTime": "28/02/2018 15:55",
                                        "departureAirportCode": "LOS",
                                        "departureAirportName": "Lagos-Murtala Muhammed Intl, Nigeria",
                                        "arrivalAirportCode": "ABV",
                                        "arrivalAirportName": "Abuja-Nnamdi Azikiwe Intl, Nigeria",
                                        "operatingAirlineCode": "9J",
                                        "airlineName": "Dana Airlines Limited",
                                        "airlineCode": "9J",
                                        "bookingClass": "L",
                                        "journeyDuration": "01:15",
                                        "flightNumber": "335",
                                        "resBookDesigCode": "L",
                                        "numberInParty": 1,
                                        "rph": "1"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "sequencyNumber": 10,
                        "totalFare": 3060000,
                        "currencyCode": "NGN",
                        "ticketLimitTime": "28/02/2018 23:59",
                        "signature": "Da8mbGvYljjT2FPaWfBm1RHR1VoVSfg8q4/5Dkx8pBk6w2BFwsFD2OrAF6qzhSzJQwwgcx6Xm4hmyyZi0OoR4IX1LauunKFpUoTwp7PDKgZBobUQFUOkg0XfLtGuEqkVbNfoKetHmAHRhdFIJKQbYS5bUNtYxJEMYuiB3/FQX/FY8byFeNYlfxR39V/wgwPiUiJQp6Vl4uTH1yL8epwi73iTrfMvjY4SdofSTMjhWr9vYd0Resb7Tk0si05uAUBpjkc9bVvTeC6YedoVkKhDj7B+g+b+Ej3fgb31G8nrlpr4wcolUXa35csE7BErl3F8kYI+P4bnNCkRKDqLUakDvAts/A3YdmjYEhiuYPhi6TNGUjjWbU7Lm+ZXsLcbcPF11P00RnMeAVobNVcMF4XySeNWgHxdtpwvOvpS9G0SMVL42uL9G+SpRFCQMtEx9KvxKm62y7RHOTB6WOZAdL9ixbdQ/dDVbHg6Zp649F7+Hac=",
                        "originDestinationOptions": [
                            {
                                "stops": 0,
                                "flightSegments": [
                                    {
                                        "departureTime": "28/02/2018 06:48",
                                        "arrivalTime": "28/02/2018 08:13",
                                        "departureAirportCode": "LOS",
                                        "departureAirportName": "Lagos-Murtala Muhammed Intl, Nigeria",
                                        "arrivalAirportCode": "ABV",
                                        "arrivalAirportName": "Abuja-Nnamdi Azikiwe Intl, Nigeria",
                                        "operatingAirlineCode": "9J",
                                        "airlineName": "Dana Airlines Limited",
                                        "airlineCode": "9J",
                                        "bookingClass": "L",
                                        "journeyDuration": "01:25",
                                        "flightNumber": "351",
                                        "resBookDesigCode": "L",
                                        "numberInParty": 1,
                                        "rph": "1"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "sequencyNumber": 11,
                        "totalFare": 3060000,
                        "currencyCode": "NGN",
                        "ticketLimitTime": "28/02/2018 23:59",
                        "signature": "Da8mbGvYljjT2FPaWfBm1RHR1VoVSfg8q4/5Dkx8pBk6w2BFwsFD2OrAF6qzhSzJQwwgcx6Xm4hmyyZi0OoR4IX1LauunKFpUoTwp7PDKgZBobUQFUOkg0XfLtGuEqkVbNfoKetHmAHRhdFIJKQbYZee1l8Glfvh0ur8aZKitt1Y8byFeNYlfxR39V/wgwPiUiJQp6Vl4uTH1yL8epwi73iTrfMvjY4SdofSTMjhWr9vYd0Resb7Tk0si05uAUBpjkc9bVvTeC6YedoVkKhDj7B+g+b+Ej3fgb31G8nrlpr4wcolUXa35csE7BErl3F8kYI+P4bnNCkRKDqLUakDvAts/A3YdmjYEhiuYPhi6TNGUjjWbU7Lm+ZXsLcbcPF11P00RnMeAVobNVcMF4XySeNWgHxdtpwvOvpS9G0SMVL42uL9G+SpRFCQMtEx9KvxKm62y7RHOTB6WOZAdL9ixbdQ/dDVbHg6Zp649F7+Hac=",
                        "originDestinationOptions": [
                            {
                                "stops": 0,
                                "flightSegments": [
                                    {
                                        "departureTime": "28/02/2018 17:55",
                                        "arrivalTime": "28/02/2018 19:20",
                                        "departureAirportCode": "LOS",
                                        "departureAirportName": "Lagos-Murtala Muhammed Intl, Nigeria",
                                        "arrivalAirportCode": "ABV",
                                        "arrivalAirportName": "Abuja-Nnamdi Azikiwe Intl, Nigeria",
                                        "operatingAirlineCode": "9J",
                                        "airlineName": "Dana Airlines Limited",
                                        "airlineCode": "9J",
                                        "bookingClass": "L",
                                        "journeyDuration": "01:25",
                                        "flightNumber": "359",
                                        "resBookDesigCode": "L",
                                        "numberInParty": 1,
                                        "rph": "1"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "sequencyNumber": 38,
                        "totalFare": 6760000,
                        "currencyCode": "NGN",
                        "ticketLimitTime": "28/02/2018 23:59",
                        "signature": "Da8mbGvYljjT2FPaWfBm1RHR1VoVSfg8q4/5Dkx8pBk6w2BFwsFD2OrAF6qzhSzJQwwgcx6Xm4hmyyZi0OoR4IX1LauunKFpUoTwp7PDKgZBobUQFUOkg0XfLtGuEqkVbNfoKetHmAHRhdFIJKQbYcWUb39eCmt1heKH9tMYe1NY8byFeNYlfxR39V/wgwPiUiJQp6Vl4uTH1yL8epwi73iTrfMvjY4SdofSTMjhWr9bM4gSoORJo83iSdS0b4GKjkc9bVvTeC6YedoVkKhDj1+L7IGzMNcFqwtxDX2w1AL4wcolUXa35csE7BErl3F8kYI+P4bnNCkRKDqLUakDvAts/A3YdmjYEhiuYPhi6TNGUjjWbU7Lm+ZXsLcbcPF11P00RnMeAVobNVcMF4XySeNWgHxdtpwvOvpS9G0SMVL42uL9G+SpRFCQMtEx9KvxKm62y7RHOTB6WOZAdL9ixbdQ/dDVbHg6Zp649F7+Hac=",
                        "originDestinationOptions": [
                            {
                                "stops": 1,
                                "flightSegments": [
                                    {
                                        "departureTime": "28/02/2018 07:02",
                                        "arrivalTime": "28/02/2018 08:10",
                                        "departureAirportCode": "LOS",
                                        "departureAirportName": "Lagos-Murtala Muhammed Intl, Nigeria",
                                        "arrivalAirportCode": "PHC",
                                        "arrivalAirportName": "Port Harcourt-Port Harcourt Intl, Nigeria",
                                        "operatingAirlineCode": "9J",
                                        "airlineName": "Dana Airlines Limited",
                                        "airlineCode": "9J",
                                        "bookingClass": "L",
                                        "journeyDuration": "01:08",
                                        "flightNumber": "341",
                                        "resBookDesigCode": "L",
                                        "numberInParty": 1,
                                        "rph": "1"
                                    },
                                    {
                                        "departureTime": "28/02/2018 08:55",
                                        "arrivalTime": "28/02/2018 10:05",
                                        "departureAirportCode": "PHC",
                                        "departureAirportName": "Port Harcourt-Port Harcourt Intl, Nigeria",
                                        "arrivalAirportCode": "ABV",
                                        "arrivalAirportName": "Abuja-Nnamdi Azikiwe Intl, Nigeria",
                                        "operatingAirlineCode": "9J",
                                        "airlineName": "Dana Airlines Limited",
                                        "airlineCode": "9J",
                                        "bookingClass": "W",
                                        "journeyDuration": "01:10",
                                        "flightNumber": "364",
                                        "resBookDesigCode": "W",
                                        "numberInParty": 1,
                                        "rph": "1"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "sequencyNumber": 39,
                        "totalFare": 6760000,
                        "currencyCode": "NGN",
                        "ticketLimitTime": "28/02/2018 23:59",
                        "signature": "Da8mbGvYljjT2FPaWfBm1RHR1VoVSfg8q4/5Dkx8pBk6w2BFwsFD2OrAF6qzhSzJQwwgcx6Xm4hmyyZi0OoR4IX1LauunKFpUoTwp7PDKgZBobUQFUOkg0XfLtGuEqkVbNfoKetHmAHRhdFIJKQbYe1mQq0Eqr3IdTnDz1rxUh1Y8byFeNYlfxR39V/wgwPiUiJQp6Vl4uTH1yL8epwi73iTrfMvjY4SdofSTMjhWr9bM4gSoORJo83iSdS0b4GKjkc9bVvTeC6YedoVkKhDj1+L7IGzMNcFqwtxDX2w1AL4wcolUXa35csE7BErl3F8kYI+P4bnNCkRKDqLUakDvAts/A3YdmjYEhiuYPhi6TNGUjjWbU7Lm+ZXsLcbcPF11P00RnMeAVobNVcMF4XySeNWgHxdtpwvOvpS9G0SMVL42uL9G+SpRFCQMtEx9KvxKm62y7RHOTB6WOZAdL9ixbdQ/dDVbHg6Zp649F7+Hac=",
                        "originDestinationOptions": [
                            {
                                "stops": 1,
                                "flightSegments": [
                                    {
                                        "departureTime": "28/02/2018 11:07",
                                        "arrivalTime": "28/02/2018 12:20",
                                        "departureAirportCode": "LOS",
                                        "departureAirportName": "Lagos-Murtala Muhammed Intl, Nigeria",
                                        "arrivalAirportCode": "PHC",
                                        "arrivalAirportName": "Port Harcourt-Port Harcourt Intl, Nigeria",
                                        "operatingAirlineCode": "9J",
                                        "airlineName": "Dana Airlines Limited",
                                        "airlineCode": "9J",
                                        "bookingClass": "L",
                                        "journeyDuration": "01:13",
                                        "flightNumber": "343",
                                        "resBookDesigCode": "L",
                                        "numberInParty": 1,
                                        "rph": "1"
                                    },
                                    {
                                        "departureTime": "01/03/2018 08:55",
                                        "arrivalTime": "01/03/2018 10:05",
                                        "departureAirportCode": "PHC",
                                        "departureAirportName": "Port Harcourt-Port Harcourt Intl, Nigeria",
                                        "arrivalAirportCode": "ABV",
                                        "arrivalAirportName": "Abuja-Nnamdi Azikiwe Intl, Nigeria",
                                        "operatingAirlineCode": "9J",
                                        "airlineName": "Dana Airlines Limited",
                                        "airlineCode": "9J",
                                        "bookingClass": "W",
                                        "journeyDuration": "01:10",
                                        "flightNumber": "364",
                                        "resBookDesigCode": "W",
                                        "numberInParty": 1,
                                        "rph": "1"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "sequencyNumber": 40,
                        "totalFare": 7770000,
                        "currencyCode": "NGN",
                        "ticketLimitTime": "28/02/2018 23:59",
                        "signature": "Da8mbGvYljjT2FPaWfBm1RHR1VoVSfg8q4/5Dkx8pBk6w2BFwsFD2OrAF6qzhSzJQwwgcx6Xm4hmyyZi0OoR4IX1LauunKFpUoTwp7PDKgZBobUQFUOkg0XfLtGuEqkVbNfoKetHmAHRhdFIJKQbYU42QJ8ep+GexmLE8ope07NY8byFeNYlfxR39V/wgwPiUiJQp6Vl4uTH1yL8epwi73iTrfMvjY4SdofSTMjhWr+922qU/IyGT8yFN3M8uoxfjkc9bVvTeC6YedoVkKhDjw2Jvr/J8hdihjhnByw4ZeX4wcolUXa35csE7BErl3F8kYI+P4bnNCkRKDqLUakDvAts/A3YdmjYEhiuYPhi6TNGUjjWbU7Lm+ZXsLcbcPF11P00RnMeAVobNVcMF4XySeNWgHxdtpwvOvpS9G0SMVL42uL9G+SpRFCQMtEx9KvxKm62y7RHOTB6WOZAdL9ixbdQ/dDVbHg6Zp649F7+Hac=",
                        "originDestinationOptions": [
                            {
                                "stops": 1,
                                "flightSegments": [
                                    {
                                        "departureTime": "28/02/2018 10:53",
                                        "arrivalTime": "28/02/2018 12:03",
                                        "departureAirportCode": "LOS",
                                        "departureAirportName": "Lagos-Murtala Muhammed Intl, Nigeria",
                                        "arrivalAirportCode": "QUO",
                                        "arrivalAirportName": "Uyo-Akwa Ibom Intl, Nigeria",
                                        "operatingAirlineCode": "9J",
                                        "airlineName": "Dana Airlines Limited",
                                        "airlineCode": "9J",
                                        "bookingClass": "Y",
                                        "journeyDuration": "01:10",
                                        "flightNumber": "333",
                                        "resBookDesigCode": "Y",
                                        "numberInParty": 1,
                                        "rph": "1"
                                    },
                                    {
                                        "departureTime": "28/02/2018 12:33",
                                        "arrivalTime": "28/02/2018 13:45",
                                        "departureAirportCode": "QUO",
                                        "departureAirportName": "Uyo-Akwa Ibom Intl, Nigeria",
                                        "arrivalAirportCode": "ABV",
                                        "arrivalAirportName": "Abuja-Nnamdi Azikiwe Intl, Nigeria",
                                        "operatingAirlineCode": "9J",
                                        "airlineName": "Dana Airlines Limited",
                                        "airlineCode": "9J",
                                        "bookingClass": "W",
                                        "journeyDuration": "01:12",
                                        "flightNumber": "362",
                                        "resBookDesigCode": "W",
                                        "numberInParty": 1,
                                        "rph": "1"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}