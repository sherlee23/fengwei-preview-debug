import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://edfnhhthztskuuosuasw.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkZm5oaHRoenRza3V1b3N1YXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5OTYxMTYsImV4cCI6MjA2NTU3MjExNn0.O3g2gjvsWagmWgmzoeJA8mPampvLYJr-KgqVwXsKoAo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
