const customErrorHandler = (e, req, res, next) => {
   
  
    res.status(e.statusCode).json({
      error: e.name,
      message: e.message,
    });
  };
  
  class ValidationError extends Error {
    constructor(message) {
      super(message);
  
      this.name = "ValidationError";
      this.statusCode = "400";
      this.message = message;
    }
  }
  
  class ItemNotCreatedError extends Error {
    constructor(message) {
      super(message);
  
      this.name = "ItemNotCreatedError";
      this.statusCode = "500";
      this.message = message;
    }
  }
  
  module.exports = {
    ItemNotCreatedError,
    ValidationError,
    customErrorHandler,
  };