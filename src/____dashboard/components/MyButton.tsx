import React, { useState, FC, useEffect } from "react";

interface Props {
    disabled?: boolean;
    onClick: () => void;
    label?: string;
    desc?: string;
    name?: string;
    id?: string;
}

const MyButton: FC<Props> = ({
    onClick,
    desc,
    label,
    name,
    id,
    disabled,
}) => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        setEnabled(false);
    }, [disabled]);

    return (
        <div className="flex items-center justify-between space-x-3">
            <div className="flex-1 max-w-2xl">
                <label
                    className="block text-base font-medium text-gray-700 select-none"
                    htmlFor={id}
                >
                    {label}
                </label>
                {desc && (
                    <span className="mt-1.5 block text-sm text-gray-500">{desc}</span>
                )}
            </div>
            <button
                type="button"
                onClick={() => {
                    onClick()
                }}
                className="outline outline-1 inline-flex items-center rounded-md border border-blue-600 bg-blue-600 px-3 py-2.5 text-sm font-medium text-white shadow-sm hover:border-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-0"
                name={name}
                id={id}
            >
                <span className="px-1">Regenerate Assets</span>
            </button>
        </div>
    );
};

export default MyButton;
