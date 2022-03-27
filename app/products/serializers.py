from rest_framework import serializers

from products.models import Products

class ProductsModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = [
            "id",
            "name",
            "description",
            "quantity",
            "price"
        ]