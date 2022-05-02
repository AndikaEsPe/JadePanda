from bs4 import BeautifulSoup
from pandas import DataFrame
from random import randint
from requests import get

# Initialize temporary dataframe
menu = []

# Get list of labels
webpage = get('https://chinacuisine.blogspot.com/')
soup = BeautifulSoup(webpage.text, 'html.parser')
labels = soup.select('div.widget-content ul li a')[:-4]
food_links = [label['href'] for label in labels]

# Scrape each page
for food_link in food_links:
    page = get(food_link)
    soup = BeautifulSoup(page.text, 'html.parser')
    foods = soup.select('.post-outer .post')
    for food in foods:
        food_name = food.select_one('.post-title').get_text().strip()
        image_link = food.select_one('.post-body a img')['src']
        food_description = food.select_one('.post-body').get_text().split('.')[0].strip()
        food_price = randint(1, 100)*1000
        menu.append({
            'DishName': food_name,
            'Description': food_description,
            'Price': food_price,
            'ImageURL': image_link
        })

food_df = DataFrame(menu).drop_duplicates(subset=['DishName']).reset_index(drop=True)
food_df.to_csv('./resources/menu.csv')