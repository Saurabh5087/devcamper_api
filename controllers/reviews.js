const ErrorResponse = require('../utils/errorResponse');
const Review = require('../models/Review');
const asyncHandler = require('../middleware/async');
const Bootcamp = require('../models/Bootcamp');

// @desc    Get Reviews
// @route   GET /api/v1/reviews
// @route   GET /api/v1/bootcamps/:bootcampId/reviews
// @access  Public
exports.getReviews = asyncHandler(async (req, res, next) => {
    if(req.params.bootcampId) {
        const reviews = await Review.find({ bootcamp: req.params.bootcampId });

        return res.status(200).json({
            success: true,
            count: reviews.length,
            data: reviews
        })
    } else {
        res.status(200).json(res.advancedResults);
    }
});

// @desc    Get Single review
// @route   GET /api/v1/reviews/:id
// @access  Public
// exports.getReview = asyncHandler(async (req, res, next) => {
//     const review = await Review.findById(req.params.id).populate({
//         path: 'bootcamp',
//         select: 'name description'
//     });

//     if (!review) {
        
//     }
// });