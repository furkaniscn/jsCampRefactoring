import { users } from "../data/users.js";
import ErrorDataResult from "../utilities/results/errorDataResult.js";

export default class ErrorService {
    constructor() {
        this.errors = [];
    }

    load() {
        for (const user of users) {
            if (user.type !== "employee" && user.type !== "customer") {
                this.errors.push(
                    new ErrorDataResult(
                        user,
                        `Exception : [type]${user.type} doesn't exist.`
                    )
                );
            }
        }
    }
}