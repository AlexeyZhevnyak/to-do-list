const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
const supabaseAccessToken = process.env.SUPABASE_ACCESS_TOKEN;
export const config = {
    supabaseUrl, supabaseKey, supabaseAccessToken
}
