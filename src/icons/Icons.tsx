import React from 'react';
import { IconProps } from '.';

const Arrow = ({ className }: IconProps) => {
    return (
        <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M1.09998 10.6335H20.9" stroke="#C5C6CB" />
            <path d="M13.2 18.3336L20.8999 10.6336L13.2 2.93356" stroke="#C5C6CB" strokeLinejoin="round" />
        </svg>
    )
}

const Clock = ({ className }: IconProps) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#EFF4FF" />
            <circle cx="11.9999" cy="12" r="6.75" stroke="#0070CB" strokeLinejoin="round" />
            <path d="M11.9999 8.14288V12L13.9284 13.9286" stroke="#0070CB" strokeLinejoin="round" />
        </svg>
    )
}

const Fire = ({ className }: IconProps) => {
    return (
        <svg className={className} width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2.41004 9.54762C-1.22358 15.3381 3.01564 18.5952 5.58946 19.5C3.77268 15.881 4.22688 13.619 5.58946 11.3571C5.58946 11.3571 7.10348 13.0159 7.4063 13.619C7.4063 13.619 8.76891 11.3571 7.8605 8.19048C7.8605 8.19048 14.6735 13.1667 10.1315 19.5C10.1315 19.5 16.4904 16.3333 14.6735 9.54762C13.6268 5.63802 8.92031 1.85714 6.49789 0.5C6.64928 1.10317 6.04366 3.75714 2.41004 9.54762Z"
                stroke="#D99631" strokeLinejoin="round" />
        </svg>
    )
}

const Check = ({ className }: IconProps) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#0FC986" />
            <path d="M6 12L10 16L18 8" stroke="white" strokeLinejoin="round" />
        </svg>
    )
}

const Pending = ({ className }: IconProps) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#EFF4FF" />
            <path
                d="M17 5.5H7V6.67157C7 7.20201 7.21071 7.71071 7.58579 8.08579L11.5 12L7.58579 15.9142C7.21071 16.2893 7 16.798 7 17.3284V18.5H17V17.3284C17 16.798 16.7893 16.2893 16.4142 15.9142L12.5 12L16.4142 8.08579C16.7893 7.71071 17 7.20201 17 6.67157V5.5Z"
                stroke="#0070CB" strokeLinejoin="round" />
            <path d="M12 14L9 17H15L12 14Z" fill="#0070CB" />
        </svg>
    )
}

export {
    Arrow,
    Clock,
    Fire,
    Check,
    Pending
}
