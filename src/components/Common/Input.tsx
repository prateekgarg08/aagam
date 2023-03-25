import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export const Input: FC<{
  label: string
  type: string
  name: string
  icon?: any
  required: boolean
  value: any
  placeholder: string
  setValue: Dispatch<SetStateAction<any>>
  error?: any
}> = ({
  label,
  type,
  name,
  required,
  icon,
  error,
  placeholder,
  value,
  setValue,
}) => {
  //? states
  const [showPassword, setShowPassword] = useState(false)
  const [typeState, setTypeState] = useState(type)

  //? effects
  useEffect(() => {
    if (showPassword) {
      setTypeState('text')
    } else setTypeState(type)
  }, [showPassword, type])
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label
          htmlFor={label}
          className="text-base flex items-center gap-1 font-semibold capitalize text-gray-800"
        >
          <span>{label}</span>
          <span className={`${required ? 'block' : 'hidden'} text-red-600`}>
            *
          </span>
        </label>
      )}
      <div className="relative flex items-center justify-center w-full">
        {type == 'password' && (
          <button
            onClick={() => setShowPassword(!showPassword)}
            className={`absolute text-xl right-4`}
          >
            {!showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        )}
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          name={name}
          id={name}
          value={value}
          type={typeState}
          onChange={setValue}
          placeholder={placeholder}
          className={`${
            icon ? 'pl-9' : ''
          } px-4 bg-white w-full border-2 py-2 rounded-[10px] shadow-sm border-gray-300 text-black outline-0 focus-visible:border-2 placeholder:text-gray-800 placeholder:text-[15px]  ${
            error ? 'animate-wiggle border-Red' : 'focus-visible:border-primary'
          }`}
        />
      </div>
      {error && <p className="text-base font-semibold text-red-600">{error}</p>}
    </div>
  )
}
