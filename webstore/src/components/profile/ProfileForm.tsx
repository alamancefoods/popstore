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
  ErrBox,
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
          history.push(CHECKOUT_ROUTE)
        }}
      >
        {({ errors, touched }) => (
          <StyledProfileForm>

            <StyledFieldContainer>
              <FormPlacement>
                <InputSection>
                  <Label>Name:</Label>
                  <StyledField errors={errors.name} name="name" type="text" placeholder="Dr Archibald Pop MD" />
                  <ErrBox>
                    <ErrorMessage name="name" />
                  </ErrBox>
                </InputSection>
                <InputSection>
                  <Label>Address Line One:</Label>
                  <StyledField errors={errors.addressLineOne} name="addressLineOne" type="text" placeholder="1616 Funfoods Lane" />
                  <ErrBox>
                    <ErrorMessage name="addressLineOne" />
                  </ErrBox>
                </InputSection>
                <InputSection>
                  <Label>Address Line Two:</Label>
                  <StyledField errors={errors.addressLineTwo} name="addressLineTwo" type="text" placeholder="Room 132" />
                  <ErrBox>
                    <ErrorMessage name="addressLineTwo" />
                  </ErrBox>
                </InputSection>
                <InputSection>
                  <Label>City:</Label>
                  <StyledField errors={errors.city} name="city" type="text" placeholder="Burlington" />
                  <ErrBox>
                    <ErrorMessage name="city" />
                  </ErrBox>
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
                  <StyledField errors={errors.postalCode} name="postalCode" type="string" placeholder="27515" />
                  <ErrBox>
                    <ErrorMessage name="postalCode" />
                  </ErrBox>
                </InputSection>
                <InputSection>
                  <Label>Email:</Label>
                  <StyledField errors={errors.email} name="email" type="email" placeholder="docpop@popmail.com" />
                  <ErrBox>
                    <ErrorMessage name="email" />
                  </ErrBox>
                </InputSection>
              </FormPlacement>
            </StyledFieldContainer>


            <ButtonContainer>
              <SubmitButton onClick={() =>
                console.log(errors)} errors={Object.entries(errors).length} type="submit">Submit</SubmitButton>
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
