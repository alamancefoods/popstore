import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { updateProfile, updateProfileComplete } from '../../redux/profile/actions';
import { Formik, FormikActions, ErrorMessage, Field } from 'formik';
import { STATE_LIST, CHECKOUT, PROFILE, CHECKOUT_ROUTE, ORDER, ORDER_ROUTE } from '../../constants/constants';
import { MenuPanelSpring } from '../../springs/MenuPanelSpring';
import { ProfileInterface } from './types';
import {
  SubmitButton,
  ButtonContainer,
  StyledPanel
} from '../../styles/root/RootStyles';

import {
  StyledProfileForm,
  StyledFieldContainer,
  FormPlacement,
  InputSection,
  StyledField,
  StyledDropdown,
  Label,
  StyledOrderNav
} from '../../styles/profile/ProfileStyles';
import { ProfileEntrySchema } from './formSchemas';
import { ConditionalLink } from '../main/Navigation';



const ProfileForm = ({ className }: { className?: string }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const profile = useSelector((state: any) => state.profileReducer.profile);
  const isProfileComplete = useSelector((state: any) => state.profileCompletionReducer.isComplete);
  const display = useSelector((state: any) => state.displayReducer.display);
  const panelSpring = MenuPanelSpring();




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
          setTimeout(() => (history.push(CHECKOUT_ROUTE), 1000));
        }}
      >
        {({ errors, touched }) => (
          <StyledProfileForm>

            <StyledFieldContainer>
              <FormPlacement>
                <InputSection>
                  <Label>Name:</Label>
                  <StyledField name="name" type="text" placeholder="Dr Archibald Pop MD" />
                  <ErrorMessage name="name" />
                </InputSection>
                <InputSection>
                  <Label>Address Line One:</Label>
                  <StyledField name="addressLineOne" type="text" placeholder="1616 Funfoods Lane" />
                  <ErrorMessage name="addressLineOne" />
                </InputSection>
                <InputSection>
                  <Label>Address Line Two:</Label>
                  <StyledField name="addressLineTwo" type="text" placeholder="Room 132" />
                  <ErrorMessage name="addressLineTwo" />
                </InputSection>
                <InputSection>
                  <Label>City:</Label>
                  <StyledField name="city" type="text" placeholder="Burlington" />
                  <ErrorMessage name="city" />
                </InputSection>
                <InputSection>
                  <Label>State:</Label>
                  <StyledDropdown component="select" name="state">
                    {STATE_LIST.map((state) => <option
                      value={state}
                      key={state}
                    > {state}
                    </option>
                    )}
                  </StyledDropdown>
                </InputSection>
                <InputSection>
                  <Label>Zip Code:</Label>
                  <StyledField name="postalCode" type="string" placeholder="27515" />
                  <ErrorMessage name="postalCode" />
                </InputSection>
                <InputSection>
                  <Label>Email:</Label>
                  <StyledField name="email" type="email" placeholder="docpop@popmail.com" />
                  <ErrorMessage name="email" />
                </InputSection>
              </FormPlacement>
            </StyledFieldContainer>


            <ButtonContainer>
              <SubmitButton errors={Object.entries(errors).length} type="submit">Submit</SubmitButton>
              <StyledPanel panelSpring={panelSpring} />
            </ButtonContainer>


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
