import smtplib

class EmailDispatch:
    def __init__(self, order, profile):
        self.order = order
        self.profile = profile
        self.user = 'afisalesbot@gmail.com'
        self.password = 'PortoJengaCutsmart'


    def send_message(self):
        NEWLINE = '\n'
        del self.order['charge']
        order_table = '{:<15} {:<10}'.format('Flavor', 'Count')
        for key, value in self.order.items():
            if(value > 0):
                order_table += NEWLINE
                order_table += '{:>14} {:>11}'.format(key, value)
            else:
                pass


        message = """
        {name} just placed a custom pop order.

        Contact:
        {customer_email}

        Address:
        {address_line_one} {address_line_two}
        {city}, {state}
        {postal_code}

        Order:
        {order_table}
        """.format(
            name=self.profile['name'],
            customer_email=self.profile['email'],
            address_line_one=self.profile['address_line_one'],
            address_line_two=self.profile['address_line_two'],
            city=self.profile['city'],
            state=self.profile['state'],
            postal_code=self.profile['postal_code'],
            order_table=order_table
            )

        try:
            server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
            server.ehlo()
            server.login(self.user, self.password)
            server.sendmail(self.user, 'huntertempleman@gmail.com', message)
        except Exception as inst:
            print(inst)

