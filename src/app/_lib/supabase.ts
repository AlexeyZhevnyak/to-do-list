import {createServerClient} from '@supabase/ssr'
import {Database} from "@/app/_lib/types";
import {config} from "config.ts";
import {cookies} from "next/headers";

export async function createSupabaseClient() {
    if (!config.supabaseUrl || !config.supabaseKey) {
        throw new Error('Missing Supabase environment variables. Check your .env file.');
    }

    const cookieStore = await cookies()

    return createServerClient<Database>(config.supabaseUrl, config.supabaseKey, {
        cookies: {
            getAll() {
                return cookieStore.getAll()
            },
            setAll(cookiesToSet) {
                try {
                    cookiesToSet.forEach(({name, value, options}) =>
                        cookieStore.set(name, value, options)
                    )
                } catch {
                    // The `setAll` method was called from a Server Component.
                    // This can be ignored if you have middleware refreshing
                    // user sessions.
                }
            },
        },
    });
}

export const getAllTodos = async () => {
    const supabase = await createSupabaseClient()
    const {data} = await supabase.from('items').select('*');
    return data || [];
}
