'use server'

import {createSupabaseClient} from "@/app/_lib/supabase";
import {revalidatePath} from "next/cache";
import {FormState} from "@/app/_components/AddTodoForm";

export const addTodoAction = async (prevState: FormState, formData: FormData) => {
    const supabase = await createSupabaseClient()

    const todo = formData.get('todo') || '';
    await supabase.from('items').insert({
        text: todo.toString(),
    })
    revalidatePath('/', 'page')
    return {
        ...prevState
    }
}

export const toggleTodoAction = async (id: number, completed: boolean) => {
    const supabase = await createSupabaseClient()

    await supabase
        .from('items')
        .update({completed: !completed})
        .eq('id', id)

    revalidatePath('/', 'page')
}

export const deleteTodoAction = async (id: number) => {
    const supabase = await createSupabaseClient()

    await supabase
        .from('items')
        .delete()
        .eq('id', id)

    revalidatePath('/', 'page')
}
