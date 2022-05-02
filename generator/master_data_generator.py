from faker import Faker
from pandas import DataFrame, read_csv
from random import randint

# Create generator
faker = Faker()

# Utility Function
def generate_phone():
    phone = '08'
    phone_length = randint(8,10) 
    for _ in range(phone_length):
        phone+=str(randint(0,9))
    return phone

# Menu Type
menuType = DataFrame(
    data = {
        'MenuTypeId': [1, 2, 3, 4],
        'TypeName':['Appetizer', 'Main Course', 'Dessert', 'Beverage']
    }
)

# Branch
branch = DataFrame(
    data = {
        'BranchId':[1,2],
        'Address':[faker.street_address() + ', ' + faker.city() + ', ' + faker.country() for _ in range(2)],
        'ImageURL':[
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbmVzZSUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8',
            'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpbmVzZSUyMHJlc3RhdXJhbnR8ZW58MHwwfDB8fA%3D%3D'
        ],
        'OpenHour':['10.00']*2,
        'CloseHour': ['22.00']*2,
        'Phone': [generate_phone() for _ in range(2)]
    }
)

# Customer
customer_names = [faker.name() for _ in range(20)]
customer = DataFrame(
    data = {
        'CustomerId': list(range(1,21)),
        'FullName': customer_names,
        'Email': [name.split()[0].lower() +str(randint(100,999)) + '@gmail.com' for name in customer_names],
        'Password':[name.split()[0].lower() for name in customer_names],
        'DOB':[faker.date_of_birth(minimum_age=12) for _ in range(20)],
        'Phone': [generate_phone() for _ in range(20)]
    }
)

# Discount
discount = DataFrame(
    data = {
        'DiscountId': list(range(1,5)),
        'PromoName':['15% Discount', '30% Discount', '50% Discount', '70% Discount'],
        'Percentage':[15, 30, 50, 70],
        'ValidityPeriod':[30]*4
    }
)

# To CSV
menuType.to_csv('./resources/menuType.csv')
branch.to_csv('./resources/branch.csv')
customer.to_csv('./resources/customer.csv')
discount.to_csv('./resources/discount.csv')