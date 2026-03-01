export type EmployeeDocument = Employee & Document;
export declare class Employee {
    FirstName: string;
    SurName: string;
    Designation: string;
    Email: string;
    Address: string;
    Salary: string;
    Gender: string;
}
export declare const EmployeeSchema: import("mongoose").Schema<Employee, import("mongoose").Model<Employee, any, any, any, (import("mongoose").Document<unknown, any, Employee, any, import("mongoose").DefaultSchemaOptions> & Employee & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, Employee, any, import("mongoose").DefaultSchemaOptions> & Employee & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Employee>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Employee, import("mongoose").Document<unknown, {}, Employee, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Employee & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    FirstName?: import("mongoose").SchemaDefinitionProperty<string, Employee, import("mongoose").Document<unknown, {}, Employee, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Employee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    SurName?: import("mongoose").SchemaDefinitionProperty<string, Employee, import("mongoose").Document<unknown, {}, Employee, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Employee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    Designation?: import("mongoose").SchemaDefinitionProperty<string, Employee, import("mongoose").Document<unknown, {}, Employee, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Employee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    Email?: import("mongoose").SchemaDefinitionProperty<string, Employee, import("mongoose").Document<unknown, {}, Employee, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Employee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    Address?: import("mongoose").SchemaDefinitionProperty<string, Employee, import("mongoose").Document<unknown, {}, Employee, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Employee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    Salary?: import("mongoose").SchemaDefinitionProperty<string, Employee, import("mongoose").Document<unknown, {}, Employee, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Employee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    Gender?: import("mongoose").SchemaDefinitionProperty<string, Employee, import("mongoose").Document<unknown, {}, Employee, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Employee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Employee>;
