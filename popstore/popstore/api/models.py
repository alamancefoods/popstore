from django.db import models
import pycountry
import re

# Create your models here.

country_object_list = list(pycountry.countries)
country_choices = []

for country in country_object_list:
    try:
        t = country.alpha_2, country.common_name
        country_choices.append(t)
    except:
        t = country.alpha_2, country.name
        country_choices.append(t)

def subdivision_choice_list(country):
    subdivision_choice_list = []
    for choice in country_choices:
        if(choice[1] == country):
            country_code = choice[1]
    raw_subdivision_list = list(pycountry.subdivisions.get(country_code = country_code))
    for subdivision in raw_subdivision_list:
        t = subdivision.code[3:], subdivision.name
        subdivision_choice_list.append(t)
    return subdivision_choice_list


class Customer(models.Model):
    email = models.EmailField(unique= True)
    first_name = models.CharField(max_length=20, blank= True)
    last_name = models.CharField(max_length=20, blank= True)
    country = models.CharField(max_length=2, default='US', choices= country_choices)
    address = models.TextField(max_length=140)
    zip_code = models.IntegerField()

    def save(self):
        subdivision_choice_list = subdivision_choice_list(self.country)
        subdivision = models.CharField(max_length=2, default='', choices= subdivision_choice_list)
        super().save()



class PopOrder(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT)
    grape_count = models.IntegerField(default= 0)
    orange_count = models.IntegerField(default= 0)
    blue_punch_count = models.IntegerField(default = 0)
    lemon_lime_count = models.IntegerField(default = 0)
    pina_colada_count = models.IntegerField(default = 0)
    banana_count = models.IntegerField(default = 0)
    peach_count = models.IntegerField(default = 0)
    cherry_count = models.IntegerField(default = 0)
    mango_count = models.IntegerField(default = 0)
    green_apple_count = models.IntegerField(default = 0)
    watermelon_count = models.IntegerField(default = 0)
    strawberry_count = models.IntegerField(default = 0)
    guava_count = models.IntegerField(default = 0)
    mojito_count = models.IntegerField(default = 0)
    papaya_count = models.IntegerField(default = 0)
    blue_raspberry_count = models.IntegerField(default = 0)
