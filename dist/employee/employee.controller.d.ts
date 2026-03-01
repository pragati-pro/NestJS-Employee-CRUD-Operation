import { CreateEmployeeDto } from 'src/dto/create-employee.dto';
import { EmployeeService } from './employee.service';
export declare class EmployeeController {
    private employeeService;
    constructor(employeeService: EmployeeService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<import("../schema/employee.schema").EmployeeDocument>;
    findAll(): Promise<import("../schema/employee.schema").EmployeeDocument[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../schema/employee.schema").EmployeeDocument, {}, import("mongoose").DefaultSchemaOptions> & import("../schema/employee.schema").Employee & Document & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    update(id: string, updateEmployeeDto: CreateEmployeeDto): Promise<import("../schema/employee.schema").EmployeeDocument>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../schema/employee.schema").EmployeeDocument, {}, import("mongoose").DefaultSchemaOptions> & import("../schema/employee.schema").Employee & Document & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
