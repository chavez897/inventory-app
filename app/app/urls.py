from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from products import views

router = routers.DefaultRouter()
router.register('products', views.ProductsViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
