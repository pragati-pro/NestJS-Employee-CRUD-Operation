"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmployeeDto = void 0;
const create_employee_dto_1 = require("./create-employee.dto");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateEmployeeDto extends (0, mapped_types_1.PartialType)(create_employee_dto_1.CreateEmployeeDto) {
}
exports.UpdateEmployeeDto = UpdateEmployeeDto;
//# sourceMappingURL=update-employee.dto.js.map