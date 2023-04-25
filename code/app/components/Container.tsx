'use client';
import { FC, ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}
const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <div className="max-w-[2530px] mx-auto xl:px-20 md:px-10 sm:px-2">{children}</div>
    );
}

export default Container;