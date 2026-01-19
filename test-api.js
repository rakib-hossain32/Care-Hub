// No require needed for native fetch in Node 18+
fetch('https://care-backend-lime.vercel.app/services')
    .then(res => res.json())
    .then(data => console.log('Services:', data.length))
    .catch(err => console.error('Error:', err.message));
