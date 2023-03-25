import { Input } from '@/components/Common/Input'
import { useState } from 'react'

export default function Register() {
  //? states
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  //? contexts
  return (
    <div className="flex items-center justify-center h-screen w-full bg-bgBlack">
      <div className="rounded-3xl shadow-lg bg-white py-8 px-12 flex flex-col items-center gap-4 w-2/5">
        <p className="text-3xl font-bold text-primary">Login</p>
        <Input
          type="text"
          label="Email"
          name="email"
          placeholder="Enter your email"
          required={true}
          setValue={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder="Enter your password"
          required={true}
          setValue={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          onClick={() => {}}
          className="flex items-center gap-3 font-semibold text-white rounded-full px-8 py-2 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary duration-300 transition-all"
        >
          <span className="">Login</span>
        </button>
      </div>
    </div>
  )
}
