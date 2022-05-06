from pandas import DataFrame
from random import choices, randint, sample
from faker import Faker

faker = Faker()

# Branch Review
branch_review = DataFrame(
    data = {
        'ReviewId':list(range(1,7)),
        'BranchId':[1,2]*3,
        'Reviewer': [faker.name() for _ in range(6)], 
        'Rating': [randint(7,10) for _ in range(6)],
        'ReviewBody': choices(['Amazing Food and Service', 'Bombastic flavors', 'I love the vibe here'], k=6)
    }
)

branch_promotion = DataFrame(
    data = {
        'BranchId':[1,2]*3 + [2],
        'PromotionId':[1]*2 + [2]*2 + [3]*2 + [4],
        'ValidUntil': [faker.date_between('today','+1y') for _ in range(7)]
     }
)

branch_review.to_csv('./resources/branchReview.csv', sep=";")
branch_promotion.to_csv("./resources/branchPromotion.csv", sep=";")