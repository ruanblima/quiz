import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Input from '~/components/Input';

import groceries from '~/assets/images/groceries.png';
import { getCategorySubjectAction } from '~/store/ducks/categorySubject/actions';

import { validationSchema } from './validations';

import * as S from './styles';

interface DataProps {
  username: string;
  password: string;
}

export function Login() {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  async function handleCategory() {
    dispatch(getCategorySubjectAction());
  }

  const { handleSubmit, dirty, handleChange, values, errors } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleCategory,
    validateOnChange: false,
  });

  return (
    <S.Container>
      <S.StatusBar />
      <S.ContainerImage>
        <S.Image source={groceries} />
      </S.ContainerImage>
      <S.ContainerInputs>
        <Input
          iconLeft="person"
          iconType="ionicons"
          placeholder="Digite seu username"
          value={values.username}
          error={errors.username}
          onChangeText={handleChange('username')}
        />

        <Input
          iconLeft="lock"
          placeholder="Digite sua senha"
          value={values.password}
          error={errors.password}
          onChangeText={handleChange('password')}
          secureTextEntry={!showPassword}
          actionIcon={() => setShowPassword(!showPassword)}
          iconRight={showPassword ? 'eye-off' : 'eye'}
        />
      </S.ContainerInputs>
      <S.ContainerButton>
        <S.Button onPress={() => handleCategory()}>
          <S.ButtonText>Entrar</S.ButtonText>
        </S.Button>
      </S.ContainerButton>
    </S.Container>
  );
};
