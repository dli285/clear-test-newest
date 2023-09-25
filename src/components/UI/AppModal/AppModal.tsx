import React, { useState } from "react";
import Modal from 'react-modal';
import { boolean } from "yup";
import { AppInput } from "../AppInput/AppInput";
import { AppButton } from "../AppButton/AppButton";
import * as yup from 'yup'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        matginRight: '-50%',
        traansform: 'translate(-50%, -50%)',
    }
}

interface AppModalProps {
    modalIsOpen: boolean
    closeModal: () => void
    onCommentCardUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onCommentCardNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onAddCard: () => void
}

interface ModalForm {
    usercard: string
    username: string
}

const loginFormSchema = yup.object({
    usercard: yup.string().required('Обязательное поле'),
    username: yup.string().required('Обязательное поле'),
})

const { control, handleSubmit, formState: { errors } } = useForm<ModalForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
        username: '',
        usercard: ''
    }
})
console.log("ERRORS: ", errors);

export const AppModal = ({ modalIsOpen, closeModal, onAddCard, onCommentCardNameChange, onCommentCardUsernameChange }: AppModalProps) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Add comments">
            <button onClick={closeModal}>close</button>
            <div>Add comments</div>
            <form>
                <Controller
                    name="usercard"
                    control={control}
                    render={({}) => <AppInput
                        type="text"
                        errorMessage={errors.usercard?.message}
                        onChange={onCommentCardNameChange}
                    />} />
                <Controller
                    name="username"
                    control={control}
                    render={({}) => <AppInput
                        type="text"
                        errorMessage="Not Available name"
                        onChange={onCommentCardUsernameChange}
                    />} />
                <AppButton
                    buttonLabel="Добавить карту"
                    isDisabled={false}
                    onClick={() => onAddCard()}
                />
            </form>
        </Modal>
    )
}