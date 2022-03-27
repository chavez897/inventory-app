from django.db import models


class Products(models.Model):

    name = models.CharField(
        verbose_name="Name", 
        max_length=120, 
        blank=False, 
        null=False
    )
    description = models.CharField(
        verbose_name="Description", 
        max_length=500, 
        blank=False, 
        null=False,
        default=""
    )
    quantity = models.IntegerField(
        blank=False,
        null=False,
        default=1
    )
    price = models.FloatField(
        blank=False,
        null=False,
        default=10.0
    )
    def __str__(self):
        return "{}".format(self.name)
