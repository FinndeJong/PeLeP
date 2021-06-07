import smtplib

# gmail_user = "personal.learning.pulse@gmail.com"
# gmail_password = "up4BCcZJ"

# sent_from = gmail_user
# to = ["lieke.crum@gmail.com"]
# subject = 'Aanvraag reactie Pelep'
# body = "Dit is een Test\n\nHet Pelep Team"

# gmail_user = "personal.learning.pulse@gmail.com"
# gmail_password = "up4BCcZJ"

# to = ["lieke.crum@gmail.com"]
# subject = "Aanvraag reactie Pelep"
# body = "Het Pelep Team"

def send_email(subject, body):

    try:
        server = smtplib.SMTP('smtp.gmail.com, port=587')
        server.ehlo()
        server.starttls()
        server.login("personal.learning.pulse@gmail.com", "up4BCcZJ")
        message = f'Subject: {"this is my subject"}\n\n{"this is the body"}'
        server.sendmail("personal.learning.pulse@gmail.com", "lieke.crum@gmail.com", message)
        server.quit()
        print ("Email sent!")
    except:
        print ("Something went wrong. :(")
        pass
        


# email_text = """\
# From: %s
# To: %s
# Subject: %s
# %s
# """ % (sent_from, to, subject, body)

# try:
#     server = smtplib.SMTP('smtp.gmail.com', 587)
#     server.starttls()
#     server.login(gmail_user, gmail_password)
#     server.sendmail(gmail_user, to, email_text)
#     server.close()

#     print ("Email sent!")
# except:
#     print ("Something went wrong.")