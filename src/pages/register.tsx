import { Input } from '@/components/Common/Input'
import { useState } from 'react'

export default function Register() {
  //? states
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [number, setNumber] = useState<string>('')
  const [year, setYear] = useState<string>('')
  const [event, setEvent] = useState<string>('')
  const [gender, setGender] = useState<string>('')

  //? contexts
  return (
    <div className="flex items-center justify-center h-screen xl:flex-wrap  w-full bg-bgBlack">
      <div className="rounded-3xl shadow-lg bg-white py-8 px-12 esm:px-2 esm:py-2 flex flex-col items-center gap-4 lg:w-2/5 w-3/4">
        <span>
          {' '}
          Thank You For Showing Your interest in Our Event & For Your
          Convenience we are having On-Spot registeration for this Particular
          Event.
        </span>
      </div>
    </div>
  )
}
