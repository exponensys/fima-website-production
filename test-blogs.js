const { createClient } = require('@supabase/supabase-js');

const projectId = "jxikbrjmdmznoehhccdw";
const publicAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4aWticmptZG16bm9laGhjY2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMDE3MTEsImV4cCI6MjA3MTU3NzcxMX0.XbVLAaIA_tSV7toWwi-yVdmIlD2AE08ihGLPxyqHZio";

const supabaseUrl = `https://${projectId}.supabase.co`;
const supabase = createClient(supabaseUrl, publicAnonKey);

async function testBlogs() {
  console.log('Testing Supabase connection...');
  
  try {
    // Test connection
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .limit(5);
    
    if (error) {
      console.error('Error:', error);
      return;
    }
    
    console.log('Blogs found:', data?.length || 0);
    if (data && data.length > 0) {
      console.log('First blog:', data[0]);
    } else {
      console.log('No blogs in database');
    }
  } catch (err) {
    console.error('Connection error:', err);
  }
}

testBlogs();