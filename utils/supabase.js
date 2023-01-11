import { createClient } from "@supabase/supabase-js";
const supabaseUrl = 'https://apqrjjafmexbgxwhvpfn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwcXJqamFmbWV4Ymd4d2h2cGZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMxNTMwNDIsImV4cCI6MTk4ODcyOTA0Mn0.sh85mFm52wOeb0yt-mCqatQNK4qBXawdNQzZzbSpRcE'

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
)