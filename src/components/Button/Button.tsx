import './Button.scss'

interface ButtonProps {
    title: string;
    icon?: React.ReactNode;
}

export default function Button({ title, icon }: ButtonProps) {
    return (
        <button type='submit' className='button-container'>
            {icon && <p className='button-icon'>{icon}</p>}
            <p className='button-title'>{title}</p>
        </button>
    )
}
