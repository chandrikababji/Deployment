Python 3.10.11 (tags/v3.10.11:7d4cc5a, Apr  5 2023, 00:38:17) [MSC v.1929 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> def purchase_product(product_type,price,mobile_brand,material):
...     if product_type == "Mobile":
...         if mobile_brand == "Apple":
...             discount = 10
...         else:
...             discount = 5
...         total_price = price - price * discount / 100
...     else:
...         if material == "leather":
...             tax = 5
...         else:
...             tax = 2
...         total_price = price + price * tax / 100
...     print("Total price of "+product_type+" is "+str(total_price))
... 
... purchase_product("Mobile",20000,"Apple",None)
... purchase_product("Shoe",200,None,"leather")
