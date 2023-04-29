'use client';

import Image from "next/image";
import { FC } from "react";

interface AvatarProps {
    src: string | null | undefined;
}

const Avatar: FC<AvatarProps> = ({ src }) => {
    return (
        <Image
            alt="Avatar"
            src={src || "/images/placeholder.jpg"}
            width={30}
            height={30}
            className="rounded-full cursor-pointer"
        />
    );
}

export default Avatar;