"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = __importDefault(require("./vector"));
var Camera = /** @class */ (function () {
    function Camera(pos, lookAt) {
        this.pos = pos;
        var down = new vector_1.default(0.0, -1.0, 0.0);
        this.forward = vector_1.default.norm(vector_1.default.minus(lookAt, this.pos));
        this.right = vector_1.default.times(1.5, vector_1.default.norm(vector_1.default.cross(this.forward, down)));
        this.up = vector_1.default.times(1.5, vector_1.default.norm(vector_1.default.cross(this.forward, this.right)));
    }
    return Camera;
}());
exports.default = Camera;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL2NhbWVyYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE4QjtBQUc5QjtJQUtFLGdCQUFtQixHQUFXLEVBQUUsTUFBYztRQUEzQixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQzVCLElBQUksSUFBSSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBQyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQVhELElBV0MifQ==