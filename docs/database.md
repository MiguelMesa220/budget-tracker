# User
- id
- email
- password

# Transactions
- id
- user_id
- category id
- description
- amount
- type
- date


# category
- id
- name

# relationships
- A user can have several transactions
- A given transaction belongs to a specific user
- S category has many transactions
