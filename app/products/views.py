from rest_framework import viewsets
from products.serializers import ProductsModelSerializer
from products.models import Products


class ProductsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Products.objects.all()
    serializer_class = ProductsModelSerializer
    permission_classes = []


