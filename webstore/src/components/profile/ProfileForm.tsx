import React from 'react';
import { Formik, FormikActions, Form, ErrorMessage, Field } from 'formik';
import { ProfileFormProps, ProfileInterface } from './types';
import { STATE_LIST } from '../../constants/constants';
import { StyledFormPaper } from '../../styles/profile/ProfileStyles';
import { ProfileEntrySchema } from './formSchemas'
import { NavLink } from 'react-router-dom';


const ProfileForm = (
  {
    setProfile,
    setProfileCompletion,
    isProfileComplete,
    profile,
    className
  } : ProfileFormProps ) => {

    const ConditionalPaymentLink = () => {
      let linkHolder = null;
      if(isProfileComplete){
       linkHolder = (
         <NavLink to="/complete-purchase">Complete Purchase</NavLink>
       )
      }else{
        linkHolder = null
      }
      return(
        linkHolder
      )
    }


    let updateProfile = (
      email: string,
      name: string,
      city: string,
      country: string,
      state: string,
      addressLineOne: string,
      addressLineTwo: string,
      postalCode: string
      ) => {
        console.log('hello');
        setProfile(prevState => {return {...prevState,
                  email: email,
                  name: name,
                  city: city,
                  country: country,
                  state: state,
                  addressLineOne: addressLineOne,
                  addressLineTwo: addressLineTwo,
                  postalCode: postalCode}
        })
        setProfileCompletion(true)
    }

    const ProfileFormEntry = () => {
      return(
        <div>
          <Formik
            initialValues={{
              email: profile.email,
              name: profile.name,
              city: profile.city,
              country: 'U.S.A.',
              state: profile.state,
              addressLineOne: profile.addressLineOne,
              addressLineTwo: profile.addressLineTwo,
              postalCode: profile.postalCode,
            }}
            validationSchema={ProfileEntrySchema}
        onSubmit={(values: ProfileInterface, actions: FormikActions<ProfileInterface>) => {
          updateProfile(
            values.email,
            values.name,
            values.city,
            values.country,
            values.state,
            values.addressLineOne,
            values.addressLineTwo,
            values.postalCode
          )
        }}
          >
            {({ errors, touched }) => (
              <Form>
                <StyledFormPaper>
                  <div>
                    <label>Name:</label>
                    <Field name="name" type="text" placeholder="Dr Archibald Pop MD" />
                    <ErrorMessage name="name" />
                  </div>
                  <div>
                    <label>Address Line One:</label>
                    <Field name="addressLineOne" type="text" placeholder="1616 Funfoods Lane"/>
                    <ErrorMessage name ="addressLineOne"/>
                  </div>
                  <div>
                    <label>Address Line Two:</label>
                    <Field name="addressLineTwo" type="text" placeholder="Room 132" />
                    <ErrorMessage name="addressLineTwo" />
                  </div>
                  <div>
                    <label>City:</label>
                    <Field name="city" type="text" placeholder="Burlington" />
                    <ErrorMessage name="city" />
                  </div>
                  <div>
                    <label>State:</label>
                    <Field component="select" name="state">
                      {STATE_LIST.map((state) =>
                        <option value={state}>{state}</option>
                      )}
                    </Field>
                  </div>
                  <div>
                    <label>Zip Code:</label>
                    <Field name="postalCode" type="string" placeholder="27515" />
                    <ErrorMessage name="postalCode" />
                  </div>
                  <div>
                    <label>Email:</label>
                    <Field name="email" type="email" placeholder="docpop@popmail.com" />
                    <ErrorMessage name="email" />
                  </div>
                </StyledFormPaper>
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      )
    }

    return(
      <div className={className}>
        <ProfileFormEntry />
        <NavLink to="/">Return To Order</NavLink>
        <ConditionalPaymentLink />
      </div>
    )

  }

export default ProfileForm;
