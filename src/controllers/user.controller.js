import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req, res) => {
    console.log("Check done")
    res.status(200).json({
        message: "sup"
    })
})


export {
    registerUser,
}