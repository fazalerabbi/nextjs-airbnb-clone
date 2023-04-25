'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModel';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';

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
                toast.error("Something went wrong!");
            });
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title='Welcome to Airbnb!' subtitle='Create an account!' />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="Sign up with Google"
                icon={FcGoogle}
                onClick={() => { alert("Google") }}
            />
            <Button
                outline
                label="Sign up with Github"
                icon={AiFillGithub}
                onClick={() => { alert("Github") }}
            />
            <div className="text-neutral-500 text-center mt-4 font-light">
                <div className="justify-center flex flex-row items-center gap-2">
                    <div>
                        Already have an account?
                    </div>
                    <div
                        onClick={registerModel.onClose}
                        className="text-neutral-800 cursor-pointer hover:underline"
                    >
                        Log in
                    </div>
                </div>
            </div>

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
            footer={footerContent}
        />
    );
}

export default RegisterModal;
