# viral_techAssignment
Following are the details of the assessment:
You are supposed to fetch data from https://randomuser.me/api/
Create a database schema as follows


1).Person
person_id - primary key (auto generate)
uuid - varchar (use login.uuid)
first_name - varchar (use name.first)
last_name - varchar (use name.last)
dob - datetime (use dob.date)

2).Address
address_id - primary key
person_id - references to Person.person_id
street_number - varchar (use street.name)
city - varchar (use street.city)

3).Phone
phone_id - primary key
person_id - references to Person.person_id
phone_no - varchar (use phone and cell, so basically around 2 entries for every person)

4).Email
email_id - primary key
person_id - references to Person.person_id
email - varchar (use email)


Your task is to populate 100 Persons from the API.
You can ignore all the rest of the fields. Just populate the above 4 tables.
If at all the API gives the same user details again, find-or-create it on the basis of the Person.uuid parameter.
Write the code for this in NodeJs, MongoDB/Sequelize/MySQL/PostgreSQL/SQL Server
No need for APIs, just use any http-call like request-promise, axios, etc for calling the random user API.

