'use client';
import { useState } from 'react';
import { createAuthClient } from "better-auth/client";
import { user } from '@/db/schema';
import { useSession } from '@/lib/auth-client';

import { z } from 'zod';
const authClient = createAuthClient();

const profileSchema = z.object({
  name: z.string()
    .min(3, 'username must be at least 3 characters long')
    .max(50, 'username must be at most 50 characters long')
    .trim()
    .refine(val => val.length > 0, 'username is required'),
});
type ProfileFormData = z.infer<typeof profileSchema>;
export function ProfileUpdateForm() {
    const { data: session } = useSession();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string }>({});
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
 setErrors({});
    try {
       const validatedData = profileSchema.parse({ name });
     const result = await authClient.updateUser({ name: validatedData.name });

      
      if (result.error) {
        setMessage(` ${result.error.message}`);
      } else {
        setMessage('Updated succesfully');
      }
    } catch (error) {
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 px-3 h-full lg:justify-center">
        <div className="flex flex-col w-full lg:justify-center lg:items-center gap-3">
            <h1 className="bdog text-[12px] uppercase">Your username</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={String(session?.user?.name) || "Введите имя"}
        className="px-3 py-2 rounded-2xl border shadow-sm w-full lg:w-1/2  "

        disabled={loading}
      ></input>
      </div>
      <div className="absolute bottom-0 w-full lg:w-2/3 left-1/2 transform -translate-x-1/2 px-3 pb-7">
      <button type="submit" disabled={loading} className="bg-[rgb(35,25,22)] text-[rgb(228,224,212)] w-full  h-[48px] bdog text-[12px] uppercase ">
        {loading ? 'Loading..' : 'Save'} {message && <p>{message}</p>}
      </button>
      </div>
     
    </form>
  );
}