from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.serializers import OrderSerializer
import stripe

# Create your views here.

class Charge(APIView):

    def post(self, request, format=None):
        stripe.api_key = 'sk_test_zJXqsOns2HAr8LqrBv0SzMCD0083xQGsfr'
        order = request.data['order']
        profile = request.data['profile']
        token = request.data['token']


        charge = stripe.Charge.create(
            amount=order['balance'],
            currency='usd',
            description='Example charge',
            source=token['id'],
            shipping={
                'address' : {
                    'city' : profile['city'],
                    'country' : 'US',
                    'line1' : profile['address_line_one'],
                    'line2' : profile['address_line_two'],
                    'postal_code' : profile['postal_code']
                },
                'name' : profile['name']
                },
            receipt_email= profile['email'],
            metadata=order
            )


        del order['balance']
        del order['total_count']
        charge_db_entry = {
            'order_id' : charge['id'],
            'postal_code' : profile['postal_code'],
            'email' : profile['email']
        }

        order['charge'] = charge_db_entry
        order_db_entry = order
        serializer = OrderSerializer(data=order_db_entry)
        if(serializer.is_valid()):
            serializer.save()
        else:
            print('Booo!')

        print(charge['id'])
        print(order_db_entry)


        ## Fill out the charge object more, then save the id, along with the order, to our database.

        return Response(status=status.HTTP_201_CREATED)


