from rest_framework import viewsets, filters
from products.serializers import ProductsModelSerializer
from products.models import Products


class ProductsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Products.objects.all()
    serializer_class = ProductsModelSerializer
    permission_classes = []
    filter_backends = [
        filters.SearchFilter,
    ]
    # For quick search
    search_fields = [
        'name',
    ]


