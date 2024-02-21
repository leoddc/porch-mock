# Mock Endpoint

This is a mock endpoint which responds with a list of `n` fake addresses in the form:

```json
[
{
    "firstName":"Dixie",
    "lastName":"Huels",
    "donatingFood":true,
    "donatingMoney":true,
    "location":
        {
            "lat":47.6914,
            "lon":175.4313
        }
}
...
]
```

To use the endpoint:
1. clone this repository
1. run npm install to install dependencies
1. specify the number of donors you want to get using the `numberOfFakes` const
1. specify the error rate (.0 for no errors, 1.1 for error every time, .5 for 50/50, etc) using `errorChance` const
1. run `npm start` to run the API locally
1. Make requests to `http://localhost:3000/donor-list`