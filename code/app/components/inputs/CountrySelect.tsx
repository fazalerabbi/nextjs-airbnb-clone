'use client';

import { FC } from "react";
import Select from "react-select";
import useCountries from "@/app/hooks/useCountries";

export type CountrySelectValue = {
    flag: string;
    label: string;
    laglng: number[];
    region: string;
    value: string;
}

interface CountrySelectProps {
    value?: CountrySelectValue;
    onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: FC<CountrySelectProps> = ({
    value,
    onChange
}) => {
    const { getAll } = useCountries();

    return (
        <div>
            <Select
                placeholder="Anywhere"
                isClearable
                options={getAll()}
            />
        </div>
    );
}

export default CountrySelect;