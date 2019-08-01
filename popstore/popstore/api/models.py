from django.db import models
import pycountry
import re

# Create your models here.

class Charge(models.Model):
    order_id = models.CharField(max_length = 255)
    postal_code = models.CharField(max_length = 5)
    email = models.EmailField()

class Order(models.Model):
    charge = models.ForeignKey(Charge, on_delete=models.CASCADE)
    grape = models.IntegerField(default= 0)
    orange = models.IntegerField(default= 0)
    blue_punch = models.IntegerField(default = 0)
    lemon_lime = models.IntegerField(default = 0)
    pina_colada = models.IntegerField(default = 0)
    banana = models.IntegerField(default = 0)
    peach = models.IntegerField(default = 0)
    cherry = models.IntegerField(default = 0)
    mango = models.IntegerField(default = 0)
    green_apple = models.IntegerField(default = 0)
    watermelon = models.IntegerField(default = 0)
    strawberry = models.IntegerField(default = 0)
    guava = models.IntegerField(default = 0)
    mojito = models.IntegerField(default = 0)
    papaya = models.IntegerField(default = 0)





