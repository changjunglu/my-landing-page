import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dvelrztujohwrtjifros.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZWxyenR1am9od3J0amlmcm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyMzYzOTIsImV4cCI6MjA2NzgxMjM5Mn0.fGaCoPiPlF_PX-1eWoqP8zgBtUGETWeYeLCEXgqSwUA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 