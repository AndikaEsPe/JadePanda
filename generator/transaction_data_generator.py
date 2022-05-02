from pandas import DataFrame
from random import choices, randint, sample

# Branch Review
branchReview = DataFrame(
    data = {
        'BranchId':[1,2]*3,
        'CustomerId':[randint(1,20) for _ in range(6)],
        'Rating': [randint(5,10) for _ in range(6)],
        'ReviewBody': choices([None, 'Amazing Food and Service', 'Bombastic flavors', 'I love the vibe here'], k=6)
    }
)

# Transaction Header
transactionHeader = DataFrame(
    data = {
        'TransactionId':list(range(1,4)),
        'CustomerId':list(range(5,16,5)),
        'DiscountId': choices([None] + list(range(1,5)), k=3)
    }
)

# Transaction Detail
transactionDetail = DataFrame(
    data = {
        'TransactionId': [1,2]*3,
        'MenuId': sample(range(1,38), k=6),
        'Quantity':[randint(1,5) for _ in range(6)],
        'ExtraRequest':[None]*6
    }
)

branchReview.to_csv('./resources/branchReview.csv')
transactionHeader.to_csv('./resources/transactionHeader.csv')
transactionDetail.to_csv('./resources/transactionDetail.csv')