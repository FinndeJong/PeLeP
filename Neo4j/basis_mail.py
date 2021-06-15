import smtplib

gmail_user = "personal.learning.pulse@gmail.com"
gmail_password = "up4BCcZJ"

sent_from = gmail_user
to = ["casper.weijtmans@student.hu.nl"]
subject = "Aanvraag reactie Pelep"
body = "Dit is een Test\n\nHet Pelep Team"

email_text = """\
From: %s
To: %s
Subject: %s

%s
""" % (sent_from, to, subject, body)

try:
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()
    server.login(gmail_user, gmail_password)
    server.sendmail(gmail_user, to, email_text)
    server.close()

    print ("Email sent!")
except:
    print ("Something went wrong.")

# https://stackabuse.com/how-to-send-emails-with-gmail-using-python/
# https://mailtrap.io/blog/starttls-ssl-tls/
# (waarom tls ipv ssl) because it is newer
# https://www.youtube.com/watch?v=Y_tnWTjTfzY
# https://stackoverflow.com/questions/53535150/populate-other-email-fields-like-subject-in-python-mail-function
# https://stackoverflow.com/questions/59158283/as-string-method-return-an-attributeerror