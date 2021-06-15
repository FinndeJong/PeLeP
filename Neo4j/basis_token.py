import secrets

data1 = secrets.token_urlsafe()
data2 = secrets.token_urlsafe()


# example url:
# url = "https://mydomain.com/reset=" + secrets.token_urlsafe()

while data1 == data2:
    print(data1,data2,"equal, try again")
    data1 = secrets.token_urlsafe()
    if data1 != data2:
        print(data1,data2,"not equal")
        break

# voor testen
#while data1 != data2:
#   print(data1,data2, "not equal")
#   data1 = secrets.token_urlsafe(1)
#   if data1 == data2:
#       print(data1,data2,"equal")
#       break


# https://www.w3schools.com/python/python_while_loops.asp
# https://docs.python.org/3/library/secrets.html
# https://stackoverflow.com/questions/54000719/check-if-a-value-already-exists-within-a-list
# https://stackoverflow.com/questions/62070090/generating-a-token-for-api-authentication-with-python