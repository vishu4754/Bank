"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class VersionSchema extends mongoose_1.default.Schema {
    constructor(schema, options) {
        const versionSchema = {
            createdAt: {
                type: Date,
                default: Date.now
            },
            originalId: String,
            createdBy: String,
            updatedAt: Date,
            updatedBy: String,
            deletedAt: Date,
            deletedBy: String,
        };
        super(Object.assign(Object.assign({}, schema), versionSchema), options);
    }
}
exports.default = VersionSchema;
//# sourceMappingURL=VersionSchema.js.map