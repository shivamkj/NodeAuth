// Client Errors
export function UnauthorizedError(message = "Unauthorised") {
  this.message = message;
  this.name = "Unauthorised";
  this.statusCode = 401;
}

export function ForbiddenError(message = "Permission denied") {
  this.message = message;
  this.name = "InternalError";
  this.statusCode = 403;
}

export function NotFoundError(message = "Not Found") {
  this.message = message;
  this.name = "NotFoundError";
  this.statusCode = 404;
}

export function BadRequestError(message = "Bad Request") {
  this.message = message;
  this.name = "BadRequestError";
  this.statusCode = 400;
}

// Server Errors
export function InternalError(message = "Internal Error") {
  this.message = message;
  this.name = "InternalError";
  this.statusCode = 500;
}

// export class BadRequestError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "BadRequestError";
//     this.statusCode = 400;
//   }
// }

// export const InternalError = (message) => ({
//   name: "AuthFailureError",
//   message: message,
//   statusCode: 403,
// });
