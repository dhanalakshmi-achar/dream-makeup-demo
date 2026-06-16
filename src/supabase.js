import {createClient} from '@supabase/supabase-js';
const supabaseUrl = "https://huhffwkaezsuenachexm.supabase.co"   // copy Project URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1aGZmd2thZXpzdWVuYWNoZXhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyMTk1OTksImV4cCI6MjA5Njc5NTU5OX0.YXuTE0CziEDn0JjDyf9HTY2X1FpIog7_lIaRsst3-R0"              // copy anon key
export const supabase = createClient(supabaseUrl, supabaseKey)