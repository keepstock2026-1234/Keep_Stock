import { createClient } from '@supabase/supabase-js';

// Configurações do Supabase
const SUPABASE_URL = 'https://gysiqyxpmlxmlolqzaqs.supabase.co';

// Chave anon
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5c2lxeXhwbWx4bWxvbHF6YXFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5NjA3MDYsImV4cCI6MjA5MDUzNjcwNn0.Rst-gDutHxMCXUxGP2HYgRSnsUhip7tAevtsE9sWh4A';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});

export function conectarSupabase() {
  return supabase;
}

export default supabase;
