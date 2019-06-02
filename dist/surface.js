"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __importDefault(require("./color"));
exports.shiny = {
    diffuse: function (pos) { return color_1.default.white; },
    specular: function (pos) { return color_1.default.grey; },
    reflect: function (pos) { return 0.7; },
    roughness: 250
};
exports.checkerboard = {
    diffuse: function (pos) {
        if ((Math.floor(pos.z) + Math.floor(pos.x)) % 2 !== 0) {
            return color_1.default.white;
        }
        else {
            return color_1.default.black;
        }
    },
    specular: function (pos) { return color_1.default.white; },
    reflect: function (pos) {
        if ((Math.floor(pos.z) + Math.floor(pos.x)) % 2 !== 0) {
            return 0.1;
        }
        else {
            return 0.7;
        }
    },
    roughness: 150
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9zdXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esa0RBQTRCO0FBVWpCLFFBQUEsS0FBSyxHQUFZO0lBQzFCLE9BQU8sRUFBRSxVQUFVLEdBQUcsSUFBSSxPQUFPLGVBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9DLFFBQVEsRUFBRSxVQUFVLEdBQUcsSUFBSSxPQUFPLGVBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQy9DLE9BQU8sRUFBRSxVQUFVLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsU0FBUyxFQUFFLEdBQUc7Q0FDZixDQUFBO0FBQ1UsUUFBQSxZQUFZLEdBQVk7SUFDakMsT0FBTyxFQUFFLFVBQVUsR0FBRztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JELE9BQU8sZUFBSyxDQUFDLEtBQUssQ0FBQztTQUNwQjthQUFNO1lBQ0wsT0FBTyxlQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUNELFFBQVEsRUFBRSxVQUFVLEdBQUcsSUFBSSxPQUFPLGVBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2hELE9BQU8sRUFBRSxVQUFVLEdBQUc7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyRCxPQUFPLEdBQUcsQ0FBQztTQUNaO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQztTQUNaO0lBQ0gsQ0FBQztJQUNELFNBQVMsRUFBRSxHQUFHO0NBQ2YsQ0FBQSJ9