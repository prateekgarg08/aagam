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
        <p className="text-3xl font-bold text-primary text-center">Register</p>
        <Input
          type="text"
          label="Name"
          name="Name"
          placeholder="Enter your Name"
          required={true}
          setValue={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          type="text"
          label="Email"
          name="Email"
          placeholder="Enter your Email"
          required={true}
          setValue={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Input
          type="text"
          label="Gender"
          name="Gender"
          placeholder=""
          required={true}
          setValue={(e) => setGender(e.target.value)}
          value={gender}
        />

        <Input
          type="text"
          label="Year Of Study"
          name="Year"
          placeholder="Enter your Year "
          required={true}
          setValue={(e) => setYear(e.target.value)}
          value={year}
        />

        <Input
          type="text"
          label="Event"
          name="Event"
          placeholder="Event you want to particioate"
          required={true}
          setValue={(e) => setEvent(e.target.value)}
          value={event}
        />

        <Input
          type="text"
          label="Phone No."
          name="Phone no."
          placeholder="Enter your Phone no."
          required={true}
          setValue={(e) => setNumber(e.target.value)}
          value={number}
        />

        <button
          onClick={() => {}}
          className="flex items-center gap-3 font-semibold text-white rounded-full px-8 py-2 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary duration-300 transition-all"
        >
          <span className="">Register</span>
        </button>
      </div>
    </div>
  )
}
