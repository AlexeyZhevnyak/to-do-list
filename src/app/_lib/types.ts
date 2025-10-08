import {Tables} from "@/app/_lib/supabase-types";

export type TodoType = Tables<'items'>

// Re-export the Database type for use in supabase client
export type {Database} from "@/app/_lib/supabase-types";
