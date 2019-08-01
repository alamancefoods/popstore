import smtplib

class EmailDispatch:
    def __init__(self, order, profile):
        self.order = order
        self.profile = profile


    def send_message(self):
