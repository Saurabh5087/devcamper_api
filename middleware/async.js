// function asyncHandler(fn) {
//   function handler(req, res, next) {
//     Promise.resolve(fn(req, res, next)).catch(next);
//   }
//   return handler;
// }

// __________________________________________________________________

// const asyncHandler = fn => {
//     const handler = (req, res, next) => {
//       Promise.resolve(fn(req, res, next)).catch(next);
//     };
//     return handler;
//   };

// __________________________________________________________________


const asyncHandler = fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncHandler;