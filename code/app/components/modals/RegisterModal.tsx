'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModel';
import Modal from './Modal';

const RegisterModal = () => {
    const registerModel = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
            name: '',
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post('/api/auth/register', data)
            .then(() => {
                setIsLoading(false);
                registerModel.onClose();
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error);
            });
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            Body
        </div>
    );

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModel.isOpen}
            onClose={registerModel.onClose}
            title='Register'
            actionLabel='Register'
            onSubmitted={handleSubmit(onSubmit)}
            body={bodyContent}
        />
    );
}

export default RegisterModal;
