from django.contrib import admin

from products.models import Products


@admin.register(Products)
class ProductsModelAdmin(admin.ModelAdmin):
    list_display = ("id", "name",)
    list_display_links = ("id", )