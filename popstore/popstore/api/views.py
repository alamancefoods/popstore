from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from api.serializers import OrderSerializer
from api.email_utility import EmailDispatch
from datetime import datetime
from api.models import Order
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
            'name' : profile['name'],
            'address_line_one' : profile['address_line_one'],
            'address_line_two' : profile['address_line_two'],
            'city' : profile['city'],
            'state' : profile['state'],
            'postal_code' : profile['postal_code'],
            'email' : profile['email']
        }

        order['charge'] = charge_db_entry
        order_db_entry = order
        serializer = OrderSerializer(data=order_db_entry)
        if(serializer.is_valid()):
            serializer.save()
            email = EmailDispatch(order, profile)
            email.send_message()
        else:
            print('Booo!')

        ## Fill out the charge object more, then save the id, along with the order, to our database.

        return Response(status=status.HTTP_201_CREATED)




class OrderList(generics.ListAPIView):
    serializer_class = OrderSerializer

    def get_queryset(self):

        queryset = Order.objects.all()

        check_unfulfilled = self.request.query_params.get('checkUnfulfilled', False)
        if check_unfulfilled:
            queryset = queryset.filter(charge__fulfilled=False)


        check_disputed = self.request.query_params.get('checkDisputed', False)
        if check_disputed:
            queryset = queryset.filter(charge__disputed=True)


        check_refunded = self.request.query_params.get('checkRefunded', False)
        if check_refunded:
            queryset = queryset.filter(charge__disputed=True)


        state = self.request.query_params.get('state', None)
        if state is not None:
            queryset = queryset.filter(charge__state=state)


        city = self.request.query_params.get('city', None)
        if city is not None:
            queryset = queryset.filter(charge__city=city)


        postal_code = self.request.query_params.get('postalCode', None)
        if postal_code is not None:
            queryset = queryset.filter(charge__postal_code=postal_code)


        start_date = self.request.query_params.get('startDate', None)
        end_date = self.request.query_params.get('endDate', None)
        if start_date and end_date is not None:
            queryset = queryset.filter(charge__timestamp__range=[start_date, end_date])
        elif start_date is not None:
            end_date = datetime.today()
            queryset = queryset.filter(charge__timestamp__range=[start_date, end_date])

        return queryset


