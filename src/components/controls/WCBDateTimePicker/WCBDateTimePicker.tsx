import { DateTimePicker } from '@wordpress/components';
import React, { FC, useMemo, useEffect, useState } from "react";

export interface countdown_date {
	countdown_date?: string;
}

interface Props {
	date: countdown_date;
	onChange: (color: string) => void;
}

const WCBDateTimePicker: FC<Props> = ({
	date,
	onChange
}) => {
    const [ new_date, setDate ] = useState( new Date() );

    useEffect(() => {
		setDate(date.countdown_date);
	}, [date.countdown_date]);

    const handleDateSelect = (d: string) => {
		setDate(d);
		onChange(d);
	};

    return (
        <DateTimePicker
            currentDate={ date.countdown_date }
            onChange={(new_date) => {
                handleDateSelect(new_date || "");
            }}
            is12Hour={ true }
        />
    );
};

export default WCBDateTimePicker;

