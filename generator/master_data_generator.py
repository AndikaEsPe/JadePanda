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
menu_type = DataFrame(
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

# Discount
promotion = DataFrame(
    data = {
        'PromotionId': list(range(1,5)),
        'PromoName':['Special Day Celebration!', "Women's night", 'Buy one, Get one!', 'Desserts are on us!'],
        'PromoDescription':[
            '40% Discount for all items on dates where date equals month (e.g. 5th May, 10th October) with minimum payment of Rp. 200.000,00',
            '25% Discount for all women on Thursday nights',
            'Buy One, Get One for minimum payment of Rp500.000,00',
            'Free Desserts in every night on every 31th day of the month'
        ],
        'ImageURL':[
            'https://static.wixstatic.com/media/1832aa_267f0a5d991743b8bc1567e67b510f1c~mv2_d_2048_1365_s_2.jpg/v1/fill/w_1000,h_667,al_c,q_90,usm_0.66_1.00_0.01/1832aa_267f0a5d991743b8bc1567e67b510f1c~mv2_d_2048_1365_s_2.jpg',
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsimplytaralynn.com%2F2014%2F07%2F22%2Fgirls-night-chinese-food-wine%2F&psig=AOvVaw0tQw9r6UnV1xHyEfjHtonn&ust=1651898005896000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNjb6uOFyvcCFQAAAAAdAAAAABAK',
            'https://media.discordapp.net/attachments/758550072991547402/971996452681314334/Untitled_presentation.jpg',
            'https://www.hmfood.com/wp-content/uploads/%E6%B5%81%E6%B2%99%E5%8C%85.jpg'
        ]
    }
)

delivery_type = DataFrame(
    data={
        'DeliveryTypeID': [1,2],
        'DeliveryType':['Take Away', 'Delivery']
    }
)

payment_option = DataFrame(
    data = {
        'PaymentOptionId':[1,2,3],
        'PaymentOption':['Cash On Demand', 'M-Banking', 'Bank Transfer']
    }
)

# To CSV
menu_type.to_csv('./resources/menuType.csv', sep=";")
branch.to_csv('./resources/branch.csv', sep=";")
promotion.to_csv('./resources/promotion.csv', sep=";")
delivery_type.to_csv("./resources/deliveryType.csv", sep=";")
payment_option.to_csv("./resources/paymentOption.csv", sep=";")