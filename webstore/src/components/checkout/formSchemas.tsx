import * as Yup from 'yup';

const zip =  /(^\d{5}$)|(^\d{5}-\d{4}$)/

export const CheckoutEntrySchema = Yup.object().shape({
  email: Yup.string()
            .email('Please enter a valid email address.'),
  city: Yup.string()
           .max(75, "That's an awfully long city name!")
           .min(1, "Is there really a city with a one letter name?"),
  country: Yup.string(),
  state: Yup.string()
            .max(2),
  addressLineOne: Yup.string(),
  addressLineTwo: Yup.string(),
  postalCode: Yup.string()
                 .matches(zip, 'Please enter a valid Zip Code.')
})
