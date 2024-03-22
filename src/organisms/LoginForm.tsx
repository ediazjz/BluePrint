import { useState } from "react";
import { Button, TextInput } from "../atoms"

export type TLoginForm = {
  onSubmit: () => void;
}

export default function LoginForm({onSubmit}: TLoginForm) {
  const [msg, setMsg] = useState<string>("You are not logged in.");
  
  const handleSubmit = () => {
    onSubmit();

    setMsg("You are logged in!");
  }

  return (
    <form className="p-8 bg-slate-200 rounded-2xl flex flex-col space-y-8">
      <div className="flex flex-col space-y-4">
        <TextInput placeholder="email" />
        <TextInput placeholder="password" />
      </div>
      <Button type="submit" label="Log in" color="accent" size="DEFAULT" onClick={handleSubmit} />

      <p className="text-dark">{msg}</p>
    </form>
  );
}
