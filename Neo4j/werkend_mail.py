import smtplib

gmail_user = "casperweijtmans@gmail.com"
gmail_password = "Kr4ken0ce4n!"

sent_from = gmail_user
to = ["casper.weijtmans@student.hu.nl"]
subject = 'Aanvraag reactie Pelep'
body = "Dit is een Test\n\nHet Pelep Team"

email_text = """\
From: %s
To: %s
Subject: %s

%s
""" % (sent_from, to, subject, body)

try:
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(gmail_user, gmail_password)
    server.sendmail(gmail_user, to, email_text)
    server.close()

    print ("Email sent!")
except:
    print ("Something went wrong.")