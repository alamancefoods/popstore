from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import stripe

# Create your views here.

class Charge(APIView):

    def post(self, request, format=None):
        stripe.api_key = 'sk_test_zJXqsOns2HAr8LqrBv0SzMCD0083xQGsfr'
        token = request.data['token']
        order = request.data['order']
        profile = request.data['profile']
        print(request.data)
        return Response(status=status.HTTP_201_CREATED)
