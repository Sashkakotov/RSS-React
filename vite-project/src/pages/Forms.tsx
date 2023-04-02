import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import CardItem from '../components/UI/CardItem';
import { ICard } from '../types/types';
import BREEDS__LIST from '../API/breeds';
import catsData from '../API/data';
import { CARD_CONSTRUCTOR, NO, TEXT_INPUT_PATTERN, YES } from '../constants/constants';
import PopUp from '../components/UI/Pop-up/Pop-up';
import NameInput from '../components/UI/Forms/NameInput';
import Photoinput from '../components/UI/Forms/PhotoInput';
import DateInput from '../components/UI/Forms/DateInput';
import DescriptionInput from '../components/UI/Forms/DescriptionInput';
import GendersInput from '../components/UI/Forms/GenderInputs';
import PedigreeInput from '../components/UI/Forms/PedigreeInput';
import SubmitInput from '../components/UI/Forms/SubmitInput';
import BreedSelect from '../components/UI/Forms/BreedSelect';

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [stateForm, setStateForm] = useState([] as ICard[]);
  const [confirm, setConfirm] = useState(false);

  const onSubmit = handleSubmit((data) => {
    const inputsList: ICard = {
      ...data,
      id: String(catsData.cats.length + 1 + stateForm.length),
      photo: URL.createObjectURL(data.photo[0] as Blob | MediaSource),
      pedigree: data.pedigree.checked ? YES : NO,
    };
    setConfirm(true);
    setTimeout(() => {
      setConfirm(false);
      setStateForm([...stateForm, inputsList]);
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
        <Photoinput reg={{ ...register('photo', { required: true }) }} err={errors.photo} />
        <DateInput
          reg={{
            ...register('date', {
              required: true,
              validate: (date) => Date.now() >= Date.parse(date),
            }),
          }}
          err={errors.date}
        />
        <BreedSelect
          reg={{
            ...register('breed', {
              required: true,
              validate: (breed) => breed !== BREEDS__LIST[0],
            }),
          }}
          err={errors.breed}
        />

        <DescriptionInput
          reg={{
            ...register('description', {
              required: true,
              minLength: 1,
              pattern: TEXT_INPUT_PATTERN,
            }),
          }}
          err={errors.description}
        />
        <GendersInput reg={{ ...register('sex', { required: true }) }} err={errors.sex} />
        <PedigreeInput reg={{ ...register('pedigree') }} />
        <SubmitInput reg={{ ...register('submitInput') }} />
      </form>

      <ul className="cards__list">
        {stateForm.map((card) => (
          <CardItem key={card.id} {...card} />
        ))}
      </ul>
    </main>
  );
};
export default Forms;
