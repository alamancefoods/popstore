import * as Yup from 'yup';

const zip =  /(^\d{5}$)|(^\d{5}-\d{4}$)/

export const ProfileEntrySchema = Yup.object().shape({
  name: Yup.string()
           .max(255, "What a long name you have! Could you provide a shorter nickname?")
           .required('Required'),
  email: Yup.string()
            .email('Please enter a valid email address.')
            .required('Required'),
  city: Yup.string()
           .max(75, "That's an awfully long city name!")
           .min(2, "Is there really a city with a one letter name?")
           .required('Required'),
  country: Yup.string(),
  state: Yup.string()
            .max(2)
            .required('Required'),
  addressLineOne: Yup.string()
                     .required('Required'),
  addressLineTwo: Yup.string(),
  postalCode: Yup.string()
                 .matches(zip, 'Please enter a valid Zip Code.')
                 .required('Required')
})
