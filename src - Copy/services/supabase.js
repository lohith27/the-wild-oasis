import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dyttnfrxbulbjlkymeko.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dHRuZnJ4YnVsYmpsa3ltZWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4OTA2MjgsImV4cCI6MjA3MDQ2NjYyOH0.4F_MwYUT90Zha60sjH1T_3LvaojXPl1oWLjbMeQNQFw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
