let PORT = '';

if (process.env.NODE_ENV === 'production') {
    PORT = 'http://localhost:8000';
}

export {
    PORT
}