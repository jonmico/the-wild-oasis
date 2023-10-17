import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rfpeefidhzhoamxptbwe.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmcGVlZmlkaHpob2FteHB0YndlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwODM2NTAsImV4cCI6MjAxMjY1OTY1MH0.Rd4z_dDsvbY5I59gPOX2nvxLUDYnrowi8qUQ8v5AQys';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
