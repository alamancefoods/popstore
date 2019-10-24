import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile, updateProfileComplete } from '../../redux/profile/actions';
import { Formik, FormikActions, Form, ErrorMessage, Field } from 'formik';
import { STATE_LIST, CHECKOUT, CHECKOUT_ROUTE, ORDER, ORDER_ROUTE } from '../../constants/constants';
import { ProfileInterface } from './types';
import {
  StyledProfileForm,
  StyledFieldContainer,
  SubmitButton
} from '../../styles/profile/ProfileStyles';
import { ProfileEntrySchema } from './formSchemas';
import { NavLink } from 'react-router-dom';
import { ConditionalLink } from '../main/Navigation';



const ProfileForm = ({ className }: { className?: string }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profileReducer.profile);
  const isProfileComplete = useSelector((state: any) => state.profileCompletionReducer.isComplete);




  const ProfileFormEntry = ({ className }: { className?: string }) => {
    return (
      <Formik
        initialValues={{
          email: profile.email,
          name: profile.name,
          city: profile.city,
          country: profile.country,
          state: profile.state,
          addressLineOne: profile.addressLineOne,
          addressLineTwo: profile.addressLineTwo,
          postalCode: profile.postalCode,
        }}
        validationSchema={ProfileEntrySchema}
        onSubmit={(values: ProfileInterface, actions: FormikActions<ProfileInterface>) => {
          dispatch(
            updateProfile(
              values.email,
              values.name,
              values.city,
              values.country,
              values.state,
              values.addressLineOne,
              values.addressLineTwo,
              values.postalCode
            ));
          dispatch(
            updateProfileComplete(true)
          );
        }}
      >
        {({ errors, touched }) => (
          <StyledProfileForm>

            <StyledFieldContainer>
              <div>
                <label>Name:</label>
                <Field name="name" type="text" placeholder="Dr Archibald Pop MD" />
                <ErrorMessage name="name" />
              </div>
              <div>
                <label>Address Line One:</label>
                <Field name="addressLineOne" type="text" placeholder="1616 Funfoods Lane" />
                <ErrorMessage name="addressLineOne" />
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
            </StyledFieldContainer>

            <SubmitButton type="submit">Submit</SubmitButton>

            <ConditionalLink location={ORDER} route={ORDER_ROUTE} />

            {isProfileComplete ?
              <ConditionalLink location={CHECKOUT} route={CHECKOUT_ROUTE} /> :
              null
            }
          </StyledProfileForm>
        )}
      </Formik>
    );
  };

  return (
    <ProfileFormEntry />
  );
};

export default ProfileForm;
