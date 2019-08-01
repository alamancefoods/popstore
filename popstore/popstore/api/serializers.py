from rest_framework import serializers
from api.models import Charge, Order

class ChargeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Charge
        fields = ['order_id', 'postal_code', 'email']


class OrderSerializer(serializers.ModelSerializer):
    charge = ChargeSerializer()

    class Meta:
        model = Order
        fields = [
            'charge', 'grape', 'orange', 'blue_punch', 'lemon_lime',
            'pina_colada', 'banana', 'peach', 'cherry', 'mango', 'green_apple',
            'watermelon', 'strawberry', 'guava', 'mojito', 'papaya'
                  ]

        def create(self, validated_data):
            charge_data = validated_data.pop('charge')
            order = Order.objects.create(**validated_data)
            Charge.object.create(order=order, **charge_data)
