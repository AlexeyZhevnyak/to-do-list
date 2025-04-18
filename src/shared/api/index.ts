import {createClient} from "@supabase/supabase-js";
import {Database} from "@/shared/types/supabase";
import {config} from "@/shared/config";

if (!config.supabaseUrl || !config.supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check your .env file.');
}

const supabase = createClient<Database>(config.supabaseUrl, config.supabaseAnonKey);

export default supabase; 