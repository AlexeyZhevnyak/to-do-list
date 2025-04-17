import {createClient} from "@supabase/supabase-js";
import {Database} from "src/entities/todo/model/types.ts";

const supabase = createClient<Database>("https://qfjlwzisogyahovseodm.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmamx3emlzb2d5YWhvdnNlb2RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NzY4NjYsImV4cCI6MjA1NzQ1Mjg2Nn0.sF9XfKkP63LA0aWKHdTkNa2LJ4z75X-7Mty3FLr6JD8");

export default supabase;