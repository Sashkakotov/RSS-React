import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { formSlice } from '../store/reducers/formSlice';

import { ICardAPI } from '../types/types';
import BREEDS__LIST from '../API/breeds';
import catsData from '../API/data';
import {
  ALIVE,
  CARD_CONSTRUCTOR,
  DEAD,
  TEXT_INPUT_PATTERN,
  MALE,
  FEMALE,
} from '../constants/constants';
import PopUp from '../components/UI/Pop-up/Pop-up';
import NameInput from '../components/UI/Forms/NameInput';
import Photoinput from '../components/UI/Forms/PhotoInput';
import DateInput from '../components/UI/Forms/DateInput';
import GendersInput from '../components/UI/Forms/GenderInputs';
import SubmitInput from '../components/UI/Forms/SubmitInput';
import SpeciesSelect from '../components/UI/Forms/BreedSelect';
import LocationInput from '../components/UI/Forms/DescriptionInput';
import AliveInput from '../components/UI/Forms/PedigreeInput';
import CardItem from '../components/UI/CardItem';

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [confirm, setConfirm] = useState(false);
  const dispatch = useAppDispatch();
  const { formCards } = useAppSelector((state) => state.formReducer);

  const onSubmit = handleSubmit((data) => {
    const inputsList: ICardAPI = {
      id: catsData.cats.length + 1 + formCards.length,
      image: URL.createObjectURL(data.image[0] as Blob | MediaSource),
      status: data.status ? ALIVE : DEAD,
      name: data.name,
      species: data.species,
      created: data.created,
      gender: data.male ? MALE : FEMALE,
      location: {
        name: data.locationName,
      },
    };

    setConfirm(true);

    setTimeout(() => {
      setConfirm(false);
      dispatch(formSlice.actions.formState([...formCards, inputsList]));
      reset();
    }, 3000);
  });

  return (
    <main className="main">
      {confirm && <PopUp />}
      <form className="forms__form" onSubmit={onSubmit}>
        <h2 className="forms__title">{CARD_CONSTRUCTOR}</h2>

        <NameInput
          reg={{
            ...register('name', {
              required: true,
              minLength: 1,
              pattern: TEXT_INPUT_PATTERN,
            }),
          }}
          err={errors.name}
        />

        <Photoinput reg={{ ...register('image', { required: true }) }} err={errors.image} />

        <DateInput
          reg={{
            ...register('created', {
              required: true,
              validate: (date) => Date.now() >= Date.parse(date),
            }),
          }}
          err={errors.created}
        />

        <SpeciesSelect
          reg={{
            ...register('species', {
              required: true,
              validate: (breed) => breed !== BREEDS__LIST[0],
            }),
          }}
          err={errors.species}
        />

        <LocationInput
          reg={{
            ...register('locationName', {
              required: true,
              minLength: 1,
              pattern: TEXT_INPUT_PATTERN,
            }),
          }}
          err={errors.locationName}
        />
        <GendersInput reg={{ ...register('gender', { required: true }) }} err={errors.gender} />

        <AliveInput reg={{ ...register('status') }} />

        <SubmitInput reg={{ ...register('submitInput') }} />
      </form>

      <ul className="cards__list">
        {formCards.map((card) => (
          <CardItem key={card.id} card={card} isModal={false} />
        ))}
      </ul>
    </main>
  );
};
export default Forms;
