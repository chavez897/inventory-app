from django.db import models


class Products(models.Model):

    name = models.CharField(
        verbose_name="Name", max_length=120, 
    )

    def __str__(self):
        return "{}".format(self.name)
