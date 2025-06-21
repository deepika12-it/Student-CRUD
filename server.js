const express = require('express');
const studentsRoutes = require('./routes/studentsRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Custom middleware for logging requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Welcome route
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to Student Management API!",
    version: "2.0.0",
    endpoints: {
      students: "/students",
      swagger: "/api-docs (coming soon!)"
    },
    author: "Deepika's Dev API ❤️"
  });
});

// Use student routes (✅ This is correct)
app.use('/students', studentsRoutes);

// 404 handler for unknown routes
/*app.use('*', (req, res) => {
  res.status(404).json({
    error: "Route not found!",
    message: `The endpoint ${req.originalUrl} doesn't exist.`,
    availableEndpoints: [
      "GET /",
      "GET /students",
      "GET /students/:id",
      "POST /students",
      "PUT /students/:id",
      "DELETE /studentsid"
    ]
  });
});*/

// Global error handler
app.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(500).json({
    error: "Something went wrong!",
    message: "Internal server error occurred."
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on localhost:${PORT}`);
  console.log(`📚 Students API available at localhost:${PORT}/students`);
});

module.exports = app;
