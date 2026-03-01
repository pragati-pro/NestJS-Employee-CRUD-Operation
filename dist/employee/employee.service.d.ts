import { Model } from 'mongoose';
import { CreateEmployeeDto } from 'src/dto/create-employee.dto';
import { UpdateEmployeeDto } from 'src/dto/update-employee.dto';
import { Employee, EmployeeDocument } from 'src/schema/employee.schema';
export declare class EmployeeService {
    private employeeModel;
    constructor(employeeModel: Model<EmployeeDocument>);
    create(createEmployeeDto: CreateEmployeeDto): Promise<EmployeeDocument>;
    findAll(): Promise<EmployeeDocument[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, EmployeeDocument, {}, import("mongoose").DefaultSchemaOptions> & Employee & Document & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<EmployeeDocument>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, EmployeeDocument, {}, import("mongoose").DefaultSchemaOptions> & Employee & Document & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
