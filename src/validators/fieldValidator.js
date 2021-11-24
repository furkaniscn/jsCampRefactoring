import SuccessResult from "..utilities/results/successResult.js";
import ErrorDataResult from "../utilities/results/errorDataResult.js";

export default function fieldValidator(entity, requiredFields) {
    let fields = requiredFields.split(",");
    for (const field of fields) {
        if (!entity[field]) {
            return new ErrorDataResult(entity, `Validation Exception : ${field} is required`);
        }
        return new SuccessResult();
    }
}